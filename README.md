# 🛍️ Catálogo de Artículos

## Cómo agregar productos

1. **Pon tus imágenes** en la carpeta `imagenes/`
   - Formatos: JPG, PNG, WEBP
   - Nombre sugerido sin espacios: `tenis-nike.jpg`

2. **Abre `index.html`** en VS Code y busca la sección:
   ```
   const productos = [
   ```

3. **Agrega un bloque por producto:**
   ```js
   {
     imagen: "imagenes/tu-foto.jpg",
     nombre: "Nombre del Artículo",
     precio: 299,
     moneda: "$",
     nuevo: true   // o false
   },
   ```

4. Guarda y abre `index.html` en tu navegador. ¡Listo!

## Estructura de archivos
```
catalogo/
├── index.html       ← página principal
├── imagenes/        ← pon aquí tus fotos
│   ├── producto1.jpg
│   └── ...
└── README.md
```
