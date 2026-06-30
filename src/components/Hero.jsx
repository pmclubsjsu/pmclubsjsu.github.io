import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-glow hero__bg-glow--left" />
      <div className="hero__bg-glow hero__bg-glow--right" />
      <div className="hero__inner">
        <div className="hero__badge">Product Management Club</div>
        <h1 className="hero__title">
          Product Management Club<br />
          <span className="hero__title-highlight">at SJSU</span>
        </h1>
        <p className="hero__subtitle">
          PM Club accelerates students' path to succeeding in the job market
          with opportunities to network, learn, and gain hands-on experience.
        </p>
        <a href="#join" className="hero__cta">
          Join Now
        </a>
      </div>
    </section>
  )
}
