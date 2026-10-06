import type { ReactNode } from 'react'
import { ArrowRight } from '../Icons/Icons'
import styles from './ButtonLink.module.css'

interface Props {
  href: string
  variant?: 'primary' | 'dark' | 'ghost'
  external?: boolean
  onClick?: () => void
  children: ReactNode
}

// El botón es una cara que se mueve sobre una sombra dura fija: al hover se levanta
// (se ve más sombra), al presionar se hunde. Todo con transform, nada de animar box-shadow.
export const ButtonLink = ({ href, variant = 'primary', external, onClick, children }: Props) => (
  <a
    href={href}
    onClick={onClick}
    className={`${styles.button} ${styles[variant]}`}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    <span className={styles.face}>
      {children}
      <ArrowRight className={styles.arrow} width={18} height={18} />
    </span>
  </a>
)
