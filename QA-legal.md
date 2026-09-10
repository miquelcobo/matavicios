# Comprobación de la integración legal

**Fecha:** 10 de septiembre de 2026  
**Rutas comprobadas:** `/`, `/aviso-legal`, `/privacidad`, `/condiciones-compra` y `/cookies`.

Las cuatro páginas legales están enlazadas desde el pie de la landing y conservan la estética de Matavicios. Se han comprobado visualmente el aviso legal y la política de cookies en escritorio, las condiciones de compra en móvil y el pie legal de la landing en móvil. No se observan desbordamientos, enlaces ilegibles ni cortes de contenido.

La política de cookies declara una web sin analítica, publicidad ni píxeles opcionales. Para mantener esa declaración correcta, se eliminó el script de analítica opcional que estaba presente en el documento base.

La aplicación compila correctamente con `pnpm check` y `pnpm build`. Los textos legales incluyen marcadores entre corchetes para la identidad fiscal, domicilio, correos, dominio y proveedores definitivos. Mientras existan esos marcadores o `isConfigured` sea `false`, la web muestra un aviso visible de que no se debe publicar ni activar pagos. Esta es una protección intencionada: no es posible declarar el sitio legalmente final sin los datos reales del titular ni una revisión profesional de su situación fiscal.
