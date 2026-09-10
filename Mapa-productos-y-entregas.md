# Mapa de productos y entrega — Matavicios

Este documento recoge los valores aprobados para el lanzamiento en Stripe y la automatización posterior. No contiene enlaces de pago activos aún.

| ID interno | Nombre Stripe | Precio final | Archivo de entrega | Ruta web tras publicar `matavicios.com` |
|---|---|---:|---|---|
| `tabaco` | `Matavicios · Deja el tabaco` | 4,99 € | `Matavicios-Deja-el-Tabaco.pdf` | `https://matavicios.com/downloads/Matavicios-Deja-el-Tabaco.pdf` |
| `cannabis` | `Matavicios · Cambiar tu relación con el cannabis` | 4,99 € | `Matavicios-Cannabis.pdf` | `https://matavicios.com/downloads/Matavicios-Cannabis.pdf` |
| `pornografia` | `Matavicios · Uso de pornografía que te preocupa` | 4,99 € | `Matavicios-Uso-de-Pornografia.pdf` | `https://matavicios.com/downloads/Matavicios-Uso-de-Pornografia.pdf` |
| `pack` | `Matavicios · Pack completo` | 9,99 € | `Matavicios-Pack-Completo.zip` | `https://matavicios.com/downloads/Matavicios-Pack-Completo.zip` |

## Texto operativo para la descripción del pago

> Guía digital práctica para adultos. Incluye ejercicios sencillos para observar el patrón, preparar una pausa y elegir un siguiente paso. Material de autoayuda; no sustituye atención profesional.

## Reglas de entrega

La automatización debe reaccionar solo a un pago confirmado, identificar el enlace de pago del producto adquirido y enviar la URL asociada al correo proporcionado durante el pago. El pack se entrega como un ZIP con las tres guías. Las cuatro rutas se publican junto con la web estática en GitHub Pages; los enlaces son públicos, por lo que no constituyen un sistema de protección anticopia.
