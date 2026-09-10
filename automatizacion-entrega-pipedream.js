export default defineComponent({
  async run({ steps }) {
    const event = steps.trigger?.event?.body ?? {};
    const session = event.data?.object ?? null;

    // Permite verificar Gmail sin generar una compra real.
    if (!session) {
      return {
        to: "furrova.help@gmail.com",
        subject: "Prueba interna — entrega Matavicios",
        html: "<p>Gmail y Pipedream están conectados. El siguiente paso es enviar un evento de prueba de Stripe.</p>",
      };
    }

    if (event.type !== "checkout.session.completed" || session.payment_status !== "paid") {
      throw new Error("Evento ignorado: no es un pago completado en Stripe Checkout.");
    }

    const products = {
      plink_1UE7lFDjPyCcLTbcJX8jy3CP: ["Tu guía Matavicios — Deja el tabaco", "Deja el tabaco", "https://matavicios.com/downloads/Matavicios-Deja-el-Tabaco.pdf"],
      plink_1UE7nZDjPyCcLTbcT3WYUe1y: ["Tu guía Matavicios — Cambiar tu relación con el cannabis", "Cambiar tu relación con el cannabis", "https://matavicios.com/downloads/Matavicios-Cannabis.pdf"],
      plink_1UE7pdDjPyCcLTbcjp4sPePZ: ["Tu guía Matavicios — Uso de pornografía que te preocupa", "Uso de pornografía que te preocupa", "https://matavicios.com/downloads/Matavicios-Uso-de-Pornografia.pdf"],
      plink_1UE7riDjPyCcLTbcFUc1EP29: ["Tu pack completo Matavicios", "Pack completo", "https://matavicios.com/downloads/Matavicios-Pack-Completo.zip"],
    };

    const product = products[session.payment_link];
    if (!product) throw new Error(`Enlace sin entrega configurada: ${session.payment_link ?? "sin identificador"}`);

    const [subject, title, downloadUrl] = product;
    const to = session.customer_details?.email ?? session.customer_email;
    if (!to) throw new Error("El pago no incluye un correo de entrega.");

    const html = `<p>Gracias por tu compra.</p><p>Aquí tienes tu guía Matavicios: <strong>${title}</strong>.</p><p><a href="${downloadUrl}">Descargar mi guía</a></p><p>El archivo es para tu uso personal. Si tienes cualquier problema de acceso, responde a este correo.</p><p>— Matavicios</p>`;
    return { to, subject, html, downloadUrl };
  },
});
