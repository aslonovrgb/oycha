const drinks = [
  {
    number: "01",
    name: "Matcha Blush",
    note: "Strawberry · Coconut",
    description:
      "Natural strawberry purée, silky coconut milk and a bright Nanzan matcha finish.",
    image:
      "https://images.pexels.com/photos/32108584/pexels-photo-32108584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tone: "berry",
  },
  {
    number: "02",
    name: "Matcha Glow",
    note: "Mango · Cloud milk",
    description:
      "Sun-ripe mango purée, lactose-free milk and a clean ceremonial matcha shot.",
    image:
      "https://images.pexels.com/photos/4955253/pexels-photo-4955253.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tone: "mango",
  },
  {
    number: "03",
    name: "Matcha Pop",
    note: "Blueberry · Pineapple",
    description:
      "Blueberry boba pearls, cold milk and a soft pineapple cream over vivid matcha.",
    image:
      "https://images.pexels.com/photos/34101458/pexels-photo-34101458.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tone: "blueberry",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="OYCHA home">
          OY<span>·</span>CHA
        </a>
        <nav aria-label="Main navigation">
          <a href="#mood">Matcha mood</a>
          <a href="#ritual">Our ritual</a>
          <a href="#visit">Visit us</a>
        </nav>
        <a className="header-cta" href="#mood">
          See the menu <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Nanzan matcha <span>•</span> Made fresh daily
          </p>
          <h1>
            Matcha,
            <br />
            <em>remixed.</em>
          </h1>
          <p className="hero-intro">
            Japanese ritual meets playful fruit. Slow energy, loud flavour and
            a little joy in every cup.
          </p>
          <a className="pill-button" href="#mood">
            Find your mood <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true">
            <span>Whisked • Poured • Loved • </span>
          </div>
          <div className="hero-image-wrap">
            <img
              src="https://images.pexels.com/photos/37745284/pexels-photo-37745284.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Layered iced matcha latte in a clear glass"
            />
          </div>
          <div className="hero-stamp">
            <strong>100%</strong>
            <span>pure tea</span>
          </div>
          <div className="hero-card">
            <span>Today&apos;s pick</span>
            <strong>Matcha Blush</strong>
            <small>Strawberry / Coconut / Nanzan</small>
          </div>
        </div>

        <div className="scroll-note" aria-hidden="true">
          <span />
          scroll to sip
        </div>
      </section>

      <section className="mood-section" id="mood">
        <div className="section-heading">
          <p className="eyebrow light">The mood collection</p>
          <h2>
            Pick your
            <br />
            <em>colour.</em>
          </h2>
          <p>
            Three bright personalities, one ceremonial-grade matcha base. No
            boring green drinks here.
          </p>
        </div>

        <div className="drink-grid">
          {drinks.map((drink) => (
            <article className={`drink-card ${drink.tone}`} key={drink.name}>
              <div className="drink-image">
                <img src={drink.image} alt="" />
                <span className="drink-number">{drink.number}</span>
              </div>
              <div className="drink-copy">
                <p>{drink.note}</p>
                <h3>{drink.name}</h3>
                <span>{drink.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-strip" aria-label="Our promises">
        <p>Real fruit purées</p>
        <i aria-hidden="true">✦</i>
        <p>Nanzan matcha</p>
        <i aria-hidden="true">✦</i>
        <p>Whisked to order</p>
        <i aria-hidden="true">✦</i>
        <p>Good mood energy</p>
      </section>

      <section className="ritual-section" id="ritual">
        <div className="ritual-image">
          <img
            src="https://images.pexels.com/photos/30221574/pexels-photo-30221574.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Traditional bamboo whisk with matcha powder"
          />
          <p>
            <span>From leaf</span>
            <span>to mood</span>
          </p>
        </div>

        <div className="ritual-copy">
          <p className="eyebrow">The OYCHA ritual</p>
          <h2>
            Tradition,
            <br />
            with a <em>twist.</em>
          </h2>
          <p className="ritual-lead">
            We keep the centuries-old whisking ritual, then turn the flavour
            all the way up with fruit, texture and unexpected combinations.
          </p>

          <ol className="ritual-steps">
            <li>
              <span>01</span>
              <div>
                <strong>Sift</strong>
                <p>Fine Nanzan matcha for a smooth, vivid base.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Whisk</strong>
                <p>Fresh to order until the texture turns cloud-soft.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Play</strong>
                <p>Layered with real fruit, milk and a little OYCHA magic.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="inside-section">
        <div className="inside-heading">
          <p className="eyebrow">Inside the cup</p>
          <h2>
            Layers of
            <br />
            <em>good mood.</em>
          </h2>
        </div>

        <div className="ingredient-stack" aria-label="Matcha Blush ingredients">
          <div className="ingredient powder">
            <span>01</span>
            <p>
              Nanzan matcha
              <small>clean · grassy · umami</small>
            </p>
          </div>
          <div className="ingredient foam">
            <span>02</span>
            <p>
              Coconut cloud
              <small>airy · silky · soft</small>
            </p>
          </div>
          <div className="ingredient milk">
            <span>03</span>
            <p>
              Cold milk
              <small>smooth · balanced · light</small>
            </p>
          </div>
          <div className="ingredient fruit">
            <span>04</span>
            <p>
              Strawberry purée
              <small>bright · real · juicy</small>
            </p>
          </div>
          <div className="cup-line" aria-hidden="true" />
        </div>
      </section>

      <section className="mood-quote">
        <p>Slow energy.</p>
        <p>
          <em>Loud flavour.</em>
        </p>
        <p>Good mood.</p>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-kicker">OYCHA · OYCHA · OYCHA · OYCHA</div>
        <div className="visit-content">
          <p className="eyebrow light">Your daily green ritual</p>
          <h2>
            Come for
            <br />
            the matcha.
            <br />
            <em>Stay for the mood.</em>
          </h2>
          <a className="pill-button light-button" href="#mood">
            Explore the collection <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="visit-photo">
          <img
            src="https://images.pexels.com/photos/8004570/pexels-photo-8004570.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Freshly whisked matcha drink"
          />
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          OY<span>·</span>CHA
        </a>
        <p>Matcha made fun.</p>
        <p>Good mood in a cup.</p>
        <span>© 2026 OYCHA</span>
      </footer>
    </main>
  );
}
