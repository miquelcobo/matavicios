import type { ReactNode } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { isPlaceholder, legalConfig } from "@/lib/legalConfig";

type LegalKind = "aviso-legal" | "privacidad" | "condiciones-compra" | "cookies";

type LegalPageProps = { kind: LegalKind };

const seller = legalConfig.seller;
const requiresCompletion = !legalConfig.isConfigured || Object.values(seller).some((value) => isPlaceholder(value)) || isPlaceholder(legalConfig.site.domain);

const DigitalConsent = () => (
  <blockquote className="legal-consent">
    <strong>Texto que debe aparecer junto a la aceptación de condiciones en Stripe Checkout:</strong>
    <br />
    “He leído y acepto las Condiciones de compra. Solicito expresamente que se inicie de inmediato el suministro del contenido digital y reconozco que, una vez iniciado, pierdo mi derecho de desistimiento.”
  </blockquote>
);

const LegalShell = ({ title, intro, children }: { title: string; intro: string; children: ReactNode }) => (
  <div className="legal-site">
    <header className="legal-nav">
      <Link className="simple-brand" href="/" aria-label="Matavicios, inicio">
        <span className="brand-mark" aria-hidden="true">×</span>
        Mata<span>vicios</span>
      </Link>
      <Link href="/">Volver a los cursos</Link>
    </header>
    <main className="legal-main">
      {requiresCompletion && (
        <aside className="legal-draft-notice" aria-label="Datos pendientes de completar">
          <ShieldCheck size={19} aria-hidden="true" />
          <div><strong>Versión preparada, no publicable todavía.</strong><br />Completa la ficha de identidad fiscal, domicilio, correos y dominio antes de activar pagos o publicar el sitio.</div>
        </aside>
      )}
      <p className="micro-label">MATAVICIOS · INFORMACIÓN LEGAL</p>
      <h1>{title}</h1>
      <p className="legal-lead">{intro}</p>
      <p className="legal-date">Última actualización: {legalConfig.updatedAt}</p>
      <div className="legal-content">{children}</div>
    </main>
    <footer className="legal-footer">
      <div><span className="brand-mark" aria-hidden="true">×</span><strong> Matavicios</strong> · Guías digitales de autoayuda.</div>
      <nav aria-label="Información legal"><Link href="/aviso-legal">Aviso legal</Link><Link href="/privacidad">Privacidad</Link><Link href="/condiciones-compra">Condiciones de compra</Link><Link href="/cookies">Cookies</Link></nav>
    </footer>
  </div>
);

const SellerDetails = () => (
  <dl className="legal-details">
    <div><dt>Titular</dt><dd>{seller.legalName} · nombre comercial: {seller.tradeName}</dd></div>
    <div><dt>Forma jurídica</dt><dd>{seller.legalForm}</dd></div>
    <div><dt>NIF/CIF</dt><dd>{seller.taxId}</dd></div>
    <div><dt>Domicilio</dt><dd>{seller.registeredAddress}</dd></div>
    <div><dt>Correo de contacto</dt><dd><a href={`mailto:${seller.supportEmail}`}>{seller.supportEmail}</a></dd></div>
    <div><dt>Registro público</dt><dd>{seller.registry}</dd></div>
  </dl>
);

function AvisoLegal() {
  return (
    <LegalShell title="Aviso legal" intro="Aquí se identifica quién vende las guías y bajo qué condiciones se puede utilizar esta web.">
      <section><h2>1. Identificación del titular</h2><p>En cumplimiento de la normativa aplicable a los servicios de la sociedad de la información, el titular de este sitio es:</p><SellerDetails /><p>La actividad consiste en la {seller.businessActivity.toLowerCase()}.</p></section>
      <section><h2>2. Finalidad del sitio</h2><p>Matavicios presenta y comercializa guías digitales de autoayuda dirigidas a personas adultas. Las guías ofrecen información, ejercicios y herramientas de reflexión. No constituyen atención sanitaria, psicológica, psiquiátrica o de urgencias, ni sustituyen una evaluación profesional.</p><p>Si existe una crisis, riesgo inmediato, ideas de autolesión, intoxicación, síntomas de abstinencia preocupantes o cualquier urgencia, la persona usuaria debe contactar con los servicios de emergencia locales o con un profesional sanitario.</p></section>
      <section><h2>3. Condiciones de uso</h2><p>La navegación por este sitio implica el uso diligente y lícito de sus contenidos. Queda prohibido utilizar la web para fines ilegales, interferir en su funcionamiento, intentar acceder a sistemas ajenos o reproducir contenidos fuera de los límites establecidos en estas condiciones y en la legislación aplicable.</p></section>
      <section><h2>4. Propiedad intelectual</h2><p>Los textos, diseños, marcas, materiales y guías de Matavicios están protegidos por la normativa de propiedad intelectual e industrial. La compra de una guía concede una licencia personal, limitada y no transferible para leerla y utilizarla de forma privada. No autoriza su reproducción, distribución, reventa, comunicación pública, cesión, subida a plataformas de terceros ni puesta a disposición de otras personas sin autorización escrita del titular.</p></section>
      <section><h2>5. Precios y enlaces de terceros</h2><p>Los precios de las guías se muestran de forma clara antes de iniciar la compra. {legalConfig.prices.taxNotice}</p><p>La web puede enlazar con páginas de pago o de entrega de terceros. Cada proveedor externo aplica sus propias condiciones y políticas. El titular no controla sus contenidos o disponibilidad, aunque selecciona proveedores razonablemente adecuados para procesar pagos y entregar los productos adquiridos.</p></section>
      <section><h2>6. Responsabilidad</h2><p>El titular procura que la información del sitio sea clara y actualizada, pero no garantiza resultados personales concretos al utilizar las guías. Las decisiones de la persona usuaria y el uso de los materiales son personales. Nada de este aviso limita los derechos irrenunciables de las personas consumidoras ni la responsabilidad que no pueda excluirse legalmente.</p></section>
      <section><h2>7. Legislación aplicable</h2><p>Este aviso se interpreta conforme a la normativa española y europea aplicable. Si quien compra actúa como persona consumidora, cualquier conflicto se resolverá respetando los fueros y derechos imperativos que le correspondan.</p></section>
    </LegalShell>
  );
}

function Privacidad() {
  return (
    <LegalShell title="Política de privacidad" intro="Explica qué datos se usan para vender, entregar y dar soporte a las guías, y cómo puedes ejercer tus derechos.">
      <section><h2>1. Responsable del tratamiento</h2><p>El responsable del tratamiento de los datos personales es:</p><SellerDetails /><p>Para cualquier cuestión de privacidad o para ejercer derechos, escribe a <a href={`mailto:${seller.privacyEmail}`}>{seller.privacyEmail}</a>.</p></section>
      <section><h2>2. Datos que tratamos</h2><p>Si navegas por la web, podemos tratar datos técnicos estrictamente necesarios para que funcione, como datos de conexión y seguridad. Si realizas una compra, tratamos los datos necesarios para identificar el pedido y entregarlo: nombre, correo electrónico, producto elegido, importe, estado del pago, país o dirección de facturación cuando sea necesaria para impuestos y los datos de comunicación con soporte.</p><p>No recibimos ni almacenamos el número completo de tu tarjeta. El pago se procesa en el entorno seguro de Stripe. No solicitamos información sobre tu salud, diagnósticos, vida sexual, consumo concreto ni otros datos especialmente sensibles para comprar una guía.</p></section>
      <section><h2>3. Finalidades y base jurídica</h2><div className="legal-table-wrap"><table><thead><tr><th>Finalidad</th><th>Base jurídica</th></tr></thead><tbody><tr><td>Gestionar el pedido, confirmar el pago, entregar el archivo y atender incidencias.</td><td>Ejecución del contrato.</td></tr><tr><td>Emitir, conservar y gestionar documentación fiscal y contable.</td><td>Cumplimiento de obligaciones legales.</td></tr><tr><td>Prevenir fraude, abusos y problemas de seguridad.</td><td>Interés legítimo del titular y de las personas usuarias.</td></tr><tr><td>Enviar comunicaciones comerciales.</td><td>Consentimiento expreso y separado. Actualmente no se enviarán comunicaciones comerciales sin ese consentimiento.</td></tr></tbody></table></div></section>
      <section><h2>4. Destinatarios</h2><p>Los datos se comunican únicamente cuando es necesario para prestar el servicio o cumplir una obligación legal. En particular, se utilizan proveedores de pago, entrega digital, alojamiento y asesoramiento profesional cuando corresponda:</p><div className="legal-table-wrap"><table><thead><tr><th>Proveedor o categoría</th><th>Finalidad</th></tr></thead><tbody><tr><td>{legalConfig.delivery.paymentProvider}</td><td>Procesar el pago, prevenir fraude, emitir confirmaciones y cumplir obligaciones de pago.</td></tr><tr><td>{legalConfig.delivery.fileProvider}</td><td>Enviar o facilitar el enlace de descarga del producto digital.</td></tr><tr><td>{legalConfig.delivery.hostingProvider}</td><td>Alojar y mantener técnicamente el sitio web.</td></tr><tr><td>Administraciones públicas, bancos y asesores</td><td>Cumplir obligaciones tributarias, contables o legales cuando resulte exigible.</td></tr></tbody></table></div><p>Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, se revisarán y aplicarán las garantías adecuadas previstas por la normativa aplicable, como decisiones de adecuación o cláusulas contractuales tipo, cuando correspondan. Consulta sus políticas vigentes antes de activar cada servicio.</p></section>
      <section><h2>5. Conservación</h2><p>Los datos del pedido se conservarán mientras sean necesarios para entregar la compra, prestar soporte y atender posibles responsabilidades. La documentación fiscal y las facturas se conservarán, como mínimo, durante el plazo de prescripción tributaria aplicable; en España, con carácter general, cuatro años. Los datos para comunicaciones comerciales se conservarán hasta que retires tu consentimiento u te opongas a recibirlas.</p></section>
      <section><h2>6. Tus derechos</h2><p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos. También puedes retirar tu consentimiento en cualquier momento cuando el tratamiento se base en él. Para ello, escribe a {seller.privacyEmail} e indica el derecho que quieres ejercer. Si consideras que tus derechos no han sido atendidos, puedes reclamar ante la Agencia Española de Protección de Datos, en <a href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es <ExternalLink size={13} aria-hidden="true" /></a>.</p></section>
      <section><h2>7. Decisiones automatizadas</h2><p>Matavicios no adopta decisiones automatizadas que produzcan efectos jurídicos o afecten significativamente a las personas usuarias. Los proveedores de pago pueden aplicar sus propios sistemas de prevención de fraude conforme a sus políticas.</p></section>
      <section><h2>8. Cambios en esta política</h2><p>Esta política podrá actualizarse cuando cambien los servicios utilizados o la normativa. La fecha de actualización se mostrará al inicio de esta página. Los cambios relevantes se aplicarán de acuerdo con la normativa aplicable.</p></section>
    </LegalShell>
  );
}

function CondicionesCompra() {
  return (
    <LegalShell title="Condiciones de compra" intro="Estas condiciones explican con claridad qué compras, cuánto pagas, cómo se entrega y qué ocurre con el desistimiento del contenido digital.">
      <section><h2>1. Vendedor y ámbito</h2><p>El vendedor es {seller.legalName}, con NIF/CIF {seller.taxId} y domicilio en {seller.registeredAddress}. Estas condiciones se aplican a la compra de las guías digitales de Matavicios por personas consumidoras mayores de 18 años.</p></section>
      <section><h2>2. Qué se compra</h2><p>Se adquiere acceso a un archivo digital descargable en PDF. Cada guía individual contiene ocho módulos prácticos. El pack completo incluye las tres guías y veinticuatro módulos en total. El contenido exacto, el precio y las características principales se muestran en la página del producto antes de iniciar el pago.</p><p>Las guías son materiales educativos y de autoayuda. No ofrecen diagnóstico, tratamiento, prescripción, garantía de resultados ni atención individual. No son adecuadas para resolver emergencias o situaciones de riesgo.</p></section>
      <section><h2>3. Precio e impuestos</h2><p>El precio de cada guía individual es {legalConfig.prices.individual} y el precio del pack es {legalConfig.prices.bundle}. {legalConfig.prices.taxNotice}</p><p>No se añaden gastos de envío porque la entrega es digital. El precio aplicable será el que se muestre en Stripe Checkout inmediatamente antes de pulsar el botón de pago.</p></section>
      <section><h2>4. Cómo se realiza la compra</h2><p>La persona compradora selecciona el producto en Matavicios y será dirigida a Stripe Checkout para completar el pago. Antes de pagar podrá revisar el producto, el precio total, los impuestos aplicables y las presentes condiciones. El contrato se perfecciona cuando el pago es autorizado y el vendedor confirma la compra por correo electrónico.</p><p>Los pagos se procesan por {legalConfig.delivery.paymentProvider}. El vendedor no almacena datos completos de tarjetas bancarias.</p></section>
      <section><h2>5. Entrega digital</h2><p>Después de confirmarse el pago, el archivo o enlace de descarga se mostrará y/o enviará al correo electrónico utilizado en la compra mediante {legalConfig.delivery.fileProvider}. La entrega es inmediata salvo incidencia técnica. Si no recibes el correo o el enlace no funciona, escribe a {seller.supportEmail}; el plazo orientativo de respuesta es {legalConfig.delivery.supportResponse}.</p><p>El acceso se concede para uso personal. Se podrán aplicar límites razonables de descargas para proteger los archivos. Estos límites no afectan al derecho de solicitar soporte si existe una incidencia legítima de acceso.</p></section>
      <section><h2>6. Desistimiento y reembolsos</h2><p>En las compras a distancia, la persona consumidora dispone normalmente de un derecho de desistimiento. Sin embargo, para contenido digital no suministrado en soporte material, este derecho puede perderse cuando el suministro comienza con el consentimiento expreso previo de la persona consumidora y con su reconocimiento de que pierde ese derecho.</p><DigitalConsent /><p>La aceptación de esta declaración debe solicitarse antes de iniciar la entrega y registrarse en Stripe Checkout. Si no se ha obtenido ese consentimiento o no se ha iniciado el suministro, se mantienen los derechos que correspondan conforme a la normativa aplicable. Esta regla no limita los derechos por falta de conformidad, errores de cobro o defectos del producto.</p><p>Fuera de los supuestos legalmente exigibles, no se ofrece reembolso voluntario después de haber comenzado la descarga del contenido digital. Para incidencias, errores de entrega o solicitudes relacionadas con derechos de consumo, escribe a {seller.supportEmail} e indica el número de pedido.</p></section>
      <section><h2>7. Licencia de uso y prohibiciones</h2><p>La compra concede una licencia personal, no exclusiva, no transferible y revocable en caso de incumplimiento grave, limitada a la lectura y uso privado del archivo adquirido. No está permitido compartir el enlace de descarga o el archivo, venderlo, publicarlo, distribuirlo, modificarlo, extraerlo para crear productos derivados o utilizarlo con fines comerciales sin autorización escrita.</p></section>
      <section><h2>8. Atención al cliente y reclamaciones</h2><p>Las consultas, incidencias y reclamaciones pueden enviarse a {seller.supportEmail}. Para ayudar a localizar la compra, incluye el correo utilizado, el producto y el número de pedido si lo tienes. Se responderá en el plazo indicado en estas condiciones o, si no fuera posible, se informará del estado de la solicitud.</p></section>
      <section><h2>9. Legislación aplicable</h2><p>Estas condiciones se rigen por la normativa española y europea aplicable, sin perjuicio de los derechos imperativos que correspondan a las personas consumidoras según su lugar de residencia.</p></section>
    </LegalShell>
  );
}

function Cookies() {
  return (
    <LegalShell title="Política de cookies" intro="Esta página explica qué tecnologías de almacenamiento usa Matavicios y cuándo se pedirá tu consentimiento.">
      <section><h2>1. Qué son las cookies</h2><p>Las cookies y tecnologías similares son pequeños archivos o identificadores que un sitio web puede guardar o consultar en tu dispositivo. Pueden ser necesarias para que una web funcione, servir para recordar preferencias o utilizarse para medir audiencias y publicidad.</p></section>
      <section><h2>2. Configuración actual del sitio</h2><p>En su configuración actual, Matavicios no utiliza cookies de publicidad, perfiles comerciales ni analítica opcional en esta web. Solo se utilizarán, si fueran necesarias, tecnologías técnicas o de seguridad imprescindibles para mostrar la página, mantener su funcionamiento o prevenir abusos. Estas tecnologías no requieren consentimiento cuando sean estrictamente necesarias.</p><p>El pago se realiza en el sitio de Stripe, que es un servicio distinto y cuenta con sus propias políticas de privacidad y cookies. La persona usuaria podrá consultar dicha información dentro del entorno de pago antes de completar la compra.</p></section>
      <section><h2>3. Cambios futuros</h2><p>Si Matavicios incorpora analítica, publicidad, píxeles de redes sociales u otras cookies no necesarias, se actualizará esta política y se mostrará un panel de consentimiento antes de instalar o leer dichas tecnologías. El panel permitirá aceptar, rechazar o configurar las cookies no necesarias con la misma facilidad.</p></section>
      <section><h2>4. Cómo gestionar cookies</h2><p>También puedes borrar o bloquear cookies desde la configuración de tu navegador. Ten en cuenta que bloquear tecnologías estrictamente necesarias puede afectar al funcionamiento de algunos servicios. Para cualquier consulta sobre esta política, escribe a {seller.privacyEmail}.</p></section>
    </LegalShell>
  );
}

export default function LegalPage({ kind }: LegalPageProps) {
  if (kind === "aviso-legal") return <AvisoLegal />;
  if (kind === "privacidad") return <Privacidad />;
  if (kind === "condiciones-compra") return <CondicionesCompra />;
  return <Cookies />;
}
