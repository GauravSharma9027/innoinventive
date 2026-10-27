import { useState } from "react"

/*
 * INNOINVENTIVE — reference-matched journey timeline
 * ------------------------------------------------------------------
 * Replace the sample years, copy, and image URLs below with your real
 * milestones before publishing. The UI intentionally shows at most 3.
 * Keep this file and JourneyTimelineCreative.jsx in the same folder.
 */
export const JOURNEY_MILESTONES = [
  {
    year: "2024",
    eyebrow: "THE BEGINNING",
    headline: "Start with what matters.",
    description: "A clear idea took shape: make technology feel simpler, more useful, and closer to the way real businesses work.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A team collaborating around a table",
  },
  {
    year: "2025",
    eyebrow: "BUILDING WITH PURPOSE",
    headline: "Build better, together.",
    description: "We bring design and development closer together—turning complex requirements into thoughtful digital experiences and dependable workflows.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Colleagues working together on a project",
  },
  {
    year: "2026",
    eyebrow: "THE NEXT CHAPTER",
    headline: "Make the next move smarter.",
    description: "We keep exploring smarter ways to build digital products, connect systems, and help teams spend less time on repetitive work.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A technology team collaborating at laptops",
  },
]

const JOURNEY_STYLES = String.raw`
.ii-journey,
.ii-journey *,
.ii-journey *::before,
.ii-journey *::after { box-sizing: border-box; }

.ii-journey {
  --ij-bg: #061633;
  --ij-blue: #1769ff;
  --ij-blue-bright: #2678ff;
  --ij-text: #f5f8ff;
  --ij-muted: #9eacc7;
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 95vh;
  height: 95svh;
  max-height: 95vh;
  max-height: 95svh;
  min-height: 0;
  overflow: hidden;
  color: var(--ij-text);
  background: var(--ij-bg);
  font-family: inherit;
}

.ii-journey__ambient {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 25% 34%, rgba(23, 105, 255, .18), transparent 38%),
    radial-gradient(ellipse at 81% 61%, rgba(13, 78, 178, .13), transparent 33%),
    linear-gradient(116deg, #061633 0%, #04102a 58%, #061633 100%);
}

.ii-journey__ambient::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .13;
  background-image: radial-gradient(rgba(151, 183, 255, .55) .65px, transparent .65px);
  background-size: 24px 24px;
  mask-image: linear-gradient(90deg, #000, transparent 80%);
}

.ii-journey__glow {
  position: absolute;
  width: min(34vw, 430px);
  aspect-ratio: 1;
  left: 8%;
  top: 12%;
  z-index: -1;
  border-radius: 50%;
  background: rgba(18, 92, 234, .13);
  filter: blur(70px);
  pointer-events: none;
}

.ii-journey__stage {
  position: absolute;
  inset: 0;
}

.ii-journey__visual {
  position: absolute;
  inset: 0;
  animation: ij-stage-in .75s cubic-bezier(.2,.72,.25,1) both;
}

.ii-journey__image-frame {
  position: absolute;
  left: 4.3%;
  top: 13%;
  width: clamp(235px, 20.5vw, 395px);
  aspect-ratio: 1.78 / 1;
  overflow: hidden;
  border: 1px solid rgba(195, 215, 255, .38);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255,255,255,.12), rgba(13,45,94,.35));
  box-shadow: 0 26px 60px rgba(0,0,0,.38), 0 0 36px rgba(23,105,255,.1);
  transform: rotate(-7deg);
  transition: transform .55s cubic-bezier(.2,.75,.2,1), box-shadow .55s ease;
}

.ii-journey__image-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(140deg, rgba(6,22,51,.04), rgba(6,22,51,.16) 58%, rgba(23,105,255,.12));
}

.ii-journey__image-frame:hover {
  transform: rotate(-3deg) translateY(-4px);
  box-shadow: 0 32px 68px rgba(0,0,0,.43), 0 0 42px rgba(23,105,255,.17);
}

.ii-journey__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(.86) contrast(1.04);
  animation: ij-image-in .9s cubic-bezier(.2,.7,.2,1) both;
}

.ii-journey__year {
  position: absolute;
  top: 6.3%;
  left: clamp(118px, 10.9vw, 210px);
  z-index: 2;
  margin: 0;
  color: var(--ij-blue-bright);
  font-size: clamp(5.5rem, 12vh, 9.4rem);
  font-weight: 750;
  line-height: .92;
  letter-spacing: -.085em;
  white-space: nowrap;
  text-shadow: 0 7px 28px rgba(0,0,0,.22), 0 0 36px rgba(23,105,255,.12);
  animation: ij-year-in .7s cubic-bezier(.18,.75,.2,1) both;
}

.ii-journey__story {
  position: absolute;
  top: 49%;
  left: 33.8%;
  width: min(28vw, 430px);
  max-width: 430px;
  transform: translateY(-7%);
  animation: ij-copy-in .72s .05s ease both;
}

.ii-journey__eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 13px;
  color: #85adff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  line-height: 1.3;
  text-transform: uppercase;
}

.ii-journey__eyebrow::before {
  content: "";
  display: block;
  width: 19px;
  height: 1px;
  flex: 0 0 19px;
  background: var(--ij-blue-bright);
  box-shadow: 0 0 10px rgba(38,120,255,.7);
}

.ii-journey__description {
  max-width: 38ch;
  margin: 0;
  color: rgba(244,247,255,.9);
  font-size: clamp(13px, .84vw, 15px);
  font-weight: 400;
  line-height: 1.78;
  letter-spacing: .002em;
  text-wrap: pretty;
}

.ii-journey__timeline {
  position: absolute;
  left: 4.3%;
  right: 4.3%;
  bottom: clamp(30px, 5.3vh, 48px);
  height: 40px;
}

.ii-journey__track,
.ii-journey__progress {
  position: absolute;
  top: 4px;
  left: 0;
  height: 1px;
  border-radius: 99px;
  pointer-events: none;
}

.ii-journey__track {
  right: 0;
  background: rgba(164, 190, 239, .24);
}

.ii-journey__progress {
  width: var(--ij-progress, 0%);
  background: linear-gradient(90deg, #1769ff, #49a3ff);
  box-shadow: 0 0 12px rgba(23,105,255,.8);
  transition: width .6s cubic-bezier(.2,.7,.2,1);
}

.ii-journey__nodes {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ii-journey__node {
  position: absolute;
  top: 0;
  width: 0;
  height: 100%;
}

.ii-journey__node-button {
  position: absolute;
  top: -1px;
  left: 0;
  display: block;
  width: 40px;
  height: 38px;
  margin: 0;
  transform: translateX(-50%);
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.ii-journey__dot {
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid rgba(129, 165, 235, .58);
  border-radius: 50%;
  background: #061633;
  box-shadow: 0 0 0 3px rgba(6,22,51,.8);
  transform: translateX(-50%);
  transition: border-color .25s ease, background .25s ease, box-shadow .25s ease, scale .25s ease;
}

.ii-journey__year-label {
  position: absolute;
  top: 19px;
  left: 0;
  color: rgba(182, 197, 225, .66);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .01em;
  line-height: 1;
  transform: translateX(-50%);
  transition: color .25s ease;
}

.ii-journey__node-button[data-edge="start"] { transform: none; }
.ii-journey__node-button[data-edge="start"] .ii-journey__dot { left: 0; transform: none; }
.ii-journey__node-button[data-edge="start"] .ii-journey__year-label { left: 0; transform: none; }
.ii-journey__node-button[data-edge="end"] { transform: translateX(-100%); }
.ii-journey__node-button[data-edge="end"] .ii-journey__dot { left: 40px; transform: translateX(-100%); }
.ii-journey__node-button[data-edge="end"] .ii-journey__year-label { left: 40px; transform: translateX(-100%); }

.ii-journey__node-button[aria-pressed="true"] .ii-journey__dot {
  border-color: #4ca0ff;
  background: var(--ij-blue-bright);
  box-shadow: 0 0 0 4px rgba(23,105,255,.12), 0 0 15px rgba(23,105,255,.75);
}

.ii-journey__node-button[aria-pressed="true"] .ii-journey__year-label {
  color: #f5f8ff;
}

.ii-journey__node-button:hover .ii-journey__dot,
.ii-journey__node-button:focus-visible .ii-journey__dot {
  border-color: #69aaff;
  box-shadow: 0 0 0 4px rgba(23,105,255,.17), 0 0 16px rgba(23,105,255,.62);
}

.ii-journey__node-button:focus-visible { outline: none; }
.ii-journey__node-button:focus-visible .ii-journey__year-label { color: white; }

@keyframes ij-stage-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes ij-image-in {
  from { opacity: 0; transform: scale(1.06); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes ij-year-in {
  from { opacity: 0; transform: translate3d(0, 14px, 0); filter: blur(5px); }
  to { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
}
@keyframes ij-copy-in {
  from { opacity: 0; transform: translate3d(15px, -7%, 0); }
  to { opacity: 1; transform: translate3d(0, -7%, 0); }
}

@media (min-width: 1500px) {
  .ii-journey__story { left: 33.8%; }
}

@media (max-width: 900px) and (min-width: 681px) {
  .ii-journey__image-frame { width: clamp(220px, 26vw, 310px); left: 3.5%; }
  .ii-journey__year { left: clamp(112px, 11vw, 150px); font-size: clamp(5.2rem, 11.5vh, 7.2rem); }
  .ii-journey__story { left: 39%; width: 38vw; }
  .ii-journey__description { font-size: 13px; line-height: 1.65; }
}

@media (max-width: 680px) {
  .ii-journey__ambient {
    background:
      radial-gradient(ellipse at 35% 22%, rgba(23,105,255,.2), transparent 40%),
      linear-gradient(155deg, #061633 0%, #04102a 72%, #061633 100%);
  }
  .ii-journey__glow { width: 68vw; left: 2%; top: 4%; filter: blur(54px); }
  .ii-journey__stage { inset: 0 22px 104px; }
  .ii-journey__image-frame { left: 2%; top: 8%; width: min(66vw, 320px); border-radius: 10px; }
  .ii-journey__year { left: 31%; top: 7%; font-size: clamp(4.9rem, 20vw, 7.5rem); }
  .ii-journey__story { top: 48%; left: 0; width: 100%; max-width: 500px; transform: none; }
  .ii-journey__eyebrow { margin-bottom: 11px; font-size: 9px; }
  .ii-journey__description { max-width: 46ch; font-size: 13px; line-height: 1.65; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5; overflow: hidden; }
  .ii-journey__timeline { left: 24px; right: 24px; bottom: 24px; height: 39px; }
  .ii-journey__year-label { font-size: 10px; }
  .ii-journey__dot { width: 9px; height: 9px; }
}

@media (max-width: 380px) {
  .ii-journey__stage { inset-inline: 18px; }
  .ii-journey__image-frame { width: 65vw; }
  .ii-journey__year { left: 29%; font-size: 4.8rem; }
  .ii-journey__description { -webkit-line-clamp: 4; }
  .ii-journey__timeline { left: 19px; right: 19px; }
}

@media (max-height: 620px) and (min-width: 681px) {
  .ii-journey__image-frame { top: 10%; width: clamp(220px, 19vw, 320px); }
  .ii-journey__year { top: 5%; font-size: clamp(5rem, 12vh, 7rem); }
  .ii-journey__story { top: 48%; }
  .ii-journey__description { font-size: 12px; line-height: 1.55; }
  .ii-journey__timeline { bottom: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .ii-journey *, .ii-journey *::before, .ii-journey *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export default function JourneyTimeline({ milestones = JOURNEY_MILESTONES }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const configuredItems = Array.isArray(milestones) ? milestones.filter(Boolean).slice(0, 3) : []
  const items = configuredItems.length ? configuredItems : JOURNEY_MILESTONES
  const currentIndex = Math.min(activeIndex, items.length - 1)
  const active = items[currentIndex]
  const progress = items.length > 1 ? (currentIndex / (items.length - 1)) * 100 : 0

  return (
    <section className="ii-journey" aria-label="Our journey and story" style={{ "--ij-progress": `${progress}%` }}>
      <style>{JOURNEY_STYLES}</style>
      <div className="ii-journey__ambient" aria-hidden="true" />
      <div className="ii-journey__glow" aria-hidden="true" />

      <div className="ii-journey__stage">
        <div className="ii-journey__visual" key={`visual-${active.year}-${currentIndex}`}>
          <div className="ii-journey__image-frame">
            <img className="ii-journey__image" src={active.image} alt={active.imageAlt || "A moment from our journey"} loading="eager" decoding="async" />
          </div>
          <div className="ii-journey__year" aria-live="polite">
            {active.year}
          </div>
        </div>

        <article className="ii-journey__story" key={`story-${active.year}-${currentIndex}`}>
          <p className="ii-journey__eyebrow">{active.eyebrow || "OUR JOURNEY"}</p>
          <p className="ii-journey__description">{active.description}</p>
        </article>
      </div>

      <nav className="ii-journey__timeline" aria-label="Choose a journey milestone">
        <div className="ii-journey__track" aria-hidden="true" />
        <div className="ii-journey__progress" aria-hidden="true" />
        <div className="ii-journey__nodes">
          {items.map((item, index) => {
            const edge = index === 0 ? "start" : index === items.length - 1 ? "end" : "middle"
            const position = items.length === 1 ? 0 : (index / (items.length - 1)) * 100
            return (
              <button
                className="ii-journey__node-button"
                key={`${item.year}-${index}`}
                type="button"
                style={{ left: `${position}%` }}
                data-edge={edge}
                aria-label={`Show ${item.year}: ${item.eyebrow || "journey milestone"}`}
                aria-pressed={index === currentIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span className="ii-journey__dot" aria-hidden="true" />
                <span className="ii-journey__year-label">{item.year}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </section>
  )
}
