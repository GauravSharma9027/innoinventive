import { useEffect, useMemo, useState } from "react"
import { ArrowUpRight, Flag, Layers, Pause, Play, Sparkles } from "lucide-react"

/* --------------------------------------------------------------------------
 * INNOINVENTIVE — ABOUT OUR JOURNEY
 * Single-file component: data, badge, animations and UI.
 * Edit the sample milestones below. Maximum 3 milestones are displayed.
 * Layout, spacing, sizing, borders and responsiveness use Tailwind CSS.
 * -------------------------------------------------------------------------- */

const AUTO_SWITCH_MS = 6500

const JOURNEY_MILESTONES = [
  {
    year: "2024",
    eyebrow: "THE BEGINNING",
    headline: "A simple idea. A meaningful direction.",
    description:
      "Our journey began with a clear belief: technology should make work simpler, not more complicated. We set out to create digital experiences that solve real problems for real businesses.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=88",
    imageAlt: "A team exchanging ideas around a table",
    icon: Flag,
    badge: "Where it began",
  },
  {
    year: "2025",
    eyebrow: "BUILDING WITH PURPOSE",
    headline: "Turning ideas into useful experiences.",
    description:
      "We brought thoughtful design and dependable development closer together—building digital platforms and practical workflows around the needs of the people who use them every day.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=88",
    imageAlt: "Team members collaborating on a project",
    icon: Layers,
    badge: "Growing together",
  },
  {
    year: "2026",
    eyebrow: "THE NEXT CHAPTER",
    headline: "Making the next move smarter.",
    description:
      "Today, we keep exploring better ways to build digital products, connect systems, and automate repetitive work—so teams can focus more of their energy on what matters most.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=88",
    imageAlt: "A technology team working together at their desks",
    icon: Sparkles,
    badge: "What comes next",
  },
]

/* Your PremiumIconBadge integrated into this file. */

const PremiumIconBadge = ({ icon: Icon, size = "default" }) => {
  const SizeClasses = {
    default: "h-10 w-10",
    large: "h-12 w-12",
  }

  const IconSizes = {
    default: 17,
    large: 20,
  }

  return (
    <div className={`relative ${SizeClasses[size] || SizeClasses.default} [perspective:700px]`} aria-hidden="true">
      <span className="absolute inset-0 translate-y-1 rounded-xl bg-[#020B20] shadow-[0_7px_16px_rgba(0,0,0,0.45)]" />

      <span className="absolute -inset-2 rounded-[18px] bg-cyan-400/10 blur-xl" />

      <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-cyan-300/25 bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#061633] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-2px_0_rgba(0,0,0,0.25),0_8px_25px_rgba(22,119,255,0.18)] transition-all duration-500 hover:-translate-y-1 hover:rotate-[4deg] hover:border-cyan-200/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_30px_rgba(25,211,255,0.18)]">
        <span className="pointer-events-none absolute inset-x-2 top-px h-px rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <span className="pointer-events-none absolute -left-[45%] top-[-20%] h-[160%] w-[35%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />

        <span className="pointer-events-none absolute inset-2 rounded-lg bg-cyan-300/[0.03] shadow-[inset_0_0_18px_rgba(25,211,255,0.08)]" />

        {Icon ? (
          <Icon size={IconSizes[size] || IconSizes.default} strokeWidth={1.8} className="relative z-10 drop-shadow-[0_0_8px_rgba(25,211,255,0.45)]" />
        ) : null}
      </div>

      <span className="absolute bottom-px left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 blur-[1px]" />
    </div>
  )
}

/* Advanced-only CSS: keyframes, decorative grid and svh fallback. */

const ABOUT_JOURNEY_ANIMATIONS = String.raw`
@keyframes aj-photo-in {
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes aj-image-in {
  from { opacity: 0; transform: scale(1.055); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes aj-card-in {
  from { opacity: 0; transform: translateY(13px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes aj-progress-fill {
  from { width: 0; }
  to { width: 100%; }
}

.ii-ajourney-grid::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .105;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(152,186,255,.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(152,186,255,.13) 1px, transparent 1px);
  background-size: 58px 58px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 48%, #000, transparent 80%);
  mask-image: radial-gradient(ellipse at 50% 48%, #000, transparent 80%);
}

@supports not (height: 95svh) {
  .ii-ajourney-section {
    height: 100vh;
    max-height: 100vh;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ii-ajourney-section *,
  .ii-ajourney-section *::before,
  .ii-ajourney-section *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export default function AboutOurJourney({ milestones = JOURNEY_MILESTONES }) {
  const journeyItems = useMemo(() => {
    const items = (Array.isArray(milestones) ? milestones : JOURNEY_MILESTONES).filter((item) => item && item.year && item.image).slice(0, 3)

    return items.length ? items : JOURNEY_MILESTONES
  }, [milestones])

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const currentIndex = Math.min(activeIndex, journeyItems.length - 1)

  const active = journeyItems[currentIndex]

  const currentNumber = String(currentIndex + 1).padStart(2, "0")
  const totalNumber = String(journeyItems.length).padStart(2, "0")

  /* Automatically switch milestones every 6.5 seconds. */

  useEffect(() => {
    if (!isPlaying || journeyItems.length < 2) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((previousIndex) => (previousIndex + 1) % journeyItems.length)
    }, AUTO_SWITCH_MS)

    return () => window.clearInterval(timer)
  }, [activeIndex, isPlaying, journeyItems.length])

  /* Preload images to make transitions smoother. */

  useEffect(() => {
    journeyItems.forEach((item) => {
      if (item.image && typeof window !== "undefined") {
        const image = new window.Image()
        image.src = item.image
      }
    })
  }, [journeyItems])

  const handleMilestoneClick = (index) => {
    setActiveIndex(index)
    setIsPlaying(true)
  }

  return (
    <section
      className="ii-ajourney-section relative isolate flex h-[100svh] max-h-[100svh] w-full flex-col overflow-hidden bg-[#061633] px-8 py-12 text-[#F5F8FF]"
      aria-label="About our journey and story"
    >
      <style>{ABOUT_JOURNEY_ANIMATIONS}</style>

      {/* Background decoration */}

      <div
        className="ii-ajourney-grid pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_14%_39%,rgba(20,95,230,0.24),transparent_42%),radial-gradient(ellipse_at_90%_82%,rgba(32,107,255,0.16),transparent_34%),linear-gradient(125deg,#061633_0%,#04102a_57%,#061633_100%)]"
        aria-hidden="true"
      />

      {/* Shared container aligns the header, cards and timeline. */}

      <div className=" flex h-full min-h-0 w-full flex-col">
        {/* Header */}

        <header className="flex shrink-0 items-end justify-between gap-5 max-sm:items-start max-sm:gap-3">
          <div className="min-w-0">
            <p className="mb-2.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.21em] text-[#8BB3FF] max-sm:mb-2 max-sm:text-[8px] max-sm:tracking-[0.16em]">
              <span className="h-px w-5 shrink-0 bg-[#3382FF] shadow-[0_0_12px_rgba(51,130,255,0.7)]" />
              Our journey, our story
            </p>

            <h2 className="max-w-[650px] text-[clamp(25px,3vw,42px)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#F5F8FF] max-sm:max-w-[250px] max-sm:text-[clamp(24px,7vw,33px)] max-[390px]:max-w-[190px] max-[390px]:text-2xl">
              Progress, with purpose.
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-3 pb-0.5 max-sm:gap-2 max-sm:pt-0.5">
            <button
              className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border border-[rgba(161,194,255,0.21)] bg-[rgba(11,31,65,0.6)] px-3 text-[10px] font-semibold tracking-[0.04em] text-[#CFDDF9] transition duration-200 hover:border-[rgba(99,160,255,0.65)] hover:bg-[rgba(30,88,174,0.35)] hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 max-sm:size-8 max-sm:min-h-8 max-sm:px-0"
              type="button"
              aria-label={isPlaying ? "Pause automatic timeline" : "Play automatic timeline"}
              aria-pressed={isPlaying}
              title={isPlaying ? "Pause automatic timeline" : "Play automatic timeline"}
              onClick={() => setIsPlaying((playing) => !playing)}
            >
              {isPlaying ? <Pause size={13} strokeWidth={2} /> : <Play size={13} strokeWidth={2} />}

              <span className="max-sm:hidden">{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <div className="flex items-baseline gap-1.5 whitespace-nowrap tabular-nums text-[11px] text-[rgba(193,208,237,0.66)] max-sm:gap-1 max-sm:text-[9px]">
              <strong className="text-[19px] font-semibold text-white max-sm:text-[15px]">{currentNumber}</strong>
              <span>/ {totalNumber}</span>
            </div>
          </div>
        </header>

        {/* Image + story cards */}

        <main
          className="mt-7 px-2 grid min-h-0 flex-1 grid-cols-2 items-stretch gap-8 lg:gap-10 md:mt-6 md:gap-5 max-sm:mt-5 max-sm:flex max-sm:flex-col max-sm:gap-3"
          key={`${active.year}-${currentIndex}`}
        >
          {/* Image card */}

          <div className="relative min-h-0 min-w-0 animate-[aj-photo-in_.8s_ease-out_both] max-sm:flex-[0_0_38%]">
            <div className="absolute inset-[10%_12%_4%_4%] rounded-[32px] bg-[rgba(23,105,255,0.23)] blur-[47px] max-sm:blur-[30px]" aria-hidden="true" />

            <div className="absolute inset-0 mr-[5%] overflow-hidden rounded-[25px] border border-[rgba(197,218,255,0.32)] bg-gradient-to-br from-[#112F61] to-[#071733] shadow-[0_34px_90px_rgba(0,0,0,0.4),inset_0_1px_rgba(255,255,255,0.18)] [transform:perspective(1200px)_rotateY(5deg)_rotateX(1deg)] [transform-origin:60%_50%] transition-all duration-700 hover:border-[rgba(119,183,255,0.56)] hover:[transform:perspective(1200px)_rotateY(1deg)_rotateX(0deg)_translateY(-3px)] max-sm:inset-0 max-sm:rounded-[18px] max-sm:[transform:none] max-sm:hover:[transform:none]">
              <img
                className="h-full w-full animate-[aj-image-in_.95s_ease-out_both] object-cover saturate-[0.84] contrast-[1.06]"
                src={active.image}
                alt={active.imageAlt || `A moment from our ${active.year} journey`}
                loading="eager"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0"
                }}
              />

              {/* Image overlay */}

              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,38,0.03)_18%,rgba(4,15,38,0.25)_53%,rgba(4,15,38,0.9)_100%),linear-gradient(125deg,rgba(23,105,255,0.2),transparent_46%)] shadow-[inset_0_1px_rgba(255,255,255,0.15),inset_0_0_55px_rgba(8,39,89,0.12)]"
                aria-hidden="true"
              />

              <div className="absolute inset-x-[clamp(19px,3vw,48px)] bottom-[clamp(18px,3vw,42px)] z-10 flex items-end justify-between gap-4 max-sm:inset-x-[18px] max-sm:bottom-[15px]">
                <p className="mb-0 max-w-[230px] text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.17em] text-[rgba(255,255,255,0.78)] max-sm:max-w-[160px] max-sm:text-[8px]">
                  {active.eyebrow || "A milestone in our journey"}
                </p>

                <span className="text-[clamp(41px,5.5vw,78px)] font-extrabold leading-[0.9] tracking-[-0.085em] text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.25)] max-sm:text-[clamp(38px,11vw,49px)]">
                  {active.year}
                </span>
              </div>
            </div>
          </div>

          {/* Story card */}

          <article className="relative flex min-h-0 min-w-0 animate-[aj-card-in_.7s_ease-out_both] flex-col justify-center overflow-hidden rounded-[25px] border border-[rgba(175,202,255,0.2)] bg-[linear-gradient(145deg,rgba(15,39,78,0.77),rgba(8,25,55,0.63))] px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.23),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-[18px] sm:py-7 lg:py-8 max-sm:flex-1 max-sm:justify-start max-sm:rounded-[18px] max-sm:px-5 max-sm:py-[17px] max-[390px]:px-[15px] max-[390px]:py-3.5">
            <div
              className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-bl-full bg-[radial-gradient(circle_at_top_right,rgba(23,105,255,0.23),transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative mb-[clamp(15px,2.4vh,28px)] flex items-center gap-3 max-sm:mb-[9px] max-sm:gap-2">
              <PremiumIconBadge icon={active.icon || Sparkles} size="default" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8FB5FF] max-sm:text-[8px]">Milestone {currentNumber}</span>
            </div>

            <h3 className="relative mb-[clamp(14px,2vh,24px)]  text-[clamp(29px,3vw,56px)] font-semibold leading-none tracking-[-0.065em] text-[#F7F9FF] [text-wrap:balance] max-md:text-[clamp(27px,3.5vw,39px)] max-sm:mb-[9px] max-sm:max-w-[18ch] max-sm:text-[clamp(23px,6.4vw,31px)] max-sm:leading-[1.02] max-[390px]:text-[22px]">
              {active.headline || active.eyebrow || "A step forward."}
            </h3>

            <p className="relative m-0  text-[clamp(13px,0.94vw,15px)] leading-[1.8] text-[rgba(231,238,252,0.81)] [text-wrap:pretty] max-md:text-xs max-md:leading-[1.65] max-sm:line-clamp-3 max-sm:text-[11px] max-sm:leading-[1.5] max-[390px]:text-[10.5px]">
              {active.description}
            </p>

            <div className="relative mt-[clamp(22px,3.5vh,36px)] flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.105em] text-[#B6CEFF] before:h-px before:w-[27px] before:shrink-0 before:bg-[#2678FF] before:shadow-[0_0_12px_rgba(23,105,255,0.85)] max-sm:mt-2.5 max-sm:gap-2 max-sm:text-[8px] max-sm:tracking-[0.07em] max-sm:before:w-[17px]">
              <span>{active.badge || "Always building what comes next"}</span>

              <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
            </div>
          </article>
        </main>

        {/* Compact clickable timeline */}

        <nav
          className="mx-auto mt-8 grid w-full max-w-[920px] shrink-0 grid-cols-[repeat(var(--aj-count),minmax(0,1fr))] gap-2.5 max-sm:mt-3 max-sm:gap-[7px]"
          style={{ "--aj-count": journeyItems.length }}
          aria-label="Choose a journey milestone"
        >
          {journeyItems.map((item, index) => {
            const isActive = index === currentIndex
            const MilestoneIcon = item.icon || Sparkles

            return (
              <button
                className={`relative flex min-h-[58px] min-w-0 items-center gap-3 overflow-hidden rounded-[13px] border px-[13px] py-2.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(74,139,255,0.58)] hover:text-[#F6F8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 max-md:gap-2 max-md:px-2.5 max-sm:min-h-[57px] max-sm:justify-center max-sm:gap-[7px] max-sm:rounded-[11px] max-sm:px-1.5 max-sm:py-2 max-[390px]:min-h-[53px] max-[390px]:gap-[5px] max-[390px]:px-1 ${
                  isActive
                    ? "border-[rgba(66,133,255,0.69)] bg-[linear-gradient(115deg,rgba(23,105,255,0.23),rgba(12,43,89,0.76))] text-white shadow-[0_8px_28px_rgba(0,0,0,0.17),inset_0_1px_rgba(255,255,255,0.08),0_0_25px_rgba(29,105,255,0.07)] -translate-y-[3px]"
                    : "border-[rgba(157,186,241,0.15)] bg-[linear-gradient(135deg,rgba(9,26,56,0.58),rgba(9,26,56,0.38))] text-[rgba(209,221,246,0.68)]"
                }`}
                key={`${item.year}-${index}`}
                type="button"
                aria-label={`Show ${item.year}: ${item.eyebrow || "journey milestone"}`}
                aria-pressed={isActive}
                onClick={() => handleMilestoneClick(index)}
              >
                <span
                  className={`shrink-0 transition-transform duration-300 ${isActive ? "scale-100 max-sm:scale-[0.85]" : "scale-[0.92] max-sm:scale-[0.78]"}`}
                >
                  <PremiumIconBadge icon={MilestoneIcon} size="default" />
                </span>

                <span className="flex min-w-0 flex-col gap-[5px] max-sm:gap-[3px]">
                  <span className="text-[clamp(14px,1.05vw,16px)] font-bold tabular-nums max-sm:text-xs">{item.year}</span>

                  <span
                    className={`overflow-hidden text-ellipsis whitespace-nowrap text-[9px] font-semibold uppercase leading-[1.4] tracking-[0.09em] max-md:text-[8px] max-sm:hidden ${
                      isActive ? "text-[rgba(231,239,255,0.79)]" : "text-[rgba(190,207,240,0.61)]"
                    }`}
                  >
                    {item.eyebrow || "Milestone"}
                  </span>
                </span>

                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[rgba(142,177,237,0.1)]" aria-hidden="true">
                    <span
                      key={`${item.year}-${index}-${currentIndex}`}
                      className="block h-full w-0 animate-[aj-progress-fill_6500ms_linear_both] bg-gradient-to-r from-[#2678FF] to-[#68DFF6] shadow-[0_0_12px_rgba(63,150,255,0.7)] motion-reduce:animate-none"
                      style={{
                        animationDuration: `${AUTO_SWITCH_MS}ms`,
                        animationPlayState: isPlaying ? "running" : "paused",
                      }}
                    />
                  </span>
                ) : null}
              </button>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
