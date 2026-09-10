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

Los cuatro botones de compra de la landing enlazan a los Payment Links. Los PDFs y el pack ZIP están disponibles en las rutas del almacenamiento web preparadas para `https://matavicios.com/manus-storage/`.

## Pipedream: entrega automática

Proyecto: **MATAVICIOS — ENTREGAS**  
Flujo en borrador: **Entrega automática — Tabaco**  
Endpoint: `https://eoaghepl89fyl7c.m.pipedream.net`

La cuenta **furrova.help@gmail.com** continúa conectada. String sigue mostrando una corrección en curso; la versión generada inicialmente es incorrecta y no será desplegada. Se abrirá directamente el editor del flujo para comprobar cuál es el código persistido y reemplazarlo por una versión mínima, sin secretos ni llamadas externas.

## Secuencia restante antes del lanzamiento

1. Confirmar y guardar el código correcto.
2. Revisar y probar el envío de Gmail.
3. Conectar Stripe al endpoint con `checkout.session.completed`.
4. Publicar la web y conectar `matavicios.com`.
5. Probar una compra y desplegar solo si la entrega funciona.
