import Image from "next/image";

const menu = [
  {
    number: "01",
    tag: "Classic",
    name: "Matcha Latte",
    description:
      "Rich, smooth Japanese matcha poured over fresh full cream milk.",
    accent: "matcha",
    image: "/jimo/drink-matcha-latte-4k.webp",
    imageAlt:
      "Iced Jimo Matcha Latte with vivid green matcha cascading into milk",
  },
  {
    number: "02",
    tag: "Roasted",
    name: "Hojicha Latte",
    description:
      "Roasted Japanese green tea with a warm, gently nutty aroma.",
    accent: "hojicha",
    image: "/jimo/drink-hojicha-latte-4k.webp",
    imageAlt:
      "Iced Jimo Hojicha Latte with roasted tea cascading into milk",
  },
  {
    number: "03",
    tag: "Signature · Dairy free",
    name: "Matcha Mango",
    description:
      "A bright fusion of matcha, mango purée and a clean hint of lemon.",
    accent: "mango",
    image: "/jimo/drink-matcha-mango-4k.webp",
    imageAlt:
      "Iced Jimo Matcha Mango with vivid green matcha over golden mango",
  },
];

const ritual = [
  {
    number: "01",
    title: "Shake",
    copy: "Every portable pack is made to travel. Give it a proper shake.",
  },
  {
    number: "02",
    title: "Sip",
    copy: "Open, pour over ice if you like, and taste the layers come together.",
  },
  {
    number: "03",
    title: "Enjoy",
    copy: "Six grams of matcha. A daily green ritual, wherever the day goes.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Premium Kagoshima matcha</span>
        <i aria-hidden="true" />
        <span>Crafted daily</span>
        <i aria-hidden="true" />
        <span>6g matcha</span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jimo Matcha home">
          <Image
            src="/jimo/jimo-logo-green.png"
            alt=""
            width={835}
            height={346}
            priority
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Our matcha</a>
          <a href="#menu">Menu</a>
          <a href="#ritual">How it works</a>
        </nav>
        <a
          className="instagram-link"
          href="https://www.instagram.com/jimomatcha/"
          target="_blank"
          rel="noreferrer"
        >
          @jimomatcha <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">
            Born from Kagoshima <span aria-hidden="true">✦</span> Made to move
          </p>
          <h1>
            Green ritual.
            <br />
            <em>Anywhere.</em>
          </h1>
          <p className="hero-lead">
            Premium matcha, freshly crafted and packed for the version of you
            that never sits still.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#menu">
              Taste the menu <span aria-hidden="true">↓</span>
            </a>
            <p>
              Shake <span>→</span> Sip <span>→</span> Enjoy
            </p>
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src="/jimo/hero-pouches-4k.webp"
            alt="Chilled Jimo Matcha portable packs in matcha latte, matcha and matcha mango flavours"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className="hero-brand" aria-hidden="true">
            <Image
              src="/jimo/jimo-logo-white.png"
              alt=""
              width={835}
              height={346}
            />
            <span>Premium Kagoshima matcha</span>
          </div>
          <div className="photo-label">
            <span>Freshly crafted · Made to move</span>
            <strong>Pack it. Chill it. Gooo.</strong>
          </div>
        </div>

        <div className="hero-sticker">
          <span>6G</span>
          <small>matcha</small>
        </div>
        <div className="hero-sun" aria-hidden="true" />
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>Jimo Matcha Gooo</span>
          <b>✦</b>
          <span>Shake · Sip · Enjoy</span>
          <b>✦</b>
          <span>Jimo Matcha Gooo</span>
          <b>✦</b>
          <span>Shake · Sip · Enjoy</span>
          <b>✦</b>
        </div>
      </div>

      <section className="story" id="story">
        <div className="story-index">
          <span>01 / Our matcha</span>
          <span>Kagoshima, Japan</span>
        </div>
        <div className="story-copy">
          <p className="kicker">Premium, never precious</p>
          <h2>
            Serious matcha.
            <br />
            <em>Zero ceremony required.</em>
          </h2>
          <div className="story-notes">
            <p>
              Jimo starts with premium Kagoshima matcha: vivid, smooth and made
              fresh every day.
            </p>
            <p>
              We pack the ritual into a portable pouch so good matcha can meet
              you at work, in the car, after the gym — anywhere.
            </p>
          </div>
        </div>
        <div className="story-seal" aria-hidden="true">
          <span>J</span>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-heading">
          <div>
            <p className="kicker light">The Jimo three</p>
            <h2>
              Pick your
              <br />
              <em>green.</em>
            </h2>
          </div>
          <p>
            One premium tea ritual, three moods. Every size keeps the same
            full-flavour Jimo energy.
          </p>
        </div>

        <div className="menu-photo">
          <Image
            src="/jimo/menu-trio-generated.jpg"
            alt="Matcha latte, hojicha latte and matcha mango arranged on warm handmade paper"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
          <span>Serving suggestion · Generated editorial image</span>
        </div>

        <div className="menu-list">
          {menu.map((item) => (
            <article className={`menu-item ${item.accent}`} key={item.name}>
              <div className="menu-item-top">
                <span>{item.number}</span>
                <small>{item.tag}</small>
              </div>
              <div className="menu-drink">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1000px) 92vw, 30vw"
                />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div
                className="price-row"
                role="group"
                aria-label={`${item.name} prices`}
              >
                <div>
                  <small>250ml</small>
                  <strong>RM15</strong>
                </div>
                <div>
                  <small>500ml</small>
                  <strong>RM28</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mango-feature">
        <div className="mango-image">
          <Image
            src="/jimo/matcha-mango-generated.jpg"
            alt="Editorial composition of Kagoshima matcha powder, mango and ice"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <span>Matcha × Mango</span>
        </div>
        <div className="mango-copy">
          <p className="kicker">03 / The signature</p>
          <h2>
            Green meets
            <br />
            <em>gold.</em>
          </h2>
          <p>
            Earthy matcha. Sun-bright mango. A quick spark of lemon. Our
            dairy-free signature is built in layers and made for the shake.
          </p>
          <dl>
            <div>
              <dt>01</dt>
              <dd>Mango purée</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Premium matcha</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Hint of lemon</dd>
            </div>
          </dl>
          <a className="text-link" href="#ritual">
            See the Jimo ritual <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="ritual-section" id="ritual">
        <div className="ritual-heading">
          <p className="kicker">Portable by design</p>
          <h2>
            Three little
            <br />
            <em>moves.</em>
          </h2>
        </div>
        <div className="ritual-grid">
          {ritual.map((step) => (
            <article key={step.title}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
        <div className="ritual-note">
          <span>Freshly crafted</span>
          <i aria-hidden="true">✦</i>
          <span>6g matcha</span>
          <i aria-hidden="true">✦</i>
          <span>Portable pack</span>
        </div>
      </section>

      <section className="closing">
        <p>Good matcha should go places.</p>
        <h2>
          Take your
          <br />
          green <em>with you.</em>
        </h2>
        <a
          className="primary-button cream-button"
          href="https://www.instagram.com/jimomatcha/"
          target="_blank"
          rel="noreferrer"
        >
          Find us on Instagram <span aria-hidden="true">↗</span>
        </a>
        <div className="closing-orbit orbit-one" aria-hidden="true">
          Shake
        </div>
        <div className="closing-orbit orbit-two" aria-hidden="true">
          Sip
        </div>
      </section>

      <footer>
        <a
          className="footer-wordmark"
          href="#top"
          aria-label="Jimo Matcha home"
        >
          <Image
            src="/jimo/jimo-logo-white.png"
            alt=""
            width={835}
            height={346}
          />
        </a>
        <div>
          <span>Premium Kagoshima matcha</span>
          <span>Crafted daily</span>
        </div>
        <a
          href="https://www.instagram.com/jimomatcha/"
          target="_blank"
          rel="noreferrer"
        >
          @jimomatcha ↗
        </a>
        <small>© 2026 Jimo Matcha</small>
      </footer>
    </main>
  );
}
