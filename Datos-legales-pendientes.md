# Datos que debes completar antes de publicar Matavicios

Este documento no sustituye una revisión de un gestor, asesor fiscal o abogado. Sirve para reunir los datos que no se pueden inventar y que son indispensables para convertir los borradores legales de Matavicios en textos publicables.

| Dato | Qué debes indicar exactamente | Dónde aparecerá |
|---|---|---|
| Titular vendedor | Nombre y apellidos completos si vendes como autónomo, o razón social completa si vendes mediante sociedad | Aviso legal, privacidad y condiciones de compra |
| Forma jurídica | “Autónomo/a” o tipo de sociedad real | Aviso legal |
| NIF/CIF | NIF, CIF o identificador fiscal aplicable | Aviso legal y condiciones de compra |
| Domicilio | Dirección profesional completa; consulta con un asesor si necesitas alternativas de publicidad de domicilio por motivos de privacidad | Aviso legal y condiciones de compra |
| Correo de soporte | Un correo que revises y desde el que puedas responder incidencias | Aviso legal, condiciones y footer |
| Correo de privacidad | Correo para solicitudes RGPD; puede ser el mismo de soporte si lo gestionas correctamente | Política de privacidad y cookies |
| Registro público | Datos de Registro Mercantil si aplican; si no existen, usa “No procede” solo después de confirmarlo | Aviso legal y privacidad |
| Dominio definitivo | Por ejemplo, `https://matavicios.es` | Enlaces que Stripe mostrará en checkout |
| Proveedor de entrega | Confirmar si será SendOwl y su razón social/URL de privacidad actual, o el servicio alternativo que se use | Privacidad y condiciones |
| Hosting | Nombre del proveedor de alojamiento final | Política de privacidad |
| Plazo de soporte | Un compromiso realista, por ejemplo “2 días laborables” | Condiciones de compra |
| Política comercial de reembolsos | Si ofrecerás algo más favorable que el mínimo legal, define plazo y condiciones exactas | Condiciones de compra y Stripe Checkout |
| Situación fiscal | Alta como autónomo o sociedad, régimen de IVA, territorio de ventas y estrategia para ventas B2C UE | Configuración de Stripe Tax y precios |

## Decisiones que debes confirmar con tu gestor antes de activar pagos

La web está redactada para un precio final con impuestos indirectos incluidos, pero solo debes activarlo así cuando tu asesor confirme cómo te corresponde facturar. Las guías PDF vendidas a consumidores de otros países de la Unión Europea se tratan generalmente como contenido digital o servicio electrónico y pueden tributar según el país del cliente. Si eres una empresa establecida en la UE y cumples la excepción de pequeño vendedor, las ventas transfronterizas B2C de productos digitales pueden aplicar el IVA de tu país mientras el total anual intracomunitario se mantenga por debajo de 10.000 €. Al superar el umbral, una vía habitual es la Ventanilla Única (OSS). Stripe Tax puede calcular el impuesto, pero no determina por sí mismo qué registro fiscal debes tener ni presenta todas las declaraciones por ti.[1]

Debes confirmar asimismo si tus precios de 4,99 € y 9,99 € serán precios finales con IVA incluido, y revisar el margen resultante. Conserva las facturas y justificantes durante los plazos aplicables; la Agencia Tributaria señala, con carácter general, un plazo de prescripción de cuatro años para facturas y justificantes relacionados con obligaciones tributarias.[2]

## Consentimiento de contenido digital

Activa en Stripe Checkout la aceptación obligatoria de condiciones y utiliza este texto, previa revisión profesional: “He leído y acepto las Condiciones de compra. Solicito expresamente que se inicie de inmediato el suministro del contenido digital y reconozco que, una vez iniciado, pierdo mi derecho de desistimiento.” La ley española recoge una excepción para contenido digital sin soporte material cuando el suministro comienza con consentimiento expreso previo y reconocimiento de la pérdida del derecho de desistimiento.[3]

No des por hecho que el consentimiento queda correctamente configurado solo porque el texto aparece en la web. Debe solicitarse antes del pago o del inicio de la entrega, guardarse en el sistema de checkout y poder demostrarse. Stripe Checkout permite exigir la aceptación de condiciones y conservar el resultado de esa aceptación en la sesión de compra.[4]

## Referencias

[1]: https://docs.stripe.com/tax/supported-countries/european-union "Stripe Tax in the European Union"

[2]: https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva/obligacion-conservar-facturas.html "Agencia Tributaria: obligación de conservar las facturas"

[3]: https://www.boe.es/buscar/act.php?id=BOE-A-2014-3329 "Ley 3/2014: artículo 103 y contenido digital"

[4]: https://docs.stripe.com/payments/checkout/custom-components.md?platform=web&payment-ui=stripe-hosted "Stripe Checkout: customize policies and collect a terms of service agreement"
