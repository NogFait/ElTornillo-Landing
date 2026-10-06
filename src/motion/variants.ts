// Escalonado corto: nunca más de ~4 pasos para no alargar la espera. Devuelve segundos.
export const stagger = (index: number, step = 0.07, max = 4) => Math.min(index, max) * step
