// Actualizar estos valores a medida que avance el lanzamiento.
export const TOTAL_CUPOS = 5;
export const CUPOS_OCUPADOS = 1;
export const CUPOS_DISPONIBLES = TOTAL_CUPOS - CUPOS_OCUPADOS;

// Fecha de cierre del lanzamiento, formato AAAA-MM-DD. Dejar en null si
// todavía no hay fecha definida. Una vez que esta fecha pasa, el sitio deja
// de mostrarla automáticamente (no hace falta acordarse de sacarla).
export const FECHA_CIERRE_ISO: string | null = "2026-08-27";

export const FECHA_CIERRE = FECHA_CIERRE_ISO
  ? new Date(`${FECHA_CIERRE_ISO}T00:00:00`).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
    })
  : null;
