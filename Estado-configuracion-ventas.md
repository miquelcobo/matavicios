# Estado de configuración de ventas — Matavicios

**Actualizado:** 10 de septiembre de 2026

## Pagos con Stripe

La cuenta activa de Stripe está verificada y los cuatro Payment Links se han creado en modo activo. Los importes configurados incluyen IVA, muestran el precio final al cliente y no usan la opción **Managed Payments** (por lo que no se añade la comisión extra del 3,5 % de ese servicio).

| Producto | Precio final | ID del enlace | URL de compra |
|---|---:|---|---|
| Deja el tabaco | 4,99 € | `plink_1UE7lFDjPyCcLTbcJX8jy3CP` | `https://buy.stripe.com/fZueVd16lbMp53Z0h61Jm00` |
| Cambiar tu relación con el cannabis | 4,99 € | `plink_1UE7nZDjPyCcLTbcT3WYUe1y` | `https://buy.stripe.com/4gMaEX6qF5o10NJ7Jy1Jm01` |
| Uso de pornografía que te preocupa | 4,99 € | `plink_1UE7pdDjPyCcLTbcjp4sPePZ` | `https://buy.stripe.com/bJe9ATg1f9Eh6839RG1Jm02` |
| Pack completo | 9,99 € | `plink_1UE7riDjPyCcLTbcFUc1EP29` | `https://buy.stripe.com/dRm28raGVaIl1RNbZO1Jm03` |

## Web y archivos

La landing está respaldada en el checkpoint `311acab3`, con los cuatro botones de compra, recursos de descarga y textos legales. Los PDFs y el pack ZIP están en las rutas del almacenamiento web preparadas para `https://matavicios.com/manus-storage/`.

## Automatización n8n Cloud

La prueba de n8n Cloud está verificada y activa, sin contratación ni cobro. El selector muestra el disparador nativo **Stripe — Handle Stripe events via webhooks**, que será el primer nodo del flujo. El flujo sigue sin credenciales, sin activación y sin conexiones con clientes.

## Secuencia restante antes del lanzamiento

1. Añadir y revisar los tres nodos del flujo de prueba.
2. Conectar Stripe y Gmail dentro de n8n; probar entregas.
3. Configurar el dominio `matavicios.com` para la landing publicada.
4. Comprobar los cuatro enlaces de descarga bajo el dominio definitivo.
5. Ejecutar una compra real de prueba y decidir después si se contrata n8n Starter.
