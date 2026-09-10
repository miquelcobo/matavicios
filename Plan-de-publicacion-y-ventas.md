# Plan para publicar Matavicios y vender las guías digitales

**Fecha:** 10 de septiembre de 2026  
**Producto:** tres guías digitales en PDF y un pack de las tres guías.

## Recomendación principal

Para lanzar Matavicios con la web actual y sin construir una tienda compleja, la ruta más coherente es **Stripe Payment Links + SendOwl**. Stripe se encarga de cobrar mediante una página de pago alojada y segura. SendOwl aloja los PDF, asocia cada archivo a un producto de Stripe y envía al comprador un enlace de descarga seguro cuando el pago se completa. De este modo, la landing sigue siendo la página principal de venta, mientras que el cobro y la entrega quedan resueltos por servicios especializados.[1] [2]

Esta combinación encaja con el diseño actual porque cada botón de la web puede llevar directamente al enlace de pago correspondiente. No se requiere una clave secreta de Stripe en la web ni un servidor propio para empezar. Stripe permite crear enlaces de pago reutilizables desde su panel, con recibos automáticos y más de 40 métodos de pago disponibles según el país y el dispositivo del comprador.[1]

> **Flujo recomendado:** visitante elige una guía en Matavicios → Stripe cobra → SendOwl muestra y envía por correo un enlace de descarga protegido → el comprador descarga el PDF.

## Qué debes vender

Crea cuatro productos independientes. El pack debe existir como producto propio, no como un descuento manual aplicado a tres compras separadas. Así cada compra recibe exactamente la entrega que corresponde.

| Producto en la web | Precio mostrado | Archivo que se entrega | Nombre sugerido en Stripe |
|---|---:|---|---|
| Guía de tabaco | 4,99 € | `Matavicios-Deja-el-Tabaco.pdf` | Matavicios — Deja el tabaco |
| Guía de cannabis | 4,99 € | `Matavicios-Cannabis.pdf` | Matavicios — Cambiar tu relación con el cannabis |
| Guía sobre uso de pornografía | 4,99 € | `Matavicios-Uso-de-Pornografia.pdf` | Matavicios — Uso de pornografía que te preocupa |
| Pack completo | 9,99 € | Un ZIP con los tres PDF o tres entregas asociadas | Matavicios — Pack de 3 guías |

Para el pack, recomiendo entregar un archivo `Matavicios-Pack-Completo.zip` con los tres PDF en su interior. Es más sencillo para el comprador, evita correos múltiples y deja claro qué compra recibe. Mantén también los PDF por separado para las compras individuales.

## Comparación de las tres rutas viables

| Ruta | Cobro | Entrega de PDF | Fiscalidad digital | Trabajo técnico | Cuándo elegirla |
|---|---|---|---|---|---|
| **Stripe + SendOwl** | Stripe directo | SendOwl envía enlaces seguros por correo y permite límites de descarga | Debes configurar y gestionar Stripe Tax, IVA y declaraciones que te correspondan | Bajo | **Recomendada** si quieres conservar la web y tener el control de Stripe y de la entrega |
| **Payhip + Stripe** | Payhip usa Stripe o PayPal para cobrar | Descarga inmediata y página de descarga enviada por correo | Payhip indica que recauda y paga el IVA digital de la UE/Reino Unido en su servicio | Muy bajo | La opción más simple si priorizas velocidad y menos administración técnica |
| **Lemon Squeezy** | Checkout de Lemon Squeezy, no tu Stripe directo | Plataforma de producto digital y checkout | Actúa como *merchant of record*: declara que gestiona impuestos indirectos y cumplimiento de las ventas realizadas en su plataforma | Bajo | Útil si venderás internacionalmente y quieres reducir al máximo la carga de IVA global |
| **Stripe + desarrollo propio** | Stripe directo | Tu propio sistema con webhooks y enlaces temporales | Stripe Tax y tus obligaciones fiscales | Alto | Solo cuando necesites cuentas de usuario, biblioteca de compras, afiliados propios o una experiencia totalmente a medida |

Payhip puede ser especialmente práctico para un primer lanzamiento: permite subir archivos, entrega la descarga inmediatamente tras la compra, envía la página de descarga por correo, limita descargas y ofrece marcado de PDF. También declara que recauda y paga el IVA digital de la UE/Reino Unido en nombre del vendedor.[3] Stripe + SendOwl es más adecuado si quieres que la identidad de pago sea principalmente Stripe y aceptas configurar dos herramientas.[2]

## Ruta recomendada paso a paso: Stripe + SendOwl

### 1. Preparar los archivos finales

Antes de configurar pagos, deja listos los cuatro archivos de entrega. Revisa el nombre de cada PDF, la portada, las referencias y los enlaces. Añade una página final con soporte, versión y fecha de actualización. No alojes estos archivos como enlaces públicos en la web, Google Drive o la carpeta pública del proyecto: un enlace público se puede reenviar sin control.

Prepara también una dirección de soporte que el comprador pueda ver, idealmente `soporte@tudominio.es`, y una dirección desde la que saldrán los correos de entrega. Usa un correo que realmente revises.

### 2. Abrir y verificar Stripe

Crea la cuenta de Stripe con la forma jurídica y el país reales desde los que venderás. Conecta la cuenta bancaria donde recibirás los pagos. Stripe debe verificar información del titular, del negocio y, cuando corresponda, de las personas que controlan el negocio. Puede pedir identificación oficial, comprobante de domicilio, documentos de la entidad y verificación de que controlas la web.[4]

Configura el nombre que aparecerá en el extracto bancario, la dirección de soporte y el correo de atención. La landing debe estar publicada y accesible sin contraseña antes de solicitar verificación de web si Stripe la pide.

### 3. Crear los cuatro productos y enlaces de pago

En el panel de Stripe, abre **Payment Links**, pulsa **New**, crea o selecciona el producto, define el precio único en euros y genera el enlace. Stripe permite hacerlo sin código y proporciona una página de pago alojada.[5]

Crea un enlace distinto para cada producto. Los valores iniciales serían 4,99 €, 4,99 €, 4,99 € y 9,99 €. Activa la recogida de datos necesaria para la venta, los recibos y los métodos de pago que quieras ofrecer. Conserva los cuatro enlaces en un documento privado; no compartas ninguna clave secreta de Stripe.

Define ahora si el precio de la web es **con IVA incluido** o **más IVA**. Para una oferta clara al consumidor, suele ser preferible que el precio final esté bien explicado antes del checkout. Confirma esta decisión con tu gestor antes de activar Stripe Tax.

### 4. Conectar SendOwl y cargar los PDF

Instala SendOwl desde el Marketplace de Stripe o crea una cuenta en SendOwl. Autoriza la conexión con Stripe desde el flujo oficial del servicio. Después, sube los tres PDF y el ZIP del pack, y vincula cada archivo al producto de Stripe correspondiente.

SendOwl indica que puede vincular productos de Stripe a bienes digitales, enviar automáticamente un enlace de descarga seguro tras completar el checkout, limitar el número de descargas y establecer una fecha límite de acceso.[2] Para Matavicios, una configuración razonable de lanzamiento es permitir **tres descargas por archivo** y conservar acceso durante al menos **30 días**. Puedes revisar esa política más adelante; no la presentes como una restricción punitiva, sino como una medida sencilla de protección de los archivos.

### 5. Sustituir los botones de la web

La landing ya tiene cuatro botones de selección: tabaco, cannabis, pornografía y pack. Una vez tengas las cuatro URL de Stripe, sustituye el modal de preparación actual por enlaces directos a esos Payment Links. El visitante seguirá este camino:

| Botón de la landing | Destino esperado |
|---|---|
| Elegir guía: tabaco | Payment Link de “Deja el tabaco” |
| Elegir guía: cannabis | Payment Link de “Cambiar tu relación con el cannabis” |
| Elegir guía: pornografía | Payment Link de “Uso de pornografía que te preocupa” |
| Elegir el pack | Payment Link de “Pack de 3 guías” |

El pago debe abrirse en la misma pestaña. Tras completarlo, Stripe puede redirigir a una página de agradecimiento de Matavicios, pero la entrega debe depender del correo de SendOwl y no de un PDF expuesto en la página de éxito. Así el cliente recibe el archivo incluso si cierra la ventana antes de volver a tu web.

### 6. Probar antes de cobrar de verdad

Prueba en modo de prueba o con el sistema de prueba que ofrezca la herramienta elegida. Comprueba los cuatro recorridos: cada producto individual, el pack, el correo de entrega, la descarga desde móvil y la descarga después de que haya pasado una hora. Comprueba también que el PDF correcto se entrega al producto correcto y que el recibo muestra el nombre de producto, moneda y precio esperados.

No publiques la web ni actives enlaces en modo real hasta que el flujo de prueba funcione de principio a fin. Haz al menos una compra de prueba como lo haría un cliente: desde una ventana privada, con un correo diferente y desde móvil.

## Publicar la web

La landing ya está construida en el proyecto web de Matavicios. Para convertirla en una web pública, utiliza la opción **Publish** del panel del proyecto después de conectar y probar los enlaces de compra. El proyecto debe tener un checkpoint guardado antes de publicar; ya existe una versión estable de la landing.

Puedes empezar con la URL pública que proporcione el proyecto y conectar un dominio propio después, o publicar directamente en un dominio como `matavicios.com` o `matavicios.es`. Para el dominio propio, el panel de publicación te indicará exactamente qué registros DNS debes crear en el proveedor donde compraste el dominio. No inventes registros DNS: copia solo los que muestre el panel y espera la validación del dominio.

Una vez que el dominio responda, actualiza Stripe con esa web pública si pide la verificación de propiedad o de actividad comercial. La página debe mostrar de forma visible qué vendes, cuánto cuesta, cómo contactar contigo y dónde consultar las condiciones de compra.

## IVA, desistimiento y páginas legales

La venta de guías PDF a personas consumidoras puede tener obligaciones de IVA y de información al consumidor. Stripe Tax puede calcular impuestos en los países de la UE una vez que añades tus registros fiscales a Stripe; para servicios digitales B2C transfronterizos, la regla general puede aplicar el IVA del país del cliente. Las empresas de la UE que cumplan los requisitos de pequeño vendedor y estén por debajo de 10.000 € de ventas intracomunitarias pueden tener un tratamiento distinto; al superar ese umbral, el régimen OSS puede simplificar la declaración en la UE.[6]

No actives una configuración fiscal por intuición. Antes de tu primera venta, habla con un gestor o asesor fiscal de tu país y confirma si venderás como autónomo o sociedad, si debes darte de alta, cómo se mostrará el IVA y si te conviene Stripe Tax, Payhip o un *merchant of record*.

En España, el contenido digital sin soporte material puede quedar fuera del derecho de desistimiento cuando la entrega comienza con el consentimiento expreso previo del consumidor y este reconoce que pierde ese derecho.[7] Esto no significa que puedas ocultar la información. Necesitas condiciones de compra claras y revisar con un profesional cómo recoger correctamente ese consentimiento en el checkout elegido.

Antes de publicar, incorpora al menos estas páginas o enlaces visibles en el pie de la web:

| Página | Contenido mínimo |
|---|---|
| Aviso legal | Identidad del vendedor, domicilio o datos de contacto exigibles, NIF/CIF si corresponde, correo de soporte y condiciones de uso |
| Política de privacidad | Qué datos recibes del comprador, para qué los usas, proveedor de pagos/entrega, conservación, derechos y contacto |
| Condiciones de compra | Producto digital, precio e impuestos, forma de pago, entrega, soporte, política de reembolso y contenido del pack |
| Desistimiento y entrega digital | Información clara sobre entrega inmediata, derecho de desistimiento y, si procede, consentimiento expreso conforme a la norma aplicable |

## Plan de lanzamiento de un día

| Momento | Acción | Resultado esperado |
|---|---|---|
| Mañana | Crear o verificar Stripe, configurar cuenta bancaria y datos de negocio | Cuenta lista o requisitos de verificación identificados |
| Mediodía | Crear cuatro productos y cuatro Payment Links | Cuatro enlaces de pago en modo prueba |
| Tarde | Configurar SendOwl, subir PDF/ZIP y vincular productos | Correo de entrega y descarga protegida funcionando |
| Final de tarde | Sustituir los cuatro botones de la landing por los enlaces reales | Página preparada para cobrar |
| Antes de publicar | Probar los cuatro flujos y añadir páginas legales | Entrega, precio y textos verificados |
| Lanzamiento | Publicar web, conectar dominio y anunciar la página | Venta activa y comprobable |

## Qué necesito para conectarlo en la landing

Cuando hayas elegido la ruta y creado los productos, necesitaré únicamente los cuatro enlaces públicos de checkout, no claves secretas ni contraseñas. Para la ruta Stripe + SendOwl, comparte las URL de Payment Link de tabaco, cannabis, pornografía y pack. Con ellas puedo reemplazar los modales actuales por enlaces de compra directos y crear una página de agradecimiento de Matavicios.

Si prefieres **Payhip**, necesitaré las cuatro URL de checkout o productos de Payhip. Si eliges **Lemon Squeezy**, necesitaré los cuatro enlaces de checkout. En todos los casos, el flujo de pago se puede integrar sin exponer credenciales en la web.

## Decisión recomendada

Si quieres mantener tu web actual y que el cliente perciba un proceso profesional, elige **Stripe + SendOwl**. Si lo más importante es empezar rápido y reducir trabajo administrativo con IVA digital, elige **Payhip conectado a Stripe**. No recomiendo construir un sistema propio de descargas en esta primera fase: añade coste, riesgos de seguridad y mantenimiento sin mejorar de forma relevante la experiencia de una tienda con solo cuatro productos.

## Referencias

[1]: https://docs.stripe.com/payment-links "Stripe Payment Links"

[2]: https://marketplace.stripe.com/apps/sendowl "SendOwl: Automatically and securely deliver digital goods you sell with Stripe"

[3]: https://payhip.com/features/sell-digital-downloads "Payhip: Sell digital downloads"

[4]: https://support.stripe.com/questions/what-do-i-need-to-do-to-verify-my-stripe-account "Stripe account verification requirements"

[5]: https://docs.stripe.com/payment-links/create "Stripe: Create a payment link"

[6]: https://docs.stripe.com/tax/supported-countries/european-union "Stripe Tax in the European Union"

[7]: https://www.boe.es/buscar/act.php?id=BOE-A-2014-3329 "Ley 3/2014: artículo 103 y excepciones al derecho de desistimiento"

[8]: https://docs.lemonsqueezy.com/help/payments/sales-tax-vat "Lemon Squeezy sales tax and VAT"
