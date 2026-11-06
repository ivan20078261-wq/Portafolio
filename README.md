# Portafolio - Ivan Molina

Portafolio personal de desarrollador React Native. SPA construida con **React 19**, **Vite**, **TypeScript** y **CSS puro**, desplegado en Netlify.

## 🚀 Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [framer-motion](https://www.framer.com/motion/) - Animaciones
- [lucide-react](https://lucide.dev/) - Iconografía
- [react-icons](https://react-icons.github.io/react-icons/) - Logos de tecnologías
- [@formspree/react](https://formspree.io/) - Formulario de contacto
- CSS puro con variables centralizadas (`src/styles/theme.css`)
- Google Fonts: *Inter* y *Plus Jakarta Sans*

## 📦 Scripts disponibles

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción (typecheck + vite build)
npm run lint   # Linting con ESLint
npm run preview # Vista previa del build
```

## 🎨 Diseño

- Paleta ampliada: primario (índigo), secundario (esmeralda), acento (ámbar) y neutros.
- **Dark mode real** con `data-theme`, toggle en el header y persistencia en `localStorage` (respeta `prefers-color-scheme`).
- Tipografía: *Inter* (cuerpo) + *Plus Jakarta Sans* (títulos).
- Diseño responsivo con breakpoints en CSS.
- Accesibilidad: `focus-visible`, `prefers-reduced-motion`, contraste WCAG AA.

## 🗂️ Estructura

```
src/
  styles/
    theme.css          # Variables CSS centralizadas (colores, tipografía, radios, sombras)
  utils/
    theme.ts           # Utilidades de tema (light/dark/system + localStorage)
  components/
    Header.tsx         # Navegación fija + toggle de tema
    Hero.tsx           # Sección principal con tarjeta de código
    About.tsx          # Sobre mí y detalles personales
    Skills.tsx         # Habilidades técnicas y herramientas
    Project.tsx        # Grid de proyectos con filtros
    Education.tsx      # Línea de tiempo de formación
    Contact.tsx        # Información de contacto + Formspree
    Footer.tsx         # Pie de página
  App.tsx              # Ensamblado de secciones
  main.tsx             # Punto de entrada
  index.css            # Reset, utilidades globales e import del theme
  App.css              # Layout estructural (header, hero, footer, etc.)
```

## 📄 Despliegue

El proyecto está configurado para desplegar en **Netlify** (`netlify.toml`). El build se publica en `dist/`.

```bash
npm run build
# Publica la carpeta dist/ en tu proveedor de hosting estático
```

## ✅ Verificación

```bash
npm run lint   # Linting limpio
npm run build  # Build de producción exitoso
```

---

Desarrollado por Ivan Molina - Desarrollador React Native
