import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleHelp,
  FileText,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const courses = [
  {
    id: "tabaco",
    eyebrow: "01 · Tabaco",
    title: "Deja el tabaco.",
    label: "Para preparar un intento con apoyo",
    description:
      "Entiende tu patrón, detecta disparadores y construye un plan que no dependa solo de aguantar.",
    bullets: ["8 módulos prácticos", "Plan si-entonces y seguimiento", "Opciones de apoyo explicadas con claridad"],
    accent: "lima",
  },
  {
    id: "cannabis",
    eyebrow: "02 · Cannabis",
    title: "Cambiar tu relación con el cannabis.",
    label: "Para recuperar margen de elección",
    description:
      "Observa tu consumo, reduce riesgos y prepara cambios realistas sin etiquetas ni soluciones milagro.",
    bullets: ["Meta flexible: reducir, pausar o dejar", "Plan para urgencias y sueño", "Entorno, apoyo y revisión semanal"],
    accent: "musgo",
  },
  {
    id: "porno",
    eyebrow: "03 · Uso de pornografía",
    title: "Uso de pornografía que te preocupa.",
    label: "Para entenderte sin moralizarte",
    description:
      "Una guía para observar el uso que te inquieta, cuidar tus límites y elegir cambios con sentido para ti.",
    bullets: ["Metas propias, no rachas impuestas", "Bienestar, límites y privacidad", "Conversación y apoyo seguro"],
    accent: "piedra",
  },
] as const;

const faqs = [
  {
    question: "¿Qué incluye cada curso?",
    answer:
      "Una guía digital de 8 módulos con ejercicios, hojas de trabajo, planes de acción y referencias para seguir profundizando. Está diseñada para leerse y aplicarse a tu ritmo.",
  },
  {
    question: "¿Es terapia o sustituye a un profesional?",
    answer:
      "No. Son materiales educativos de autoayuda para adultos. No diagnostican, no prescriben tratamientos y no sustituyen la valoración de medicina, enfermería, farmacia, psicología o psiquiatría.",
  },
  {
    question: "¿Tengo que dejarlo todo de golpe?",
    answer:
      "No. Cada guía propone una meta revisable: observar, reducir, pausar, dejar o pedir una evaluación. Lo importante es elegir un siguiente paso que tenga sentido para tu situación.",
  },
  {
    question: "¿Qué ocurre si necesito más ayuda?",
    answer:
      "Los cursos explican cuándo conviene sumar apoyo sanitario o psicológico. Ante una crisis, ideas de autolesión, riesgo inmediato o síntomas agudos, hay que usar los servicios de urgencia locales.",
  },
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[number] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openSelection = (course: (typeof courses)[number]) => setSelectedCourse(course);

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#inicio" aria-label="Matavicios, inicio">
          <span className="brand-dot" aria-hidden="true" />
          <span>Matavicios</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#cursos">Cursos</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#transparencia">Transparencia</a>
        </nav>
        <a className="nav-cta" href="#cursos">
          Ver cursos <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-texture" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow animate-in">GUÍAS PRÁCTICAS PARA ADULTOS</p>
            <h1 id="hero-title" className="animate-in delay-1">
              Cambiar un hábito no debería ser una batalla a oscuras.
            </h1>
            <p className="hero-copy animate-in delay-2">
              Tres guías sencillas para mirar de frente lo que te está pasando, entender tu patrón y recuperar margen de elección sin promesas vacías.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a className="button button-primary" href="#cursos">
                Explorar los cursos <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#transparencia">
                Conocer el enfoque <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <div className="hero-proof animate-in delay-4">
            <div>
              <strong>3</strong>
              <span>guías concretas</span>
            </div>
            <div>
              <strong>8</strong>
              <span>módulos por guía</span>
            </div>
            <div>
              <strong>4,99 €</strong>
              <span>por curso</span>
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label="Propuesta de valor">
          <p>Ni sermones. Ni fórmulas mágicas. <strong>Herramientas que puedes usar cuando tu día real se complica.</strong></p>
          <div className="intro-mark" aria-hidden="true"><Sparkles size={20} /></div>
        </section>

        <section className="courses-section" id="cursos" aria-labelledby="courses-title">
          <div className="section-head">
            <div>
              <p className="eyebrow">ELIGE TU PUNTO DE PARTIDA</p>
              <h2 id="courses-title">Una guía para lo que hoy te está pesando.</h2>
            </div>
            <p className="section-note">Cada curso es independiente, directo y pensado para acompañarte a tu ritmo.</p>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => (
              <article className={`course-card course-${course.accent}`} key={course.id}>
                <div className="course-topline">
                  <span>{course.eyebrow}</span>
                  <span className="course-number">0{index + 1}</span>
                </div>
                <div className="course-main">
                  <p className="course-label">{course.label}</p>
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <ul>
                    {course.bullets.map((bullet) => (
                      <li key={bullet}><Check size={16} aria-hidden="true" />{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="course-bottom">
                  <div className="price"><span>Precio único</span><strong>4,99 €</strong></div>
                  <button className="select-button" type="button" onClick={() => openSelection(course)}>
                    Elegir guía <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="course-footnote">Acceso individual a una guía digital. El enlace de compra segura se conectará antes de la publicación.</p>
        </section>

        <section className="process-section" id="como-funciona" aria-labelledby="process-title">
          <div className="process-visual" aria-hidden="true">
            <span className="process-orbit orbit-one" />
            <span className="process-orbit orbit-two" />
            <span className="process-core">01<br /><small>PAUSA</small></span>
          </div>
          <div className="process-content">
            <p className="eyebrow">SIN COMPLICARLO MÁS</p>
            <h2 id="process-title">Empieza por entender. Sigue con un paso posible.</h2>
            <div className="steps">
              <article>
                <span>01</span>
                <div><h3>Observa</h3><p>Identifica qué pasa justo antes, durante y después de la conducta. Sin juicio: solo datos útiles.</p></div>
              </article>
              <article>
                <span>02</span>
                <div><h3>Prueba</h3><p>Elige una respuesta breve para el momento difícil: un cambio de contexto, una pausa o un plan de apoyo.</p></div>
              </article>
              <article>
                <span>03</span>
                <div><h3>Ajusta</h3><p>Revisa qué funcionó, qué no y qué apoyo necesitas. Un episodio no borra lo que ya has aprendido.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="ethics-section" id="transparencia" aria-labelledby="ethics-title">
          <div className="ethics-copy">
            <p className="eyebrow">UN ENFOQUE TRANSPARENTE</p>
            <h2 id="ethics-title">No vendemos una versión perfecta de ti.</h2>
            <p>Vendemos guías claras para que puedas hacerte mejores preguntas y tomar decisiones más tuyas. Las herramientas se inspiran en enfoques conductuales, cognitivos y de aceptación, y las fuentes están enlazadas dentro de cada curso.</p>
          </div>
          <div className="ethics-list">
            <article><ShieldCheck size={20} aria-hidden="true" /><div><h3>Sin promesas clínicas</h3><p>No garantizamos abstinencia, plazos ni resultados. Cada proceso es distinto.</p></div></article>
            <article><FileText size={20} aria-hidden="true" /><div><h3>Fuentes que puedes comprobar</h3><p>Las guías incluyen referencias y explican sus límites de forma comprensible.</p></div></article>
            <article><CircleHelp size={20} aria-hidden="true" /><div><h3>Apoyo cuando hace falta</h3><p>No sustituyen terapia ni atención sanitaria. Indican cuándo es buena idea pedir ayuda.</p></div></article>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow">PREGUNTAS CLARAS</p>
            <h2 id="faq-title">Lo que necesitas saber antes de empezar.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;
              return (
                <article className={`faq-item ${expanded ? "is-open" : ""}`} key={faq.question}>
                  <button type="button" onClick={() => setOpenFaq(expanded ? null : index)} aria-expanded={expanded}>
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">{expanded ? "−" : "+"}</span>
                  </button>
                  {expanded && <p>{faq.answer}</p>}
                </article>
              );
            })}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="final-marker" aria-hidden="true">M</div>
          <p className="eyebrow">UN SIGUIENTE PASO, NO UNA PROMESA IMPOSIBLE</p>
          <h2 id="final-title">Elige una guía. Empieza con una página. Haz espacio para decidir.</h2>
          <a className="button button-primary" href="#cursos">Ver las tres guías <ArrowRight size={18} aria-hidden="true" /></a>
          <p className="fine-print">Guías digitales de autoayuda para adultos · 4,99 € por curso · No sustituyen atención profesional</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-dot" aria-hidden="true" /> <strong>Matavicios</strong></div>
        <p>Herramientas prácticas para mirar un patrón con más claridad y menos culpa.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      {selectedCourse && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedCourse(null)}>
          <section className="selection-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelectedCourse(null)} aria-label="Cerrar"><X size={20} /></button>
            <p className="eyebrow">HAS ELEGIDO</p>
            <h2 id="modal-title">{selectedCourse.title}</h2>
            <p>Precio: <strong>4,99 €</strong>. La landing ya está preparada para conectar aquí tu checkout o enlace de pago seguro.</p>
            <p className="modal-note">Por transparencia, no simulamos una compra hasta que el método de pago esté configurado.</p>
            <button className="button button-primary" type="button" onClick={() => setSelectedCourse(null)}>Entendido <ArrowRight size={18} aria-hidden="true" /></button>
          </section>
        </div>
      )}
    </div>
  );
}
