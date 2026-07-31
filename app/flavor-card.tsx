"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type Flavor = {
  number: string;
  tag: string;
  name: string;
  description: string;
  accent: string;
  image: string;
  imageAlt: string;
  packImage: string;
  packAlt: string;
  packNote: string;
};

export function FlavorCard({ item }: { item: Flavor }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const panelId = useId();
  const didInteract = useRef(false);
  const frontButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!didInteract.current) {
      return;
    }

    (isFlipped ? backButtonRef : frontButtonRef).current?.focus();
  }, [isFlipped]);

  function setFlipped(nextValue: boolean) {
    didInteract.current = true;
    setIsFlipped(nextValue);
  }

  return (
    <article
      className={`menu-item ${item.accent}${isFlipped ? " is-flipped" : ""}`}
      aria-label={`${item.name}: drink and portable pack`}
    >
      <div className="menu-card-inner">
        <section
          className="menu-card-face menu-card-front"
          aria-hidden={isFlipped}
        >
          <div className="menu-item-top">
            <span>{item.number}</span>
            <small>{item.tag}</small>
          </div>

          <div className="menu-drink">
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={2560}
              height={3200}
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

          <button
            className="flip-trigger"
            type="button"
            ref={frontButtonRef}
            aria-controls={panelId}
            aria-expanded={isFlipped}
            tabIndex={isFlipped ? -1 : 0}
            onClick={() => setFlipped(true)}
          >
            Meet the pack <span aria-hidden="true">↻</span>
          </button>
        </section>

        <section
          className="menu-card-face menu-card-back"
          id={panelId}
          aria-hidden={!isFlipped}
        >
          <div className="menu-item-top">
            <span>{item.number}</span>
            <small>Portable pack</small>
          </div>

          <div className="menu-pack-stage">
            <Image
              src={item.packImage}
              alt={item.packAlt}
              width={1024}
              height={1536}
              sizes="(max-width: 1000px) 92vw, 30vw"
            />
            <span aria-hidden="true">6G</span>
          </div>

          <div className="menu-pack-copy">
            <small>Shake · Sip · Enjoy</small>
            <h3>{item.name} to gooo.</h3>
            <p>{item.packNote}</p>
          </div>

          <button
            className="flip-trigger flip-trigger-back"
            type="button"
            ref={backButtonRef}
            aria-controls={panelId}
            aria-expanded={isFlipped}
            tabIndex={isFlipped ? 0 : -1}
            onClick={() => setFlipped(false)}
          >
            Back to the drink <span aria-hidden="true">↺</span>
          </button>
        </section>
      </div>
    </article>
  );
}
