# Guía de lanzamiento de Matavicios con Stripe y entrega de PDF

**Objetivo:** vender tres guías PDF y un pack desde la web de Matavicios, cobrar con Stripe y entregar el archivo de forma segura mediante SendOwl. **Proveedor elegido:** Stripe Payment Links + SendOwl.

Esta guía parte de una condición esencial: las páginas legales ya están diseñadas e integradas. El dominio `https://matavicios.com`, el correo `furrova.help@gmail.com`, el proveedor de entrega SendOwl y el hosting Manus WebDev ya están anotados. Aún faltan los datos de identidad del vendedor, necesarios para activar una cuenta de cobro y para retirar el aviso “Versión preparada, no publicable todavía”.

## 1. Cerrar los datos legales antes de abrir ventas

Abre `client/src/lib/legalConfig.ts` y sustituye cada valor entre corchetes. No modifiques el texto jurídico sin una razón concreta; completa únicamente los datos de tu actividad. La siguiente tabla resume qué debes tener confirmado.

| Dato | Ejemplo de formato | Dónde se utiliza |
|---|---|---|
| Titular | Nombre completo o razón social | Aviso legal, privacidad y compra |
| Forma jurídica | Autónomo/a, S.L., etc. | Aviso legal |
| NIF/CIF | Identificador fiscal real | Aviso legal y compra |
| Domicilio profesional | Dirección completa | Aviso legal y compra |
| Correos | `soporte@tudominio.es` y `privacidad@tudominio.es` | Todas las páginas legales |
| Registro público | Datos registrales reales o “No procede”, si el asesor confirma que no aplica | Aviso legal |
| Dominio | `https://tudominio.es` | Enlaces legales de Stripe |
| Hosting y entrega | Proveedor web y SendOwl u otro proveedor final | Política de privacidad |

Después de completar esos datos, cambia `isConfigured: false` por `isConfigured: true` y elimina o desactiva el aviso de borrador de `Legal.tsx`. El aviso evita publicar por error textos con información incompleta.

La ley española exige que el prestador permita acceder de forma permanente, fácil, directa y gratuita a su nombre o denominación, domicilio, correo, NIF y una indicación clara de precios e impuestos. La normativa de consumo exige, además, información clara y comprensible sobre el producto, precio final, condiciones y derechos antes de contratar.[1] [2]

## 2. Confirmar tu encaje fiscal

Antes de fijar definitivamente el checkout, habla con un gestor español sobre tu alta como autónomo o sociedad, tus obligaciones de facturación y el IVA. Para contenido digital B2C vendido a otros países de la UE, la regla general puede llevar el IVA al país del cliente. Si eres un pequeño vendedor establecido en la UE y cumples todos los requisitos, existe un umbral anual de 10.000 € para determinadas ventas transfronterizas; al superarlo, la Ventanilla Única (OSS) es una vía habitual de declaración. Stripe Tax puede calcular el impuesto una vez que añades los registros adecuados, pero no sustituye el análisis ni la presentación de tus declaraciones.[3]

Pide a tu gestor una respuesta escrita a estas tres preguntas: “¿Debo repercutir IVA desde la primera venta?”, “¿Puedo aplicar el régimen de pequeño vendedor?” y “¿Debo registrarme en OSS si vendo a particulares de otros países de la UE?”. Con esa respuesta podrás configurar los precios de forma correcta.

Si el asesor confirma que quieres que los precios de la web sean finales, configura los precios de Stripe como **IVA incluido** y conserva el texto ya incluido en la web: “Los precios mostrados incluyen los impuestos indirectos aplicables. El importe final y cualquier impuesto desglosado se confirmarán antes del pago en Stripe Checkout.” Si te indica que el IVA debe añadirse al precio mostrado, cambia tanto la landing como las condiciones antes de vender: no deben aparecer 4,99 € en la web y un importe distinto sin explicarlo.

Conserva facturas y justificantes de las operaciones. La Agencia Tributaria señala, con carácter general, un plazo de conservación de cuatro años para facturas y justificantes relacionados con obligaciones tributarias.[4]

## 3. Preparar los cuatro archivos de venta

Los cursos ya existen en HTML. Antes de convertirlos, realiza una lectura final en ordenador y móvil y revisa enlaces, ejercicios, referencias, nombres de módulos y el aviso de que son materiales de autoayuda. Añade en la última página de cada curso el correo de soporte real, el año, una versión —por ejemplo, “Versión 1.0 · septiembre de 2026”— y el aviso de uso personal.

Para convertir cada curso en PDF, abre su archivo HTML en Chrome o Edge, selecciona **Imprimir**, elige **Guardar como PDF** y usa estos ajustes: papel A4, escala 100 %, márgenes predeterminados o mínimos según la maquetación, gráficos de fondo activados y cabeceras y pies del navegador desactivados. Revisa el PDF página a página después de exportarlo. No subas un PDF sin comprobar que las páginas, saltos de sección, enlaces y textos largos se ven correctamente.

| Archivo de origen | Archivo de entrega recomendado |
|---|---|
| `Curso-Tabaco-Matavicios.html` | `Matavicios-Deja-el-Tabaco.pdf` |
| `Curso-Cannabis-Matavicios.html` | `Matavicios-Cannabis.pdf` |
| `Curso-Pornografia-Matavicios.html` | `Matavicios-Uso-de-Pornografia.pdf` |

Crea luego una carpeta llamada `Matavicios-Pack-Completo` con los tres PDF en su interior y comprímela como `Matavicios-Pack-Completo.zip`. Abre el ZIP una vez para comprobar que incluye los tres archivos correctos. El ZIP es la entrega recomendada para el pack porque deja claro al cliente que recibirá los tres cursos en una sola descarga.

## 4. Abrir y verificar tu cuenta de Stripe

Crea la cuenta desde Stripe con los datos reales de tu actividad. Añade el país, la forma jurídica, la cuenta bancaria de cobro y el titular que corresponda. Stripe puede solicitar datos de la persona que crea la cuenta, del negocio y de quienes lo controlan; si no puede verificarlos automáticamente, puede pedir identificación oficial, comprobante de domicilio, documentación de la entidad o una verificación de la web.[5]

Dentro de **Settings → Public details**, introduce el nombre comercial que verán los compradores, correo de soporte, teléfono si lo ofreces, URL de la política de privacidad y URL de las condiciones de compra. Las URL deberán ser las públicas de tu dominio una vez publicada la web, por ejemplo:

| Campo de Stripe | Valor esperado |
|---|---|
| Terms of service URL | `https://tudominio.es/condiciones-compra` |
| Privacy policy URL | `https://tudominio.es/privacidad` |
| Support email | Tu correo de soporte real |
| Support website | `https://tudominio.es` |
| Refund policy | Enlace a la sección 6 de las condiciones de compra o a una política específica si decides crearla |

No compartas con nadie la clave secreta de Stripe, contraseñas, códigos de autenticación ni capturas completas del panel con datos sensibles. Para conectar la landing después solo harán falta las cuatro URLs públicas de Payment Links.

## 5. Crear los cuatro productos y Payment Links

En Stripe, abre **Payment Links → New**. Crea un producto de pago único para cada fila de la siguiente tabla. Stripe permite crear estos enlaces sin código; cada enlace dirige al cliente a una página de pago alojada por Stripe.[6]

| Producto | Precio de la landing | Entrega asociada |
|---|---:|---|
| Matavicios — Deja el tabaco | 4,99 € | `Matavicios-Deja-el-Tabaco.pdf` |
| Matavicios — Cambiar tu relación con el cannabis | 4,99 € | `Matavicios-Cannabis.pdf` |
| Matavicios — Uso de pornografía que te preocupa | 4,99 € | `Matavicios-Uso-de-Pornografia.pdf` |
| Matavicios — Pack de 3 guías | 9,99 € | `Matavicios-Pack-Completo.zip` |

Para cada enlace, configura moneda **EUR**, pago único, cantidad fija de una unidad y el comportamiento fiscal que tu gestor haya confirmado. Si usas Stripe Tax, activa **Collect tax automatically** en cada enlace y añade antes en Stripe las ubicaciones o registros fiscales que realmente tengas. Stripe Tax recoge el mínimo de dirección de facturación necesario para calcular el impuesto.[7]

En **Settings → Checkout**, activa la información de contacto y las políticas legales. Activa también el acuerdo obligatorio con las condiciones. Stripe Checkout permite mostrar la URL de términos y privacidad y exigir una casilla de aceptación; la sesión conserva si se aceptaron las condiciones.[8]

Junto al acuerdo de condiciones, configura —previa revisión de tu asesor— este texto de consentimiento para entrega digital:

> He leído y acepto las Condiciones de compra. Solicito expresamente que se inicie de inmediato el suministro del contenido digital y reconozco que, una vez iniciado, pierdo mi derecho de desistimiento.

La ley española contempla la excepción de desistimiento para contenido digital no suministrado en soporte material cuando el suministro empieza con consentimiento expreso previo y reconocimiento de la pérdida de ese derecho.[9] El texto debe estar antes del pago o del inicio de entrega y el sistema debe conservar prueba de la aceptación. No afirmes que no hay derecho de desistimiento si no has configurado y comprobado ese consentimiento.

## 6. Conectar SendOwl y entregar los archivos

Instala SendOwl desde el Marketplace de Stripe o abre una cuenta de SendOwl y conecta tu cuenta Stripe desde su proceso oficial. Sube los tres PDF y el ZIP del pack. Vincula cada archivo a su producto exacto de Stripe.

SendOwl afirma que puede asociar productos de Stripe a bienes digitales y enviar automáticamente al comprador un enlace de descarga seguro tras finalizar el checkout. También permite restringir intentos de descarga y acceso.[10] Para este lanzamiento, una configuración sencilla es permitir **tres descargas** por archivo y un periodo de acceso de al menos **30 días**. No anuncies estos números en la web si después eliges otros distintos; actualiza las condiciones de compra para que coincidan con la configuración real.

Usa el correo real de soporte como remitente o respuesta de las entregas. Revisa el texto del email automático para que diga de forma sencilla: “Gracias por tu compra. Aquí tienes tu enlace de descarga. Si tienes un problema de acceso, escribe a [correo real].”

## 7. Sustituir los botones de la landing

Cuando hayas creado los Payment Links, conserva las cuatro URL públicas y entrégamelas así, sin compartir claves:

| Producto | URL que se necesita |
|---|---|
| Tabaco | `https://buy.stripe.com/...` |
| Cannabis | `https://buy.stripe.com/...` |
| Uso de pornografía | `https://buy.stripe.com/...` |
| Pack de 3 guías | `https://buy.stripe.com/...` |

Con esas cuatro direcciones se sustituye el modal informativo actual por enlaces directos de compra. La web no necesita conocer ninguna clave secreta ni guardar datos de tarjeta. El cliente irá desde la tarjeta de curso al checkout de Stripe y recibirá la descarga por SendOwl.

Puedes configurar la página de éxito de Stripe para que vuelva a una página de agradecimiento de Matavicios, pero esa página no debe contener enlaces públicos a los PDF. La entrega debe depender del correo y enlace seguro de SendOwl, de modo que siga funcionando aunque el cliente cierre la pestaña de Stripe.

## 8. Probar todo antes de vender

Realiza una prueba completa de cada uno de los cuatro productos antes de activar la venta. Revisa especialmente que el producto, precio, impuestos, consentimiento de condiciones, email de entrega y archivo descargado coincidan. SendOwl indica en su ficha de Stripe que no ofrece compatibilidad con sandbox, así que consulta su documentación actual para su método de prueba y, si fuera necesario, realiza una compra real de importe mínimo que puedas reembolsar después de comprobar el flujo.[10]

| Prueba | Resultado correcto |
|---|---|
| Compra de guía de tabaco | Pago correcto, recibo y PDF de tabaco |
| Compra de guía de cannabis | Pago correcto, recibo y PDF de cannabis |
| Compra de guía sobre uso de pornografía | Pago correcto, recibo y PDF correcto |
| Compra del pack | Pago correcto, recibo y ZIP con tres PDF |
| Email de entrega | Remitente reconocible, soporte real y enlace funcional |
| Móvil | Checkout, correo y descarga funcionan en móvil |
| Consentimiento | Stripe registra aceptación de condiciones antes del pago |
| Impuestos | Precio final y desglose responden a la configuración confirmada por el gestor |

## 9. Publicar la web y conectar tu dominio

Cuando hayas completado datos legales, conectado enlaces y realizado las pruebas, guarda un checkpoint de la versión final y utiliza **Publish** en el panel del proyecto Matavicios. Publica primero en la URL proporcionada por el proyecto y comprueba que las rutas `/aviso-legal`, `/privacidad`, `/condiciones-compra` y `/cookies` están accesibles sin contraseña.

Para usar un dominio propio, añade el dominio en el panel de publicación. El proveedor indicará los registros DNS exactos que debes crear en el registrador de tu dominio. Copia únicamente esos registros; no sustituyas registros existentes ni inventes valores. Cuando el dominio esté verificado, actualiza las URL públicas de Stripe con las de tu dominio y repite una compra de prueba.

La política de cookies está configurada para una landing sin analítica, publicidad o píxeles de terceros. Si más adelante añades Google Analytics, Meta Pixel, campañas de retargeting o herramientas similares, instala antes un gestor de consentimiento y actualiza la política. Las cookies técnicas estrictamente necesarias pueden no requerir consentimiento, pero las de medición y publicidad normalmente exigen una configuración previa adecuada.[11]

## 10. Checklist de lanzamiento

| Estado | Acción |
|---|---|
| ☐ | He completado todos los campos entre corchetes de `legalConfig.ts`. |
| ☐ | Mi gestor ha confirmado alta, IVA, precios finales y, si procede, OSS. |
| ☐ | He revisado aviso legal, privacidad, compra y cookies con mis datos reales. |
| ☐ | Los cuatro PDF/ZIP se han revisado página a página y se abren correctamente. |
| ☐ | Stripe está verificado y tiene cuenta bancaria de cobro configurada. |
| ☐ | Existen cuatro productos y cuatro Payment Links en modo real. |
| ☐ | Stripe muestra privacidad, condiciones, soporte y consentimiento de entrega digital. |
| ☐ | SendOwl entrega el archivo correcto a cada producto. |
| ☐ | He probado las cuatro compras, email y descarga en móvil. |
| ☐ | La web está publicada, su dominio es accesible y los enlaces legales funcionan. |
| ☐ | He guardado facturas, pedidos y pruebas de consentimiento de forma ordenada. |

## Referencias

[1]: https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758 "Ley 34/2002: artículo 10 sobre información general"

[2]: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 "Real Decreto Legislativo 1/2007: información precontractual"

[3]: https://docs.stripe.com/tax/supported-countries/european-union "Stripe Tax in the European Union"

[4]: https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html "Agencia Tributaria: obligación de conservar las facturas"

[5]: https://support.stripe.com/questions/what-do-i-need-to-do-to-verify-my-stripe-account "Stripe account verification requirements"

[6]: https://docs.stripe.com/payment-links/create "Stripe: Create a payment link"

[7]: https://docs.stripe.com/payment-links/customize "Stripe Payment Links: customize checkout and collect tax"

[8]: https://docs.stripe.com/payments/checkout/custom-components.md?platform=web&payment-ui=stripe-hosted "Stripe Checkout: legal policies and terms of service agreement"

[9]: https://www.boe.es/buscar/act.php?id=BOE-A-2014-3329 "Ley 3/2014: artículo 103 y contenido digital"

[10]: https://marketplace.stripe.com/apps/sendowl "SendOwl: Automatically and securely deliver digital goods with Stripe"

[11]: https://www.aepd.es/guias/guia-cookies.pdf "AEPD: Guía sobre el uso de las cookies"
