import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-deck size-${size}`}>
      <div className={`deck-slides size-${size}`}>
        {slides.map((card) => (
          <article
            key={card.n}
            className={`deck-tile${card.voice ? ` voice-${card.voice}` : ""}`}
          >
            <div className="deck-tile-bar">
              {card.kicker ? (
                <span className="deck-kicker">{card.kicker}</span>
              ) : null}
              <span className="deck-n">{String(card.n).padStart(2, "0")}</span>
            </div>
            <h3 className="deck-tile-title">{card.title}</h3>
            <p className={card.voice === "them" ? "deck-quote" : "deck-map"}>
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
