# EcoRoots IoT — Manual de Marca (Brand Guidelines)

> Documento fuente de verdad para el diseño y desarrollo de la landing page comercial de **EcoRoots IoT**.
> Toda decisión de diseño, texto, color y componente debe validarse contra este archivo.
> Última actualización: 19 de septiembre de 2026.

---

## 0. Regla de oro

Cada decisión debe responder **"Sí"** a esta pregunta:

> **¿Esto ayuda a que una persona que nunca ha oído hablar de EcoRoots entienda y recuerde la marca?**

Si algo solo existe porque "se ve bonito", se cuestiona.
Si complica la comprensión, se simplifica.
Si hace la página más lenta, se optimiza.

**Nunca sacrificar claridad por decoración.**

---

## 1. Identidad de la marca

### Nombre
**EcoRoots IoT**

### Significado
| Componente | Significado |
|------------|-------------|
| **Eco** | Sostenibilidad, naturaleza, agricultura responsable, cuidado del entorno. |
| **Roots** | Raíces, suelo, sistema radicular, lo que ocurre bajo la superficie. |
| **IoT** | Sensores, conectividad, datos, tecnología. |

### Tagline oficial (dato real, presente en el logo)
> **Tecnología Agrícola y Bioacústica del Suelo**

Este descriptor es parte del logotipo real y debe respetarse. Introduce un concepto propio y diferenciador: **bioacústica del suelo** (escuchar/analizar las vibraciones que ocurren bajo tierra).

### Posicionamiento
EcoRoots **no** es una empresa puramente ecológica **ni** una empresa puramente tecnológica.

> Es una **empresa de tecnología agrícola sostenible (AgTech / IoT)**.

La identidad transmite la unión de:

**NATURALEZA + RAÍCES + TECNOLOGÍA + DATOS + AGRICULTURA**

### Categoría
Emprendimiento **AgTech / IoT** — agricultura de precisión accesible.

### Qué hacemos (en una frase)
> EcoRoots detecta micro-vibraciones asociadas a actividad subterránea mediante sensores especializados y las transforma en información comprensible para el usuario.

### Propósito
> Hacer más accesible el monitoreo inteligente del suelo.

---

## 2-BIS. Paleta de dirección de arte implementada (VIGENTE EN LA WEB)

> Por decisión de diseño, la landing usa una **paleta refinada AgTech-editorial** (verde casi-negro + crema cálida + acento oro cosecha), pensada para transmitir naturaleza + suelo + tecnología con acabado premium y alto contraste, apoyándose en fotografía real. Esta es la paleta **vigente en el código** (`tailwind.config.ts`).

| Token | Nombre | HEX | Rol |
|-------|--------|-----|-----|
| `forest` | Deep Canopy | `#0E1512` | Base oscura premium, fondos principales, navbar, footer. |
| `moss` | Field Green | `#6FA173` | Verde vivo del cultivo, estados positivos, lecturas. |
| `sand` | Warm Linen | `#E7DECC` → `#F5F1E8` | Secciones claras editoriales, texto sobre oscuro. |
| `clay` | Harvest Gold | `#D9A94C` | **Acento principal**: CTAs, énfasis tipográfico, detalles finos. |
| `soil` | Deep Soil | `#2E1D12` | Secciones tierra/subsuelo, gradientes. |
| `terra` | Terracotta | `#B4703F` | Acento secundario cálido, suelo y raíces. |

La paleta original de EcoRoots (sección 2) se conserva como referencia histórica de marca.

---

## 2. Paleta de colores (referencia original de marca)

Estos cinco colores son la **identidad principal**. No se introducen colores nuevos que compitan con ellos.

| # | Nombre | HEX | Rol principal |
|---|--------|-----|---------------|
| 1 | **Deep Forest** | `#102820` | Fondos principales, hero, navbar, footer, secciones de alto contraste, elementos tecnológicos, fondos oscuros premium. |
| 2 | **Earth Green** | `#4C6444` | Elementos secundarios, botones secundarios, cards, highlights, estados positivos, gradientes sutiles. |
| 3 | **Natural Sand** | `#CABA9C` | Fondos claros, secciones editoriales, separadores, cards claras. Evita que la página sea 100% oscura. Aporta tierra + material orgánico + elegancia. |
| 4 | **Earth Brown** | `#8A6240` | Acentos, elementos de "suelo", detalles gráficos, hover states, líneas, visualizaciones. **Usar con moderación.** |
| 5 | **Deep Earth** | `#4D2D18` | Acentos oscuros, detalles de tierra, gradientes, secciones especiales, raíces/subsuelo. **No debe dominar.** |

### Tokens sugeridos (para implementación)
```css
:root {
  --deep-forest:  #102820;
  --earth-green:  #4C6444;
  --natural-sand: #CABA9C;
  --earth-brown:  #8A6240;
  --deep-earth:   #4D2D18;
}
```

### Reglas de color
- **Permitido** solo como colores funcionales de interfaz: blanco, negro y transparencias, únicamente para legibilidad/accesibilidad.
- **Prohibido:** verde neón, azul tecnológico genérico, morado, cyan cyberpunk, gradientes aleatorios, colores saturados ajenos a la marca.
- La **tecnología** se expresa mediante **contraste + iluminación + profundidad + movimiento + datos**, nunca mediante colores futuristas genéricos.

### Guía rápida de contraste
- Texto claro (`#CABA9C` / blanco) sobre `#102820` o `#4D2D18`.
- Texto oscuro (`#102820` / `#4D2D18`) sobre `#CABA9C`.
- `#8A6240` y `#4D2D18` como acentos, no como grandes áreas de texto.
- Verificar siempre contraste mínimo AA (4.5:1 para texto normal).

---

## 3. Logo (ACTIVOS REALES DEL PROYECTO)

El logo **ya existe** en la raíz del proyecto. **No redibujar, no recrear en CSS, no deformar, no recolorear, no aplicar efectos que rompan su legibilidad.**

### Descripción del logotipo
- **Símbolo:** un brote/planta con hojas creciendo hacia arriba, un sistema de **raíces** (marrón) hacia abajo, flanqueado por **barras tipo onda de sonido** que representan las vibraciones/bioacústica del suelo.
- **Wordmark:** "Eco" (verde profundo) + "Roots" (marrón tierra).
- **Descriptor:** "TECNOLOGÍA AGRÍCOLA Y BIOACÚSTICA DEL SUELO".

### Inventario de variantes disponibles

| Archivo | Descripción | Uso recomendado |
|---------|-------------|-----------------|
| `logo-horizontal-light.png` | Horizontal, fondo arena claro, a color, con descriptor. | Secciones claras (`#CABA9C`). |
| `logo-horizontal-light-transparent.png` | Horizontal, **fondo transparente**, "Eco" verde profundo + "Roots" marrón. | Sobre fondos claros sin caja fija. **Preferida** para secciones claras. |
| `logo-horizontal-dark.png` | Horizontal, fondo Deep Forest, "Eco" crema + "Roots" marrón. | Secciones oscuras con caja. |
| `logo-horizontal-dark-transparent.png` | Horizontal, **fondo transparente**, para fondos oscuros. | **Navbar y footer oscuros.** Preferida sobre `#102820`. |
| `logo-horizontal-dark-clean.png` | Versión tenue / desaturada, baja opacidad. | **Solo como marca de agua / textura de fondo** muy sutil. No usar como logo principal. |
| `logo-icon.png` | Solo el símbolo (planta + raíces + ondas). | Navbar compacto, favicon, app icon, móvil. |
| `logo-icon-transparent.png` | Símbolo con fondo transparente. | Favicon, marcadores, elementos pequeños, watermark del icono. |
| `logo-vertical-light.png` | Símbolo + wordmark apilados, fondo arena. | Hero, footer, móvil sobre fondo claro. |
| `logo-vertical-dark.png` | Símbolo + wordmark apilados, fondo Deep Forest. | Hero, footer, móvil sobre fondo oscuro. |

### Reglas de uso del logo
- Elegir la variante **según el fondo** (clara sobre oscuro, oscura sobre claro). Preferir las **transparentes** para integrarlas limpiamente.
- Mantener **espacio de seguridad** (mínimo la altura de la letra "E" del wordmark alrededor de todo el logo).
- **Tamaño mínimo legible:** wordmark horizontal ≥ 140 px de ancho; icono ≥ 32 px.
- Presencia obligatoria en: **Navbar, Hero, Footer.** Opcional en otras secciones cuando aporte.
- No estirar, rotar, aplicar sombras duras, gradientes ni bordes que alteren su lectura.

---

## 4. Tono de voz (OBLIGATORIO)

**Español formal y profesional, tratamiento de "usted".** Esto es innegociable.

### Personalidad
> Formal + tecnológico + cercano + profesional + confiable.

No suena a institución gubernamental ni a tesis académica.
Suena a **startup profesional** hablando directamente con potenciales **clientes, aliados o inversionistas**.

### Prohibido (tuteo e informalidad)
`tú` · `te` · `tu cultivo` · `descubre` · `conecta tu sensor` · `mira cómo funciona` · `protege tus cultivos`

### Preferido (usted)
`usted` · `su cultivo` · `su parcela` · `conozca` · `descubra` · `conecte` · `consulte` · `solicite`

### Ejemplos
| ❌ Incorrecto | ✅ Correcto |
|--------------|------------|
| "Descubre qué está ocurriendo debajo de tu cultivo." | "Descubra qué está ocurriendo debajo de su cultivo." |
| "Conecta tus sensores." | "Conecte sus sensores." |
| "Protege tus cultivos." | "Proteja sus cultivos." |
| "Mira cómo funciona." | "Conozca cómo funciona." |

### Regla de traducción ciencia → comercial
La landing **no es** el documento de investigación. Se toma la ciencia y se convierte en historia comercial.
- ✅ "Utilizamos procesamiento espectral mediante FFT para analizar las señales captadas."
- ❌ Ecuaciones completas, párrafos densos, jerga sin traducir.
- La profundidad técnica se demuestra **visualmente**, no con muros de texto.

---

## 5. Concepto creativo central

> ## "VER LO QUE OCURRE BAJO EL SUELO."

Es el pilar visual y narrativo de toda la landing. Todo juega con la dualidad:

**SUPERFICIE ⟷ SUBSUELO**

Flujo visual que la marca cuenta:

```
SUELO → SENSOR → DATOS → ANÁLISIS → MAPA → INFORMACIÓN
```

Idea de recorrido: una planta sobre la tierra; al hacer scroll la "cámara" desciende y se revelan raíces, suelo, sensores, ondas, actividad y datos; luego esos datos ascienden hacia una interfaz digital.

---

## 6. Dirección artística

**Estética objetivo:** *AgTech premium* que mezcla naturaleza + hardware + ciencia + datos + software.

| Sí queremos | No queremos |
|-------------|-------------|
| Profundidad, materialidad, tierra, raíces | Landing SaaS genérica |
| Texturas sutiles, formas orgánicas | Dashboard / interfaz administrativa |
| Datos, tecnología, elegancia | "Diseño de Arduino" / feria científica |
| Espacios amplios, tipografía moderna | Página excesivamente corporativa |
| Animaciones cuidadas y con propósito | 100% verde / cyberpunk / neón |
| Alto contraste, jerarquía visual clara | Exceso de glassmorphism |

### La tierra como lenguaje visual
Representar el suelo mediante: texturas, partículas, capas, líneas topográficas, redes de raíces, ondas, puntos de datos, mapas, formas orgánicas y gradientes derivados de la paleta. El visitante debe sentir que "entra" bajo el suelo.

### Animaciones
Con **propósito narrativo**, no fade-in genérico. Deben contar: señal nace bajo el suelo → viaja por la sonda → se vuelve señal gráfica → se transforma en datos → llega a la plataforma → se muestra una zona de actividad.

---

## 7. Tipografía (dirección)

- **Sans-serif moderna y geométrica** para titulares y UI (peso, contraste, jerarquía fuerte).
- Cuerpo legible y con buen tracking; secciones editoriales pueden usar mayor interlineado.
- Titulares con carácter, subtítulos discretos, excelente jerarquía visual.
- (El wordmark del logo usa una sans robusta; la tipografía web debe convivir con él sin competir.)

---

## 8. Productos (datos reales del pitch)

> Presentar **qué ofrecemos + qué modalidad existe + para quién está pensada**. **No** montar una tienda electrónica si no hay compra real. CTA: **"Solicitar información"** o **"Solicitar una demostración"**.

### EcoRoots Standalone
- Solución individual: plantas, macetas, huertos pequeños, viveros, monitoreo puntual.
- Precio planteado: **Q500**

### EcoRoots Perimetral Pro
- Sistema de **cuatro sensores coordinados**: parcelas, camas de cultivo, áreas agrícolas, monitoreo espacial, localización aproximada de focos de actividad.
- Precio planteado: **Q1,600**

---

## 9. Tecnología (traducir ciencia a comercial)

Fundamento técnico real: detección de **plagas edáficas** mediante análisis de **micro-vibraciones**. Formato ideal: **componente → función → resultado.**

| Componente | Función |
|------------|---------|
| **ESP32** | Microcontrolador principal. |
| **Sensor piezoeléctrico** | Captura de vibraciones mecánicas. |
| **Guía de onda** | Transfiere las vibraciones del suelo al sistema de detección. |
| **FFT** | Analiza las señales en el dominio de la frecuencia. |
| **Sensor de humedad** | Considera las condiciones del suelo durante el análisis. |
| **ESP-NOW** | Comunicación entre sensores/nodos. |
| **Mapeo espacial** | Representa diferencias de actividad entre múltiples nodos. |
| **Inteligencia artificial** | Capa de interpretación: convierte datos complejos en orientación comprensible. |

El sistema contempla **sensores individuales** y **arreglos de cuatro nodos** para ampliar cobertura y realizar análisis espacial.

---

## 10. Equipo (datos reales)

- **Henry** — **Fundador** de EcoRoots IoT.

> **No inventar** integrantes, cargos, certificaciones, alianzas, clientes ni reconocimientos. Si aparecen fotos/nombres reales en el proyecto, usarlos correctamente.

---

## 11. Contacto (PLACEHOLDERS — completar con datos reales)

Los enlaces reales **no existen aún** en el proyecto. Se estructuran como placeholders fáciles de sustituir. **Nunca** colocar números, usernames o URLs ficticios como si fueran reales.

```env
# Reemplazar por los datos reales antes de publicar
WHATSAPP_URL = "PENDIENTE"   # ej. https://wa.me/502XXXXXXXX
INSTAGRAM_URL = "PENDIENTE"  # ej. https://instagram.com/ecoroots.iot
```

- Botón WhatsApp: **"Escríbanos por WhatsApp"** → `WHATSAPP_URL`
- Botón Instagram: **"Síganos en Instagram"** → `INSTAGRAM_URL`
- Presencia de contacto distribuida (sin saturar): CTA en Hero, botón WhatsApp, Instagram en navbar/menú, sección de contacto y footer.

Sección obligatoria: **"Hablemos"** / **"Contáctenos"**.

---

## 12. Mensajes memorables (lo que debe recordar el visitante)

| Idea | Mensaje |
|------|---------|
| **EcoRoots** | Tecnología agrícola inteligente. |
| **Problema** | Las amenazas subterráneas pueden permanecer invisibles. |
| **Solución** | EcoRoots detecta micro-vibraciones y transforma esas señales en información. |
| **Tecnología** | IoT + sensores + procesamiento de señales + análisis espacial + IA. |
| **Producto** | Una solución individual y una solución perimetral. |
| **Propósito** | Hacer más accesible el monitoreo inteligente del suelo. |
| **Contacto** | WhatsApp + Instagram. |

### Frase ancla de la marca
> **EcoRoots IoT — Tecnología para descubrir lo que ocurre debajo del suelo.**

---

## 13. Regla sobre el contenido

**No inventar:** clientes, ventas, usuarios, certificaciones, premios, alianzas, inversionistas, resultados experimentales no confirmados, porcentajes comerciales, precisión del sistema, testimonios ni casos de éxito.

Si se necesita un elemento visual para el pitch sin dato real, usar una **representación conceptual** sin convertirla en afirmación factual.

---

## 14. Jerarquía de prioridades (para resolver disyuntivas)

1. **Claridad de la propuesta**
2. Identidad de EcoRoots
3. Impacto visual del pitch
4. Credibilidad
5. Experiencia de usuario
6. Rendimiento
7. Detalles decorativos

---

## 15. Secciones mínimas obligatorias de la landing

Navbar · Hero · Problema · Quiénes somos · La solución · Cómo funciona · Tecnología · Mapeo/monitoreo · Qué ofrecemos · EcoRoots Standalone · EcoRoots Perimetral Pro · Nuestra identidad/colores · Visión · Contacto (WhatsApp + Instagram) · Footer.

> Pueden combinarse cuando tenga sentido, pero **ningún contenido debe desaparecer**.

---

## 16. Requisitos transversales

- **Responsive real** (desktop, laptop, tablet, smartphone): el storytelling se mantiene, los elementos se reorganizan, las animaciones se simplifican si es necesario, los CTA y WhatsApp siempre visibles, el logo con buena presencia.
- **Rendimiento:** imágenes optimizadas, lazy loading, code splitting cuando aplique, evitar dependencias y renders innecesarios, excelente rendimiento móvil.
- **Accesibilidad:** contraste suficiente, estados hover/focus, navegación por teclado, `alt` en imágenes, botones identificables, tamaños táctiles adecuados, jerarquía semántica.

---

## 17. Referencias estructurales de diseño (inspiración)

> Se toman como referencia por su **nivel de fineza tipográfica, uso didáctico de imágenes/recursos visuales, poco texto y alta legibilidad**. Se copia la **estructura y el lenguaje de composición, NUNCA los colores** (la paleta de EcoRoots de la sección 2 es inamovible).

### Referencia A — NYA (`nyaclothes.com`) — *Hero cinematográfico*
Qué tomamos:
- **Hero full-bleed** con imagen/video a pantalla completa y **wordmark/titular gigante** superpuesto.
- **Navbar minimalista** (3–4 enlaces) + utilidades a la derecha (idioma/moneda, buscar, carrito → en nuestro caso Instagram/WhatsApp).
- **Casi cero texto** sobre el hero; solo **captions cortos tipo etiqueta** (p. ej. "NEW COLLECTION / CATÁLOGO") en minúsculas espaciadas.
- Alto contraste entre imagen oscura y tipografía clara.

Aplicación EcoRoots:
- Hero con visual potente de **suelo + raíces + sonda + ondas**; titular gigante **"ECOROOTS IoT"** superpuesto; captions tipo `TECNOLOGÍA AGRÍCOLA · BIOACÚSTICA DEL SUELO`.

### Referencia B — Jean Paul Gaultier — *Editorial / split-screen*
Qué tomamos:
- **Bloques split-screen** (dos paneles) con **imagen protagonista** en cada uno.
- **Tipografía condensada en mayúsculas** como rótulo de cada panel (p. ej. "MODA" / "FRAGANCIAS").
- **Un solo CTA** por bloque ("DESCUBRIR"), botón rectangular limpio.
- Composición de lujo, aire, gradientes sutiles, foco en la imagen.

Aplicación EcoRoots:
- Sección de **productos** como split-screen: **EcoRoots Standalone** | **EcoRoots Perimetral Pro**, cada panel con su visual, rótulo condensado y un único CTA **"Solicitar información"**.
- Útil también para el contraste **SUPERFICIE | SUBSUELO**.

### Referencia C — Quant24 — *Tech premium / datos como recurso visual*
Qué tomamos:
- **Titular grande con énfasis en itálica** sobre una palabra clave, **párrafo de apoyo muy corto** (2–3 líneas).
- **Doble CTA**: primario tipo **pill sólido** + secundario **outline**; y un **enlace terciario** discreto debajo.
- **Fila de tarjetas/tiles** que muestran **datos como visual**: métricas grandes (`1.2s`, `300+`), **mini-gráficos/sparklines**, y una **tarjeta de código/API** con estética de terminal.
- Mucho **espacio en blanco**, monocromía, jerarquía impecable.

Aplicación EcoRoots:
- Hero estilo Quant24: **"Tecnología para ver lo que ocurre *bajo el suelo*."** + párrafo breve + doble CTA (**"Conozca nuestra tecnología"** pill / **"Contáctenos"** outline) + enlace terciario ("Explore cómo funciona").
- Sección **Tecnología / Cómo funciona** con tiles de datos: mini-espectrogramas/ondas FFT, métricas conceptuales (marcadas como conceptuales, ver sección 13), y una tarjeta tipo terminal con lectura de sensor (ESP32 / ESP-NOW).

### Principios transversales destilados de las 3 referencias
1. **Menos texto, más imagen.** Cada sección comunica una idea con un visual protagonista y una línea de copy.
2. **Tipografía como sistema:** titulares grandes y seguros, énfasis puntual (peso o itálica), captions en mayúsculas espaciadas, cuerpo mínimo.
3. **Un mensaje y un CTA por sección** (evitar competencia de acciones).
4. **Datos convertidos en recurso visual** (tiles, métricas, sparklines, tarjetas tipo terminal), no en párrafos.
5. **Aire y ritmo:** generoso espacio en blanco/negro y sensación editorial, no de dashboard.
6. **Alto contraste** imagen ⟷ tipografía para máxima legibilidad.

> Recordatorio: se replican **composición, ritmo y jerarquía**; el color y el contenido son 100% EcoRoots.

### Blueprint de secciones (estructura aplicada)
| Sección | Patrón de referencia | Composición |
|---------|----------------------|-------------|
| Navbar | NYA | Minimalista: logo + 4 enlaces + utilidades (Instagram, CTA "Contáctenos"). |
| Hero | NYA + Quant24 | Visual full-bleed subsuelo + titular gigante con énfasis itálica + párrafo breve + doble CTA + captions. |
| Problema | JPG editorial | Split/stack SUPERFICIE ⟷ SUBSUELO, imagen protagonista, poco texto. |
| Quiénes somos | JPG editorial | Bloque editorial con aire, foto/visual + copy breve, Henry (fundador). |
| Cómo funciona | Quant24 | Pasos 01–05 como tiles/timeline horizontal, íconos/mini-visuales. |
| Tecnología | Quant24 | Grid de tiles componente→función + tarjeta tipo terminal + ondas FFT. |
| Mapeo / monitoreo | Quant24 | Visualización de nodos + métricas conceptuales. |
| Qué ofrecemos / Productos | JPG split-screen | Standalone \| Perimetral Pro, rótulo condensado, un CTA c/u. |
| Nuestra identidad / colores | Editorial premium | Swatches animados de la paleta, no cuadrados pegados. |
| Contacto | NYA/Quant24 | CTA claro, botones WhatsApp + Instagram. |
| Footer | — | Logo (variante oscura), enlaces, contacto, tagline ancla. |

---

*Repositorio: https://github.com/hlima-2021464/EcoRoots-IoT-comercial-landing-page.git*
