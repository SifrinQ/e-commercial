import logo from '../assets/logo-placeholder.png'
import itemPlaceholder from '../assets/item-placeholder.png'
import './style/About.css'

function About() {
  return (
    <section className="aboutPage">
      <div className="aboutHero">
        <div className="aboutIntro">
          <p className="aboutEyebrow">About Us</p>
          <h1 className="aboutTitle">We build simple products people enjoy using</h1>
          <p>
            We are a small team focused on building clear and practical digital
            experiences for growing businesses.
          </p>
          <a className="aboutCta" href="#">Learn more</a>
        </div>

        <div className="aboutVisuals">
          <img className="mainVisual" src={itemPlaceholder} alt="Team at work" />
          <div className="breakoutCard">
            <img src={logo} alt="Company logo" />
            <h3>Reliable delivery</h3>
            <p>Fast iterations, transparent process, and steady product growth.</p>
          </div>
          <img className="secondaryVisual" src={logo} alt="Office moments" />
        </div>
      </div>

      <section className="trustedBlock" aria-label="Trusted by clients">
        <p>Valued by clients worldwide</p>
        <div className="trustedLogos">
          <span>ARC</span>
          <span>MERCURY</span>
          <span>RAMP</span>
          <span>RETOOL</span>
          <span>WATERSHED</span>
          <span>DESCRIPT</span>
        </div>
      </section>

      <section className="statsBlock">
        <div className="statsHeading">
          <h2>Our Achievements in Numbers</h2>
          <p>
            Practical work, measurable outcomes, and long-term partnerships with
            teams we support.
          </p>
        </div>

        <div className="statsGrid">
          <article className="statItem">
            <p className="statValue">300+</p>
            <p className="statLabel">Companies Supported</p>
          </article>
          <article className="statItem">
            <p className="statValue">800+</p>
            <p className="statLabel">Projects Finalized</p>
          </article>
          <article className="statItem">
            <p className="statValue">99%</p>
            <p className="statLabel">Happy Customers</p>
          </article>
          <article className="statItem">
            <p className="statValue">10+</p>
            <p className="statLabel">Industry Awards</p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default About