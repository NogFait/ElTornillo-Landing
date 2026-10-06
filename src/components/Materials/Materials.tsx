import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { materiales } from '../../data/dataMaterials'
import MaterialList from '../MaterialList/MaterialList'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Materials.module.css'

const Materials = () => {
  const [openId, setOpenId] = useState<number | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const open = materiales.find((item) => item.id === openId) ?? null

  const handleOpen = (id: number, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setOpenId(id)
  }

  const handleClose = useCallback(() => setOpenId(null), [])

  return (
    <section className={styles.materials} aria-labelledby="materials-title">
      <div className="container">
        <SectionHeader index="02" eyebrow="Catálogo" title="Catálogo de" accent="materiales" id="materials-title" />
        <LayoutGroup>
          <MaterialList onOpen={handleOpen} />
          <AnimatePresence>
            {open && (
              <ProductDetail key={open.id} material={open} onClose={handleClose} returnFocusTo={triggerRef} />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  )
}

export default Materials
