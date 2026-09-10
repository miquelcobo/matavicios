# Estado de configuración de ventas — Matavicios

**Actualizado:** 10 de septiembre de 2026

## Web publicada

La landing está publicada y disponible en **[https://matavicios.com](https://matavicios.com)** mediante GitHub Pages. El dominio raíz cuenta con los cuatro registros A oficiales de GitHub Pages y GitHub confirma que el DNS es correcto. El certificado HTTPS está emitido y el ajuste **Enforce HTTPS** está activado.

| Comprobación | Estado |
| --- | --- |
| Dominio raíz `matavicios.com` | Publicado |
| DNS de GitHub Pages | Correcto |
| Certificado HTTPS | Activo |
| Redirección forzada HTTPS | Activada |
| PDF de tabaco | Disponible por HTTPS |
| PDF de cannabis | Disponible por HTTPS |
| PDF de pornografía | Disponible por HTTPS |
| ZIP del pack | Disponible por HTTPS |

**URL a comunicar:** `https://matavicios.com` (usar sin `www`).

## Pagos con Stripe

La cuenta activa de Stripe está verificada y los cuatro Payment Links se han creado en modo activo. Los importes configurados incluyen IVA, muestran el precio final al cliente y no usan la opción **Managed Payments**.

| Producto | Precio final | ID del enlace | URL de compra |
|---|---:|---|---|
| Deja el tabaco | 4,99 € | `plink_1UE7lFDjPyCcLTbcJX8jy3CP` | `https://buy.stripe.com/fZueVd16lbMp53Z0h61Jm00` |
| Cambiar tu relación con el cannabis | 4,99 € | `plink_1UE7nZDjPyCcLTbcT3WYUe1y` | `https://buy.stripe.com/4gMaEX6qF5o10NJ7Jy1Jm01` |
| Uso de pornografía que te preocupa | 4,99 € | `plink_1UE7pdDjPyCcLTbcjp4sPePZ` | `https://buy.stripe.com/bJe9ATg1f9Eh6839RG1Jm02` |
| Pack completo | 9,99 € | `plink_1UE7riDjPyCcLTbcFUc1EP29` | `https://buy.stripe.com/dRm28raGVaIl1RNbZO1Jm03` |

Los botones de compra de la landing ya apuntan a estos cuatro enlaces.

## Entrega automática con n8n Cloud

El flujo n8n **Entregas Matavicios — ACTIVO** está publicado. Escucha el evento de Stripe `checkout.session.completed`, identifica el Payment Link comprado y Gmail entrega automáticamente al email pagador el enlace correspondiente.

| Compra | Entrega automática |
| --- | --- |
| Deja el tabaco | `Matavicios-Deja-el-Tabaco.pdf` |
| Cannabis | `Matavicios-Cannabis.pdf` |
| Pornografía | `Matavicios-Uso-de-Pornografia.pdf` |
| Pack | `Matavicios-Pack-Completo.zip` |

Las credenciales de Stripe y Gmail están conectadas en n8n. El flujo se publicó con la versión **Lanzamiento inicial**.

## Único paso pendiente antes de comunicarlo ampliamente

Realiza una **compra real de prueba** con uno de los enlaces de Stripe, usando una dirección de email que controles, y verifica que llega el email desde Gmail y que descarga el archivo correcto. Se recomienda hacerlo antes de difundir la web: se trata de la única comprobación que valida de extremo a extremo el pago, Stripe, n8n, Gmail y la descarga. No se ha realizado desde esta configuración para evitar cargar una compra real en tu tarjeta sin que la hagas tú mismo.

## Nota de seguridad y mantenimiento

Los archivos están alojados públicamente bajo `/downloads/`. El correo automatizado facilita la entrega inmediata, pero quien conozca la URL de un PDF podría compartirlo. Es una solución sencilla y apropiada para el lanzamiento actual; enlaces personales y caducables requerirían un sistema de entrega especializado o backend.

Mantén activa la suscripción de n8n Cloud antes de que finalice la prueba gratuita para que el flujo siga escuchando pagos. Si n8n se desactiva, Stripe seguirá cobrando, pero los correos no se enviarán automáticamente.
