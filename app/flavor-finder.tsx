"use client";

import Image from "next/image";
import { useState } from "react";

type FlavorKey = "matcha" | "hojicha" | "mango" | "yuzu";

type FinderFlavor = {
  key: FlavorKey;
  name: string;
  note: string;
  tag: string;
  drinkImage: string;
  packImage: string;
  target: string;
};

type FinderOption = {
  label: string;
  detail: string;
  scores: Partial<Record<FlavorKey, number>>;
};

const flavors: Record<FlavorKey, FinderFlavor> = {
  matcha: {
    key: "matcha",
    name: "Matcha Latte",
    note: "Creamy, vivid and quietly energising — your everyday green.",
    tag: "Classic",
    drinkImage: "/jimo/drink-matcha-latte-card-v2.webp",
    packImage: "/jimo/pouches-v2/jimo-pouch-matcha-latte-card-v3.webp",
    target: "#flavour-matcha-latte",
  },
  hojicha: {
    key: "hojicha",
    name: "Hojicha Latte",
    note: "Roasted, mellow and gently nutty — comfort made portable.",
    tag: "Roasted",
    drinkImage: "/jimo/drink-hojicha-latte-card-v2.webp",
    packImage: "/jimo/pouches-v2/jimo-pouch-hojicha-latte-card-v3.webp",
    target: "#flavour-hojicha-latte",
  },
  mango: {
    key: "mango",
    name: "Matcha Mango",
    note: "Tropical, layered and bright — green energy with a golden side.",
    tag: "Signature",
    drinkImage: "/jimo/drink-matcha-mango-card-v2.webp",
    packImage: "/jimo/pouches-v2/jimo-pouch-matcha-mango-card-v3.webp",
    target: "#flavour-matcha-mango",
  },
  yuzu: {
    key: "yuzu",
    name: "Yuzu Matcha",
    note: "Clean, citrusy and refreshing — a crisp reset for busy days.",
    tag: "Citrus",
    drinkImage: "/jimo/drink-yuzu-matcha-card-v2.webp",
    packImage: "/jimo/pouches-v2/jimo-pouch-yuzu-matcha-card-v3.webp",
    target: "#flavour-yuzu-matcha",
  },
};

const questions: Array<{
  eyebrow: string;
  title: string;
  options: FinderOption[];
}> = [
  {
    eyebrow: "Start with the craving",
    title: "What sounds good right now?",
    options: [
      {
        label: "Creamy & green",
        detail: "Smooth and classic",
        scores: { matcha: 3, mango: 1 },
      },
      {
        label: "Warm & roasted",
        detail: "Mellow and nutty",
        scores: { hojicha: 3, matcha: 1 },
      },
      {
        label: "Bright & tropical",
        detail: "Fresh fruit energy",
        scores: { mango: 3, yuzu: 1 },
      },
      {
        label: "Clean & citrus",
        detail: "Crisp and refreshing",
        scores: { yuzu: 3, mango: 1 },
      },
    ],
  },
  {
    eyebrow: "Now pick the moment",
    title: "Where is your day taking you?",
    options: [
      {
        label: "A slow morning",
        detail: "Easy first sip",
        scores: { hojicha: 2, matcha: 1 },
      },
      {
        label: "Focus mode",
        detail: "Ready to get moving",
        scores: { matcha: 2, yuzu: 1 },
      },
      {
        label: "After the workout",
        detail: "Something loud and bright",
        scores: { mango: 2, yuzu: 1 },
      },
      {
        label: "A clean reset",
        detail: "Fresh start energy",
        scores: { yuzu: 2, hojicha: 1 },
      },
    ],
  },
];

const emptyScores: Record<FlavorKey, number> = {
  matcha: 0,
  hojicha: 0,
  mango: 0,
  yuzu: 0,
};

export function FlavorFinder() {
  const [step, setStep] = useState(0);
  const [scores, setScores] =
    useState<Record<FlavorKey, number>>(emptyScores);
  const [result, setResult] = useState<FlavorKey | null>(null);

  const question = questions[step];
  const selectedFlavor = result ? flavors[result] : null;

  function chooseOption(option: FinderOption) {
    const nextScores = { ...scores };

    for (const key of Object.keys(option.scores) as FlavorKey[]) {
      nextScores[key] += option.scores[key] ?? 0;
    }

    if (step < questions.length - 1) {
      setScores(nextScores);
      setStep((currentStep) => currentStep + 1);
      return;
    }

    const bestMatch = (Object.keys(nextScores) as FlavorKey[]).reduce(
      (best, key) => (nextScores[key] > nextScores[best] ? key : best),
      "matcha",
    );

    setScores(nextScores);
    setResult(bestMatch);
  }

  function restart() {
    setScores(emptyScores);
    setResult(null);
    setStep(0);
  }

  return (
    <section className="flavor-finder" id="finder">
      <div className="finder-intro">
        <p className="kicker light">Find your Jimo</p>
        <h2>
          Your mood.
          <br />
          <em>Your green.</em>
        </h2>
        <p>
          Two quick picks. One Jimo match made for wherever your day is going.
        </p>
        <div className="finder-count" aria-hidden="true">
          <span>01</span>
          <i />
          <span>02</span>
          <i />
          <span>Gooo</span>
        </div>
      </div>

      <div className="finder-panel" aria-live="polite">
        {selectedFlavor ? (
          <div className={`finder-result finder-result-${selectedFlavor.key}`}>
            <div className="finder-result-visual">
              <Image
                src={selectedFlavor.drinkImage}
                alt=""
                fill
                sizes="(max-width: 680px) 42vw, 19vw"
                className="finder-result-drink"
                unoptimized
              />
              <Image
                src={selectedFlavor.packImage}
                alt={`${selectedFlavor.name} Jimo portable pouch`}
                width={1190}
                height={1322}
                sizes="(max-width: 680px) 42vw, 19vw"
                className="finder-result-pack"
                unoptimized
              />
            </div>
            <div className="finder-result-copy">
              <p>
                Your Jimo is <span>{selectedFlavor.tag}</span>
              </p>
              <h3>{selectedFlavor.name}</h3>
              <p>{selectedFlavor.note}</p>
              <div className="finder-result-actions">
                <a href={selectedFlavor.target}>
                  Meet your match <span aria-hidden="true">↓</span>
                </a>
                <button type="button" onClick={restart}>
                  Try again
                </button>
              </div>
            </div>
          </div>
        ) : (
          <fieldset className="finder-question">
            <legend className="sr-only">{question.title}</legend>
            <div className="finder-progress">
              <span>
                0{step + 1} / 0{questions.length}
              </span>
              <div aria-hidden="true">
                <i style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
              </div>
            </div>
            <p>{question.eyebrow}</p>
            <h3>{question.title}</h3>
            <div className="finder-options">
              {question.options.map((option, index) => (
                <button
                  type="button"
                  onClick={() => chooseOption(option)}
                  key={option.label}
                >
                  <span>0{index + 1}</span>
                  <strong>{option.label}</strong>
                  <small>{option.detail}</small>
                  <i aria-hidden="true">→</i>
                </button>
              ))}
            </div>
          </fieldset>
        )}
      </div>
    </section>
  );
}
