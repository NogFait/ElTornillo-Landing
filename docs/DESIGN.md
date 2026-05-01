---
name: Industrial Utility
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5e3f3a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#926e69'
  outline-variant: '#e8bdb6'
  surface-tint: '#c00000'
  primary: '#9e0000'
  on-primary: '#ffffff'
  primary-container: '#cc0000'
  on-primary-container: '#ffdad4'
  inverse-primary: '#ffb4a8'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#4c4c4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#646464'
  on-tertiary-container: '#e3e1e1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  unit: 8px
  gutter: 16px
  margin: 24px
  container-max: 1280px
---

## Brand & Style

The design system is rooted in the aesthetics of industrial manufacturing and heavy-duty utility. It conveys unwavering reliability, precision, and strength. The target audience includes contractors, mechanics, and DIY enthusiasts who value efficiency over decoration.

The visual style leans into **Minimalism with Brutalist influences**. It avoids unnecessary ornamentation, favoring "raw" structural elements, heavy strokes, and high-contrast layouts. The interface should feel like a well-organized tool chest: every element has a clear purpose, is easy to find, and feels built to last.

## Colors

This design system utilizes a high-contrast palette designed for immediate legibility in varied lighting conditions, such as a workshop or construction site.

- **Primary Red:** Used for critical actions, branding accents, and urgent status indicators. It is a dense, "cautionary" red.
- **Secondary Black:** Provides the structural foundation. Used for heavy headers, primary buttons, and framing.
- **Tertiary Grey:** Represents the metallic nature of hardware. Used for secondary information and structural borders.
- **Backgrounds:** A very light grey "Neutral" is preferred over pure white to reduce glare and mimic the look of technical manuals or galvanized steel.

## Typography

The design system employs **Work Sans** across all levels due to its grounded, no-nonsense geometry. To reinforce the industrial theme, headlines use heavy weights (700-800) and tight letter-spacing to appear as if they were stamped into metal.

Labels should frequently utilize uppercase styling to mimic technical specifications and packaging labels. Body text remains highly legible with generous line heights to ensure readability of SKU numbers and technical dimensions.

## Layout & Spacing

This design system follows a **fixed grid model** to provide a sense of rigid structure and predictability. It uses a strict 8px base unit for all padding and margin increments.

The layout is built on a 12-column grid. Elements should align strictly to the grid lines, creating a "modular" look. Whitespace is used not for elegance, but for clarity and separation of functional zones. Gutters are kept tight (16px) to maximize the "packed" feel of a well-stocked hardware inventory.

## Elevation & Depth

To maintain a practical and professional feel, the design system rejects soft shadows and ambient blurs. Instead, it utilizes **Bold Borders** and **Tonal Layers** to establish hierarchy.

- **Borders:** Use 2px or 3px solid black or dark grey borders to define interactive surfaces.
- **Depth:** Surfaces do not "float"; they are stacked. Use a darker background shade to indicate a recessed area (like a tool tray) and a lighter shade for the primary work surface.
- **Hard Shadows:** If depth is required for a floating modal, use a 100% opacity hard-offset shadow (e.g., 4px 4px 0px #000000) to maintain the brutalist, mechanical aesthetic.

## Shapes

The shape language is strictly **Sharp (0px)**. Rectilinear forms reinforce the feeling of precision engineering and masonry. 

Right angles are used for buttons, input fields, cards, and containers. This lack of rounding communicates that the tools and services offered are serious, heavy-duty, and professional. Occasional 45-degree chamfered corners can be used for decorative "warning" patterns or specific icon containers to echo industrial safety markings.

## Components

### Buttons
Primary buttons are solid black with white uppercase text, featuring a 2px red bottom border that shifts to a full red background on hover. They must feel heavy and "clickable."

### Input Fields
Fields use a 2px solid grey border that turns black when focused. Labels are placed above the field in bold, uppercase typography to resemble technical forms.

### Cards
Cards are defined by a 1px solid grey border with no shadow. Headlines within cards should be bold and left-aligned. For product cards, use a light grey background for the image area to separate it from the white content area.

### Chips & Tags
Chips are rectangular with high-contrast backgrounds (Black or Red). They resemble physical dymo-labels or metal tags.

### Status Indicators
Use the primary red for "Out of Stock" or "Alert." Use a bright industrial green (only for status) for "In Stock" or "Ready." All indicators should be accompanied by clear text; do not rely on color alone.

### Additional Components
- **Technical Spec Tables:** High-density tables with alternating row stripes (Zebra striping) in light grey to help users read long rows of hardware dimensions.
- **Quantity Steppers:** Large, chunky plus/minus buttons that are easy to tap on mobile devices in high-activity environments.