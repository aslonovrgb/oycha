import Image from "next/image";
import { FlavorCard } from "./flavor-card";
import { FlavorFinder } from "./flavor-finder";

const menu = [
  {
    number: "01",
    slug: "matcha-latte",
    tag: "Classic",
    name: "Matcha Latte",
    description:
      "Rich, smooth Japanese matcha poured over fresh full cream milk.",
    accent: "matcha",
    image: "/jimo/drink-matcha-latte-card-v2.webp",
    imageAlt:
      "Iced Jimo Matcha Latte with vivid green matcha cascading into milk",
    packImage: "/jimo/pouches-v2/jimo-pouch-matcha-latte-card-v3.webp",
    packAlt: "Jimo Matcha Latte portable pouch with centered cap",
    packNote: "Pale, creamy and ready whenever the green mood hits.",
  },
  {
    number: "02",
    slug: "hojicha-latte",
    tag: "Roasted",
    name: "Hojicha Latte",
    description:
      "Roasted Japanese green tea with a warm, gently nutty aroma.",
    accent: "hojicha",
    image: "/jimo/drink-hojicha-latte-card-v2.webp",
    imageAlt:
      "Iced Jimo Hojicha Latte with roasted tea cascading into milk",
    packImage: "/jimo/pouches-v2/jimo-pouch-hojicha-latte-card-v3.webp",
    packAlt: "Jimo Hojicha Latte portable pouch with centered cap",
    packNote: "Roasted comfort, packed cold and made to move.",
  },
  {
    number: "03",
    slug: "matcha-mango",
    tag: "Signature · Dairy free",
    name: "Matcha Mango",
    description:
      "A bright fusion of matcha, mango purée and a clean hint of lemon.",
    accent: "mango",
    image: "/jimo/drink-matcha-mango-card-v2.webp",
    imageAlt:
      "Iced Jimo Matcha Mango with vivid green matcha over golden mango",
    packImage: "/jimo/pouches-v2/jimo-pouch-matcha-mango-card-v3.webp",
    packAlt: "Jimo Matcha Mango portable pouch with centered cap",
    packNote: "Green on top, mango gold below. Shake to make it yours.",
  },
  {
    number: "04",
    slug: "yuzu-matcha",
    tag: "New · Citrus",
    name: "Yuzu Matcha",
    description:
      "Ceremonial matcha lifted by bright Japanese yuzu for a crisp, clean citrus finish.",
    accent: "yuzu",
    image: "/jimo/drink-yuzu-matcha-card-v2.webp",
    imageAlt:
      "Iced Jimo Yuzu Matcha with vivid green matcha over luminous yuzu citrus",
    packImage: "/jimo/pouches-v2/jimo-pouch-yuzu-matcha-card-v3.webp",
    packAlt: "Jimo Yuzu Matcha portable pouch with centered cap",
    packNote: "A bright citrus lift in the same go-anywhere ritual.",
  },
];

const wildMoments = [
  {
    number: "01",
    title: "After training",
    flavour: "Matcha Mango",
    image: "/jimo/in-the-wild/jimo-after-training.webp",
    alt: "Athlete holding a Jimo Matcha Mango pouch after training",
  },
  {
    number: "02",
    title: "At work",
    flavour: "Hojicha Latte",
    image: "/jimo/in-the-wild/jimo-at-work.webp",
    alt: "Creative professional holding a Jimo Hojicha Latte pouch at her desk",
  },
  {
    number: "03",
    title: "In the city",
    flavour: "Yuzu Matcha",
    image: "/jimo/in-the-wild/jimo-in-the-city.webp",
    alt: "Driver holding a Jimo Yuzu Matcha pouch in a parked car",
  },
  {
    number: "04",
    title: "Outside",
    flavour: "Matcha Latte",
    image: "/jimo/in-the-wild/jimo-outside-v2.webp",
    alt: "Woman carrying a compact Jimo Matcha Latte pouch through a tropical park",
  },
  {
    number: "05",
    title: "By the sea",
    flavour: "Yuzu Matcha",
    image: "/jimo/in-the-wild/jimo-by-the-sea.webp",
    alt: "Beachgoer holding a Jimo Yuzu Matcha pouch beside the sea",
  },
  {
    number: "06",
    title: "On campus",
    flavour: "Matcha Mango",
    image: "/jimo/in-the-wild/jimo-on-campus.webp",
    alt: "Student carrying a Jimo Matcha Mango pouch on campus",
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
            unoptimized
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Our matcha</a>
          <a href="#finder">Find your Jimo</a>
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
            <a className="primary-button" href="#finder">
              Find your Jimo <span aria-hidden="true">↓</span>
            </a>
            <a className="hero-menu-link" href="#menu">
              Taste the menu <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src="/jimo/campaign-candidates/jimo-hero-four-flavours-square-v2.webp"
            alt="Four full-height Jimo pouches arranged on pale stone against a deep forest-green background"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
            className="hero-photo-art"
            unoptimized
          />
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
          <span>Four signatures · One ritual</span>
          <b>✦</b>
          <span>Jimo Matcha Gooo</span>
          <b>✦</b>
          <span>Four signatures · One ritual</span>
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
              Jimo starts with ceremonial-grade matcha from Kagoshima: vivid,
              smooth and freshly crafted every day.
            </p>
            <p>
              We pack the ritual into a portable pouch so good matcha can meet
              you at work, in the car, after the gym — anywhere.
            </p>
          </div>
          <div className="story-origin" aria-label="The meaning behind Jimo">
            <div>
              <span>Jì</span>
              <strong>稷</strong>
              <p>Nourishment from the earth</p>
            </div>
            <i aria-hidden="true">+</i>
            <div>
              <span>Mǒ</span>
              <strong>抹</strong>
              <p>The gentle art of whisking matcha</p>
            </div>
          </div>
        </div>
        <div className="story-seal" aria-hidden="true">
          <span>J</span>
        </div>
      </section>

      <FlavorFinder />

      <section className="menu-section" id="menu">
        <div className="menu-heading">
          <div>
            <p className="kicker light">The Jimo four</p>
            <h2>
              Pick your
              <br />
              <em>green.</em>
            </h2>
          </div>
          <p>
            One premium tea ritual, four moods. Every 250 ml pouch keeps the
            same full-flavour Jimo energy.
          </p>
        </div>

        <div className="menu-photo">
          <Image
            src="/jimo/campaign-candidates/jimo-four-flavours-wide-v2.webp"
            alt="Top-down Jimo family photograph with Matcha Latte, Hojicha Latte, Matcha Mango and Yuzu Matcha pouches"
            width={1915}
            height={821}
            sizes="(max-width: 900px) 100vw, 90vw"
            unoptimized
          />
        </div>

        <div className="pack-intro">
          <div>
            <span>Drink on the front</span>
            <i aria-hidden="true">↻</i>
            <span>Pack on the flip</span>
          </div>
          <p>Hover to meet the pouch. Tap on mobile.</p>
        </div>

        <div className="menu-list">
          {menu.map((item) => (
            <FlavorCard item={item} key={item.name} />
          ))}
        </div>
      </section>

      <section className="wild-section" id="wild">
        <div className="wild-heading">
          <div>
            <p className="kicker">Jimo in the wild</p>
            <h2>
              Your day,
              <br />
              <em>your green.</em>
            </h2>
          </div>
          <div className="wild-intro">
            <span>Everyday energy · 01—06</span>
            <p>
              Workdays, workouts, city drives and days by the sea. One cold
              pack, wherever the day goes.
            </p>
          </div>
        </div>

        <div className="wild-grid" aria-label="Jimo lifestyle series">
          {wildMoments.map((moment, index) => (
            <figure
              className={`wild-card wild-card-${index + 1}`}
              key={moment.title}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(max-width: 680px) 82vw, (max-width: 1000px) 46vw, 34vw"
                unoptimized
              />
              <figcaption>
                <span>
                  {moment.number} / {moment.title}
                </span>
                <strong>{moment.flavour}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="wild-footer">
          <p className="wild-swipe">Swipe to explore <span aria-hidden="true">→</span></p>
          <span>Made to move</span>
          <a
            href="https://www.instagram.com/jimomatcha/"
            target="_blank"
            rel="noreferrer"
          >
            Follow the ritual <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="mango-feature">
        <div className="mango-image">
          <Image
            src="/jimo/matcha-mango-generated.jpg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="mango-image-backdrop"
            aria-hidden="true"
            unoptimized
          />
          <Image
            src="/jimo/matcha-mango-generated.jpg"
            alt="Editorial composition of Kagoshima matcha powder, mango and ice"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="mango-image-art"
            unoptimized
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
        <div className="closing-flavours" aria-label="The Jimo four">
          {menu.map((item, index) => (
            <div
              className={`closing-flavour closing-flavour-${item.accent}`}
              key={item.name}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
        <div className="closing-orbit orbit-one" aria-hidden="true">
          Shake
        </div>
        <div className="closing-orbit orbit-two" aria-hidden="true">
          Sip
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
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
              unoptimized
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
        </div>

        <div className="footer-credits">
          <span>© 2026 Jimo Matcha. All rights reserved.</span>
          <span className="footer-credit-meta">
            Proudly presented by
            <a
              className="footer-studio-link"
              href="https://creativesinfinity.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Creatives Infinity website"
            >
              Creatives Infinity <i aria-hidden="true">↗</i>
            </a>
          </span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick actions">
        <a href="#finder">
          <span>Find your</span>
          <strong>Jimo</strong>
        </a>
        <a
          href="https://www.instagram.com/jimomatcha/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </main>
  );
}
