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
    supportEmail: "[CORREO DE SOPORTE]",
    privacyEmail: "[CORREO PARA PRIVACIDAD; PUEDE SER EL MISMO DE SOPORTE]",
    registry: "[SI APLICA: REGISTRO MERCANTIL, TOMO, FOLIO, HOJA E INSCRIPCIÓN. SI NO APLICA, INDICAR «NO PROCEDE».]",
    businessActivity: "Venta de guías digitales de autoayuda para personas adultas.",
  },
  site: {
    domain: "[https://www.tudominio.es]",
  },
  delivery: {
    paymentProvider: "Stripe Payments Europe, Limited / Stripe, Inc., según la configuración aplicable.",
    fileProvider: "SendOwl [CONFIRMAR RAZÓN SOCIAL, DOMICILIO Y URL DE PRIVACIDAD VIGENTES ANTES DE ACTIVAR].",
    hostingProvider: "[PROVEEDOR DE ALOJAMIENTO WEB]",
    supportResponse: "[PLAZO REALISTA DE RESPUESTA, POR EJEMPLO: 2 DÍAS LABORABLES]",
  },
  prices: {
    individual: "4,99 €",
    bundle: "9,99 €",
    taxNotice: "Los precios mostrados incluyen los impuestos indirectos aplicables. El importe final y cualquier impuesto desglosado se confirmarán antes del pago en Stripe Checkout.",
  },
} as const;

export const isPlaceholder = (value: string) => value.includes("[");
