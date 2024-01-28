export default function Header() {
  return (
    <header className="main-header">
      <section className="et-hero-tabs">
        <h1>STICKY SLIDER NAV</h1>
        <h3>Sliding content with sticky tab nav</h3>
        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#tab-es6">ES6</a>
          <a className="et-hero-tab" href="#tab-flexbox">Flexbox</a>
          <a className="et-hero-tab" href="#tab-react">React</a>
          <a className="et-hero-tab" href="#tab-angular">Angular</a>
          <a className="et-hero-tab" href="#tab-other">Other</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>
    </header>
  )
}