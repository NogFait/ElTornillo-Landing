// Número de WhatsApp en formato internacional sin "+" (ej. 5492615551234).
// Se configura con VITE_WHATSAPP_NUMBER; si no está, los CTA llevan a la sección de contacto.
const numero = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/\D/g, '')

export const tieneWhatsapp = Boolean(numero)

export function consultaHref(mensaje = 'Hola, quería hacer una consulta.') {
  return numero ? `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}` : '#contact'
}

export const direccion = 'Av. Arístides Villanueva 450'
export const mapsHref =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${direccion}, Mendoza, Argentina`)
