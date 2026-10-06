import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
  'aria-hidden': true,
  focusable: false,
}

// Tuerca hexagonal: marca de la ferretería
export const HexNut = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2.5 20.5 7.25v9.5L12 21.5 3.5 16.75v-9.5Z" />
    <circle cx="12" cy="12" r="3.25" />
  </svg>
)

export const ArrowRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const Close = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
)

export const Package = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3 20.5 7.5v9L12 21l-8.5-4.5v-9Z" />
    <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
  </svg>
)

export const Bolt = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6Z" />
  </svg>
)

export const Pin = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 21.5s7-6.2 7-11.5a7 7 0 0 0-14 0c0 5.3 7 11.5 7 11.5Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const Star = ({ filled, ...props }: IconProps & { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    focusable={false}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinejoin="miter"
    {...props}
  >
    <path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9Z" />
  </svg>
)
