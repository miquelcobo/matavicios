import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

const courses = [
  {
    id: "tabaco",
    eyebrow: "Guía 01",
    title: "Deja el tabaco.",
    description:
      "Para entender qué activa el cigarro en tu día y preparar un plan que puedas repetir en los momentos difíciles.",
    bullets: ["Detecta tus disparadores", "Crea una pausa antes de fumar", "Diseña apoyo y seguimiento"],
    tone: "tone-lime",
  },
  {
    id: "cannabis",
    eyebrow: "Guía 02",
    title: "Cambiar tu relación con el cannabis.",
    description:
      "Para mirar tu consumo de frente, elegir un cambio realista y recuperar claridad sin dramatizarte.",
    bullets: ["Elige tu propia meta", "Prepárate para las urgencias", "Revisa lo que te funciona"],
    tone: "tone-warm",
  },
  {
    id: "porno",
    eyebrow: "Guía 03",
    title: "Uso de pornografía que te preocupa.",
    description:
      "Para entender el uso que te inquieta, cuidar tus límites y hacer cambios que tengan sentido para ti.",
    bullets: ["Observa tu patrón sin juzgarte", "Cambia el contexto", "Cuida bienestar y privacidad"],
    tone: "tone-stone",
  },
] as const;

const reflections = [
  ["Sin sermones.", "No estamos aquí para decirte quién tienes que ser. Estamos para darte una forma clara de mirar lo que te pasa."],
  ["Sin milagros.", "No hay un botón para dejar un hábito. Hay pasos pequeños, práctica y la posibilidad de pedir apoyo."],
  ["Sin empezar de cero.", "Si un día no sale como querías, no borra lo que ya has entendido. Se revisa y se sigue."],
] as const;

export default function Home() {
  const [selected, setSelected] = useState<(typeof courses)[number] | null>(null);

  return (
    <div className="simple-site" id="inicio">
      <header className="simple-nav">
        <a className="simple-brand" href="#inicio" aria-label="Matavicios, inicio">
          <span className="brand-mark" aria-hidden="true">×</span>
          Mata<span>vicios</span>
        </a>
        <a href="#cursos">Cursos disponibles</a>
      </header>

      <main>
        <section className="simple-hero" aria-labelledby="hero-title">
          <p className="micro-label">GUÍAS PRÁCTICAS PARA ADULTOS</p>
          <h1 id="hero-title">Sabes que quieres cambiarlo.</h1>
          <p>
            Llevas un tiempo dándole vueltas. Matavicios no es un discurso moral ni un método milagroso. Son guías sencillas con ejercicios reales para entender tu patrón y hacer espacio antes de actuar.
          </p>
          <p className="hero-price">Cada curso cuesta <strong>4,99 €</strong>.</p>
          <a className="quiet-cta" href="#cursos">Ver las tres guías <ArrowRight size={16} aria-hidden="true" /></a>
          <small>Material de autoayuda para adultos. No sustituye atención profesional.</small>
        </section>

        <section className="reflection-grid" aria-label="Enfoque de Matavicios">
          {reflections.map(([title, copy]) => (
            <article className="reflection-card" key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </section>

        <section className="courses-wrap" id="cursos" aria-labelledby="courses-title">
          <div className="courses-heading">
            <p className="micro-label">ELIGE UN PUNTO DE PARTIDA</p>
            <h2 id="courses-title">Una guía para lo que hoy te está pesando.</h2>
          </div>
          <div className="simple-course-grid">
            {courses.map((course) => (
              <article className={`simple-course ${course.tone}`} key={course.id}>
                <div className="course-card-top"><span>{course.eyebrow}</span><span>8 módulos</span></div>
                <h3>{course.title}</h3>
                <p className="course-copy">{course.description}</p>
                <ul>
                  {course.bullets.map((bullet) => (
                    <li key={bullet}><Check size={15} aria-hidden="true" />{bullet}</li>
                  ))}
                </ul>
                <div className="simple-card-footer">
                  <strong>4,99 €</strong>
                  <button type="button" onClick={() => setSelected(course)}>Elegir guía <ArrowRight size={16} aria-hidden="true" /></button>
                </div>
              </article>
            ))}
          </div>
          <p className="purchase-note">Elige una sola guía. Lee a tu ritmo. Vuelve a los ejercicios las veces que lo necesites.</p>
        </section>
      </main>

      <footer className="simple-footer">
        <div><span className="brand-mark" aria-hidden="true">×</span><strong> Matavicios</strong> · Guías digitales de autoayuda.</div>
        <p>No prometemos resultados. Te ofrecemos herramientas, fuentes y una forma más clara de empezar.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      {selected && (
        <div className="simple-modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <section className="simple-modal" role="dialog" aria-modal="true" aria-labelledby="selection-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-x" type="button" onClick={() => setSelected(null)} aria-label="Cerrar"><X size={18} /></button>
            <p className="micro-label">HAS ELEGIDO</p>
            <h2 id="selection-title">{selected.title}</h2>
            <p>Esta guía cuesta <strong>4,99 €</strong>. El espacio está preparado para conectar un método de pago seguro antes de publicar.</p>
            <p className="modal-honesty">No simulamos una compra mientras el checkout no esté configurado.</p>
            <button className="modal-action" type="button" onClick={() => setSelected(null)}>Entendido</button>
          </section>
        </div>
      )}
    </div>
  );
}
