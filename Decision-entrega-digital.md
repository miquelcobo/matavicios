# Decisión de entrega digital — Matavicios

**Decisión:** utilizar **Stripe Payment Links + SendOwl** para cobrar y entregar los tres PDF y el pack.

## Por qué esta opción

La configuración es directa: se crean los productos y enlaces de pago en Stripe, se instalan los archivos en SendOwl y se vincula cada archivo con su producto. Tras el pago, SendOwl envía al comprador un enlace de descarga seguro. No requiere desarrollar un servidor ni exponer PDFs públicos.

Para un lanzamiento de bajo volumen con cursos de 4,99 €, la app de SendOwl para Stripe resulta más económica que las alternativas revisadas: SendOwl anuncia un plan gratuito inicial y no aplica una comisión porcentual por venta; Payhip cobra un 5 % por transacción en su plan gratuito, además de la comisión de Stripe; Lemon Squeezy cobra un 5 % + 0,50 USD por transacción. Stripe aplicará sus comisiones propias conforme a tu país y método de pago.[1] [2] [3]

| Opción | Coste de plataforma inicial | Entrega de PDF | Motivo para no elegirla ahora |
|---|---:|---|---|
| **Stripe + SendOwl** | Plan gratuito inicial anunciado; sin comisión porcentual de SendOwl | Automática, con enlaces seguros y tres descargas incluidas por pedido | Requiere crear Stripe y SendOwl, pero es la integración más directa con tu web |
| Payhip + Stripe | 5 % por venta, además de Stripe | Automática | Más sencillo en IVA UE, pero una comisión alta para precios bajos |
| Lemon Squeezy | 5 % + 0,50 USD por venta | Automática | Simplifica impuestos, pero el coste relativo por curso es alto |

## Ajustes iniciales recomendados

Cada PDF individual se asociará a su propio producto Stripe. El pack se entregará como `Matavicios-Pack-Completo.zip`, con los tres PDF dentro. En SendOwl se configurarán tres descargas por pedido. Las guías no se alojarán como archivos públicos en la landing.

**Importante:** esta elección facilita la parte técnica y reduce los costes de plataforma, pero no elimina los datos de identificación que Stripe solicitará para abrir y verificar una cuenta de cobro. Tampoco permite afirmar una pérdida automática del derecho de desistimiento: para contenido digital, el proveedor debe obtener y registrar previamente el consentimiento expreso y el reconocimiento del comprador antes de iniciar la descarga.[4]

## Referencias

[1]: https://www.sendowl.com/stripe-app "SendOwl for Stripe: automatic delivery of digital products"

[2]: https://payhip.com/pricing "Payhip pricing"

[3]: https://www.lemonsqueezy.com/pricing "Lemon Squeezy pricing"

[4]: https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555 "Real Decreto Legislativo 1/2007: artículo 103 sobre contenido digital"
