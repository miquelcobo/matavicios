// COMPLETA ESTA FICHA ANTES DE PUBLICAR.
// No actives el sitio con los campos entre corchetes.
export const legalConfig = {
  isConfigured: false,
  updatedAt: "10 de septiembre de 2026",
  seller: {
    legalName: "[NOMBRE Y APELLIDOS O RAZÓN SOCIAL]",
    tradeName: "Matavicios",
    legalForm: "[AUTÓNOMO/A O FORMA SOCIETARIA]",
    taxId: "[NIF / CIF / VAT ID]",
    registeredAddress: "[DOMICILIO COMPLETO: VÍA, NÚMERO, CP, LOCALIDAD, PROVINCIA, PAÍS]",
    supportEmail: "furrova.help@gmail.com",
    privacyEmail: "furrova.help@gmail.com",
    registry: "[SI APLICA: REGISTRO MERCANTIL, TOMO, FOLIO, HOJA E INSCRIPCIÓN. SI NO APLICA, INDICAR «NO PROCEDE».]",
    businessActivity: "Venta de guías digitales de autoayuda para personas adultas.",
  },
  site: {
    domain: "https://matavicios.com",
  },
  delivery: {
    paymentProvider: "Payhip Ltd. y Stripe Payments Europe, Limited / Stripe, Inc., según la configuración aplicable.",
    fileProvider: "Payhip Ltd., proveedor de checkout y entrega digital. Política de privacidad: https://payhip.com/privacy.",
    hostingProvider: "GitHub Pages.",
    supportResponse: "No se garantiza un plazo concreto; se responderá a la mayor brevedad posible.",
  },
  prices: {
    individual: "4,99 €",
    bundle: "9,99 €",
    taxNotice: "Los precios mostrados incluyen los impuestos indirectos aplicables. El importe final y cualquier impuesto desglosado se confirmarán antes del pago en el checkout de Payhip.",
  },
} as const;

export const isPlaceholder = (value: string) => value.includes("[");
