export interface Material {
  id: number
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string; // Optional image URL
}