/** Datos de contenido de la landing EcoRoots IoT (fuente: brand.md). */

export const BRAND = {
  name: "EcoRoots IoT",
  tagline: "Tecnología Agrícola y Bioacústica del Suelo",
  anchor: "Tecnología para descubrir lo que ocurre debajo del suelo.",
  founder: "Henry",
} as const;

/** Imágenes (libres, Unsplash) descargadas en /public/images. */
export const IMAGES = {
  heroSeedtray: "/images/hero-seedtray.jpg", // bandeja de germinación, oscura y cinematográfica
  techCircuit: "/images/tech-circuit.jpg", // placa de circuito macro
  aerialRows: "/images/aerial-rows.jpg", // hileras aéreas de cultivo
  cropLowangle: "/images/crop-lowangle.jpg", // cultivo a contraluz, suelo en primer plano
  handPlanting: "/images/hand-planting.jpg", // mano sembrando en bandeja
  fieldSunset: "/images/field-sunset.jpg", // campo al atardecer
  fieldSplit: "/images/field-split.jpg", // campo dividido verde/dorado
  soilScoop: "/images/soil-scoop.jpg", // tierra con pala, tono oscuro
  seedPots: "/images/seed-pots.jpg", // macetas de semillero (cenital)
  grainTexture: "/images/grain-texture.jpg", // textura de grano dorado
} as const;

export const LOGOS = {
  horizontalDark: "/logos/logo-horizontal-dark-transparent.png",
  horizontalLight: "/logos/logo-horizontal-light-transparent.png",
  verticalDark: "/logos/logo-vertical-dark.png",
  verticalLight: "/logos/logo-vertical-light.png",
  icon: "/logos/logo-icon-transparent.png",
  watermark: "/logos/logo-horizontal-dark-clean.png",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Qué ofrecemos", href: "#productos" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Contacto", href: "#contacto" },
] as const;

/** Pasos de "Cómo funciona" (brand.md, sección 10). */
export const STEPS = [
  {
    n: "01",
    title: "Detectamos",
    text: "La sonda entra en contacto con el suelo y capta micro-vibraciones.",
  },
  {
    n: "02",
    title: "Procesamos",
    text: "El sistema analiza las señales obtenidas mediante procesamiento digital.",
  },
  {
    n: "03",
    title: "Comparamos",
    text: "Los sensores trabajan conjuntamente para comparar la actividad entre diferentes puntos.",
  },
  {
    n: "04",
    title: "Localizamos",
    text: "Los datos permiten generar una representación espacial de las zonas con mayor actividad.",
  },
  {
    n: "05",
    title: "Interpretamos",
    text: "La plataforma transforma los datos técnicos en información comprensible para usted.",
  },
] as const;

/** Tecnologías (brand.md, sección 11): componente → función. */
export const TECH = [
  { name: "ESP32", fn: "Microcontrolador principal." },
  { name: "Sensor piezoeléctrico", fn: "Captura de vibraciones mecánicas." },
  { name: "Guía de onda", fn: "Transfiere las vibraciones del suelo al sistema de detección." },
  { name: "FFT", fn: "Analiza las señales en el dominio de la frecuencia." },
  { name: "Sensor de humedad", fn: "Considera las condiciones del suelo durante el análisis." },
  { name: "ESP-NOW", fn: "Comunicación entre sensores y nodos." },
  { name: "Mapeo espacial", fn: "Representa diferencias de actividad entre múltiples nodos." },
  { name: "Inteligencia artificial", fn: "Convierte datos complejos en orientación comprensible." },
] as const;

/** Modalidades de producto (brand.md, sección 9). */
export const PRODUCTS = [
  {
    id: "standalone",
    name: "EcoRoots Standalone",
    kind: "Solución individual",
    price: "Q500",
    description:
      "Una sonda individual para monitoreo puntual de la actividad subterránea.",
    for: ["Plantas", "Macetas", "Huertos pequeños", "Viveros", "Monitoreo puntual"],
    highlights: ["1 sonda de detección", "Micro-vibraciones + humedad", "Lectura individual"],
  },
  {
    id: "perimetral",
    name: "EcoRoots Perimetral Pro",
    kind: "Sistema perimetral",
    price: "Q1,600",
    description:
      "Cuatro sensores coordinados que amplían la cobertura y estiman dónde se concentra la actividad.",
    for: ["Parcelas", "Camas de cultivo", "Áreas agrícolas", "Monitoreo espacial"],
    highlights: ["4 nodos coordinados", "Comunicación ESP-NOW", "Localización aproximada de focos"],
  },
] as const;

/** Capacidades de "Qué ofrecemos" (brand.md, sección 8). */
export const OFFERINGS = [
  { title: "Detección", text: "Detectamos micro-vibraciones asociadas a actividad subterránea." },
  { title: "Monitoreo", text: "Recopilamos y procesamos los datos obtenidos por los sensores." },
  { title: "Análisis", text: "Transformamos señales técnicas en información comprensible." },
  { title: "Localización", text: "Estimamos dónde existe mayor actividad dentro del área monitoreada." },
  { title: "Inteligencia", text: "La plataforma utiliza IA como capa de interpretación y asistencia." },
  { title: "Información accionable", text: "Le ayudamos a comprender su suelo y decidir con más información." },
] as const;
