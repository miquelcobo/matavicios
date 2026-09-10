# Mapa de productos y entrega — Matavicios

Este documento recoge los valores aprobados para el lanzamiento en Stripe y la automatización posterior. No contiene enlaces de pago activos aún.

| ID interno | Nombre Stripe | Precio final | Archivo de entrega | Ruta web tras publicar `matavicios.com` |
|---|---|---:|---|---|
| `tabaco` | `Matavicios · Deja el tabaco` | 4,99 € | `Matavicios-Deja-el-Tabaco.pdf` | `https://matavicios.com/manus-storage/Matavicios-Deja-el-Tabaco_74e3959b.pdf` |
| `cannabis` | `Matavicios · Cambiar tu relación con el cannabis` | 4,99 € | `Matavicios-Cannabis.pdf` | `https://matavicios.com/manus-storage/Matavicios-Cannabis_a3066e0d.pdf` |
| `pornografia` | `Matavicios · Uso de pornografía que te preocupa` | 4,99 € | `Matavicios-Uso-de-Pornografia.pdf` | `https://matavicios.com/manus-storage/Matavicios-Uso-de-Pornografia_1fc1118f.pdf` |
| `pack` | `Matavicios · Pack completo` | 9,99 € | `Matavicios-Pack-Completo.zip` | `https://matavicios.com/manus-storage/Matavicios-Pack-Completo_3a99e673.zip` |

## Texto operativo para la descripción del pago

> Guía digital práctica para adultos. Incluye ejercicios sencillos para observar el patrón, preparar una pausa y elegir un siguiente paso. Material de autoayuda; no sustituye atención profesional.

## Reglas de entrega

La automatización debe reaccionar solo a un pago confirmado, identificar el `price_id` del producto adquirido y enviar el enlace asociado al correo proporcionado durante el pago. El pack se entrega como un ZIP con las tres guías. Antes de activar la automatización, hay que confirmar que el dominio `matavicios.com` sirve correctamente las cuatro rutas indicadas.
