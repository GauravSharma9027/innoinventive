import { useEffect, useState } from "react"
import PremiumIconBadge from "../../components/UI/PremiumIconBadge"

import { ArrowUp, ArrowRight, ArrowUpRight, ChevronDown, FileText, LockKeyhole, ShieldCheck } from "lucide-react"

const LastUpdated = "23 October 2026"

const PolicySections = [
  { id: "introduction", number: "01", title: "Introduction" },
  { id: "scope", number: "02", title: "When This Policy Applies" },
  { id: "information", number: "03", title: "Information We May Collect" },
  { id: "use", number: "04", title: "How We Use Information" },
  { id: "handling", number: "05", title: "How We Handle Personal Information" },
  { id: "sharing", number: "06", title: "When Information May Be Shared" },
  { id: "projects", number: "07", title: "Information Handled During Client Projects" },
  { id: "retention", number: "08", title: "How Long Information Is Kept" },
  { id: "security", number: "09", title: "Keeping Information Secure" },
  { id: "requests", number: "10", title: "Your Privacy Requests" },
  { id: "third-party", number: "11", title: "Links to Other Websites" },
  { id: "children", number: "12", title: "Children’s Privacy" },
  { id: "changes", number: "13", title: "Changes to This Policy" },
  { id: "contact", number: "14", title: "Contact Us" },
]

const PolicySection = ({ id, number, title, children, last = false }) => {
  // PremiumIconBadge is icon-based, so this small custom icon renders the
  // existing section number inside the shared badge without changing it.
  const NumberMark = ({ className = "" }) => (
    <span className={`${className} font-mono text-[10px] font-semibold tracking-[0.04em] text-cyan-100`}>{number}</span>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      data-policy-section="true"
      className={`policy-section relative scroll-mt-28 py-7 sm:py-9 ${last ? "" : "border-b border-blue-100/[0.08]"}`}
    >
      <div className="mb-4 flex items-start gap-3 sm:gap-4">
        <div className="relative mt-0.5 shrink-0">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-2xl bg-cyan-400/[0.12] blur-lg" />
          <PremiumIconBadge icon={NumberMark} size="default" />
        </div>
        <h2
          id={`${id}-heading`}
          className="min-w-0 pt-1 text-[19px] font-semibold leading-snug tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(25,211,255,0.08)] sm:text-[21px] lg:text-[23px]"
        >
          {title}
        </h2>
      </div>
      <div className="policy-copy min-w-0 pl-0 sm:pl-[56px]">{children}</div>
    </section>
  )
}

const TableOfContents = ({ mobile = false, activeId, onNavigate }) => (
  <nav aria-label="Privacy Policy sections" className={mobile ? "space-y-1" : "space-y-1.5"}>
    {PolicySections.map((section) => {
      const isActive = activeId === section.id

      return (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={isActive ? "location" : undefined}
          onClick={(event) => {
            event.preventDefault()
            onNavigate?.(section.id)
          }}
          className={[
            "group relative flex items-center gap-2.5 overflow-hidden rounded-xl border transition-all duration-300",
            mobile ? "px-3 py-2.5 text-[13px]" : "px-2.5 py-2.5 text-[11px] xl:px-3 xl:text-[12px]",
            isActive
              ? "border-cyan-200/25 bg-[linear-gradient(115deg,rgba(25,211,255,0.14),rgba(22,119,255,0.09)_55%,rgba(124,60,255,0.10))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_7px_18px_rgba(0,0,0,0.22),0_0_22px_rgba(25,211,255,0.07)]"
              : "border-transparent text-blue-100/55 hover:border-cyan-200/10 hover:bg-cyan-300/[0.045] hover:text-cyan-50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60",
          ].join(" ")}
        >
          {isActive && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-2 left-0 w-[2px] rounded-full bg-gradient-to-b from-cyan-200 via-blue-400 to-violet-400 shadow-[0_0_10px_rgba(25,211,255,0.7)]"
            />
          )}
          <span
            className={[
              "relative inline-flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-lg border font-mono text-[9px] font-semibold transition-all duration-300",
              isActive
                ? "border-cyan-200/25 bg-gradient-to-br from-[#164779] via-[#0B2A55] to-[#171D4D] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_10px_rgba(0,0,0,0.24),0_0_12px_rgba(25,211,255,0.12)]"
                : "border-blue-100/[0.08] bg-[#061633]/70 text-cyan-200/40 group-hover:border-cyan-200/15 group-hover:text-cyan-100/80",
            ].join(" ")}
          >
            {section.number}
          </span>
          <span className="min-w-0 flex-1 leading-snug">{section.title}</span>
          {isActive && <ArrowUpRight size={13} className="shrink-0 text-cyan-100/80" />}
        </a>
      )
    })}
  </nav>
)

const PrivacyPolicy = () => {
  const [IsMobileTocOpen, SetIsMobileTocOpen] = useState(false)
  const [ActiveSectionId, SetActiveSectionId] = useState(PolicySections[0].id)

  useEffect(() => {
    const sections = PolicySections.map(({ id }) => document.getElementById(id)).filter(Boolean)

    if (!sections.length || !("IntersectionObserver" in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aDistance = Math.abs(a.boundingClientRect.top - window.innerHeight * 0.28)
            const bDistance = Math.abs(b.boundingClientRect.top - window.innerHeight * 0.28)
            return aDistance - bDistance
          })

        if (visibleEntries[0]) {
          SetActiveSectionId(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: "-14% 0px -68% 0px",
        threshold: [0, 0.05, 0.15],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const HandleSectionNavigate = (sectionId) => {
    SetActiveSectionId(sectionId)
    SetIsMobileTocOpen(false)

    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", `#${sectionId}`)
    }
  }

  return (
    <main id="top" className="relative isolate min-h-screen overflow-x-clip bg-[#061633] text-white">
      {/* Ambient background — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[58%] top-[-170px] h-[360px] w-[min(78vw,820px)] -translate-x-1/2 rounded-full bg-blue-500/[0.11] blur-[120px]" />
        <div className="absolute right-[-160px] top-[28%] h-[320px] w-[320px] rounded-full bg-violet-500/[0.07] blur-[115px]" />
        <div className="absolute bottom-[8%] left-[-180px] h-[340px] w-[340px] rounded-full bg-cyan-400/[0.055] blur-[115px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:68px_68px]" />
      </div>

      {/* Page introduction — premium 3D hero */}
      <header className="relative mx-auto w-full max-w-[1440px] px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-10 lg:pb-14 lg:pt-14">
        <div className="mx-auto max-w-[1260px]">
          <div className="relative isolate overflow-hidden rounded-[26px] border border-cyan-200/[0.16] bg-[linear-gradient(135deg,rgba(10,35,72,0.97),rgba(5,20,46,0.98)_55%,rgba(9,20,54,0.98))] shadow-[0_15px_0_rgba(2,8,20,0.26),0_32px_85px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.10)] sm:rounded-[30px]">
            {/* Hero atmosphere */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 -top-36 h-[390px] w-[390px] rounded-full bg-cyan-400/[0.11] blur-[110px]" />
              <div className="absolute right-[12%] top-[28%] h-[260px] w-[260px] rounded-full bg-blue-500/[0.10] blur-[100px]" />
              <div className="absolute -bottom-32 left-[18%] h-[300px] w-[300px] rounded-full bg-violet-500/[0.075] blur-[100px]" />
              <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/65 to-violet-200/25 sm:inset-x-12" />
              <div className="absolute bottom-0 right-[8%] h-px w-[38%] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
            </div>

            <div className="relative z-10 grid items-center gap-5 px-5 py-7 sm:gap-7 sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(290px,0.82fr)] lg:gap-8 lg:px-11 lg:py-10 xl:px-12">
              {/* Hero copy */}
              <div className="relative z-10 min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-[#061633]/65 px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_22px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-cyan-300/40 blur-[3px]" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                  </span>
                  <ShieldCheck size={14} strokeWidth={1.8} className="text-cyan-200" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-cyan-100/85 sm:text-[11px]">Legal · Privacy & Trust</span>
                </div>

                <h1 className="mt-5 text-[clamp(2.35rem,5.8vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.067em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.25)] sm:mt-6">
                  Privacy <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-violet-400 bg-clip-text text-transparent">Policy</span>
                </h1>

                <p className="mt-4 max-w-[670px] text-[13px] leading-7 text-blue-100/70 sm:mt-5 sm:text-[14px] sm:leading-8 lg:text-[15px]">
                  We respect your privacy. Here is how information may be collected, used, protected, and shared when you visit InnoInventive or work with us.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                  <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-cyan-200/[0.15] bg-[#020B20]/45 px-3.5 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.19),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-lg sm:px-4">
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-gradient-to-br from-[#164779] via-[#0B2A55] to-[#171D4D] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_15px_rgba(0,0,0,0.24),0_0_18px_rgba(25,211,255,0.10)]">
                      <span aria-hidden="true" className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                      <FileText size={17} strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-100/45 sm:text-[10px]">Last updated</p>
                      <p className="mt-1 text-[12px] font-semibold text-white sm:text-sm">{LastUpdated}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl border border-blue-200/[0.10] bg-white/[0.025] px-3.5 py-3 text-[11px] font-medium text-blue-100/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]">
                    <LockKeyhole size={13} className="shrink-0 text-cyan-200/75" />
                    <span>14 sections · InnoInventive</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-medium tracking-[0.02em] text-blue-100/35 sm:mt-6 sm:text-[11px]">
                  <span className="h-px w-7 bg-gradient-to-r from-cyan-200/55 to-blue-400/20" />
                  Clear information practices
                </div>
              </div>

              {/* Decorative 3D privacy-document visual */}
              <div
                aria-hidden="true"
                className="relative mx-auto flex min-h-[225px] w-full max-w-[420px] items-center justify-center sm:min-h-[270px] lg:min-h-[315px] [perspective:1200px]"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.10] blur-[55px] sm:h-[220px] sm:w-[300px]" />
                <div className="absolute left-1/2 top-1/2 h-[174px] w-[min(72vw,300px)] rounded-[25px] border border-violet-200/[0.14] bg-[#08152E]/65 shadow-[0_28px_45px_rgba(0,0,0,0.25)] [transform:translate(-47%,-47%)_rotateY(-17deg)_rotateX(5deg)_rotateZ(-11deg)_translateZ(-35px)] sm:h-[210px] sm:w-[320px]" />
                <div className="absolute left-1/2 top-1/2 h-[180px] w-[min(72vw,300px)] rounded-[25px] border border-blue-200/[0.16] bg-gradient-to-br from-[#0A2854]/95 to-[#06152F]/95 shadow-[0_24px_42px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.07)] [transform:translate(-53%,-51%)_rotateY(-13deg)_rotateX(4deg)_rotateZ(7deg)_translateZ(-15px)] sm:h-[216px] sm:w-[320px]" />

                <div className="relative h-[190px] w-[min(72vw,300px)] rounded-[24px] border border-cyan-200/[0.24] bg-[linear-gradient(145deg,rgba(15,48,91,0.98),rgba(5,20,44,0.99)_70%)] p-4 shadow-[0_26px_55px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.40)] transition-transform duration-700 ease-out hover:[transform:rotateY(-5deg)_rotateX(2deg)_translateY(-3px)] [transform:rotateY(-12deg)_rotateX(5deg)_rotateZ(-3deg)_translateZ(24px)] sm:h-[226px] sm:w-[320px] sm:p-5">
                  <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/65 to-transparent" />
                  <span className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-[48px] bg-gradient-to-bl from-cyan-300/[0.10] to-transparent" />

                  <div className="relative flex items-center justify-between gap-3 border-b border-blue-100/[0.09] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/20 bg-gradient-to-br from-[#164779] to-[#091D40] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_6px_14px_rgba(0,0,0,0.25)]">
                        <ShieldCheck size={17} strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-100/85">InnoInventive</p>
                        <p className="mt-1 text-[8px] text-blue-100/40">Privacy & trust</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-emerald-200/15 bg-emerald-300/[0.06] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-emerald-100/75">
                      Protected
                    </span>
                  </div>

                  <div className="relative mt-4 flex items-start gap-3 sm:mt-5">
                    <div className="flex h-[55px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-cyan-200/[0.19] bg-gradient-to-br from-cyan-300/[0.13] via-blue-400/[0.07] to-violet-400/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_10px_20px_rgba(0,0,0,0.18)]">
                      <LockKeyhole size={23} strokeWidth={1.5} className="text-cyan-100 drop-shadow-[0_0_9px_rgba(103,232,249,0.35)]" />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-[12px] font-semibold tracking-[-0.02em] text-white sm:text-[13px]">Your privacy matters.</p>
                      <p className="mt-1.5 max-w-[180px] text-[8px] leading-[1.65] text-blue-100/48 sm:text-[9px]">
                        Clear information practices for every digital interaction.
                      </p>
                      <div className="mt-3 space-y-1.5">
                        <span className="block h-[3px] w-[92%] rounded-full bg-gradient-to-r from-cyan-200/35 to-blue-300/[0.06]" />
                        <span className="block h-[3px] w-[72%] rounded-full bg-blue-200/[0.10]" />
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-4 flex items-center justify-between border-t border-blue-100/[0.08] pt-3 sm:mt-5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(103,232,249,0.75)]" />
                      <span className="text-[7px] font-medium uppercase tracking-[0.12em] text-blue-100/45">Information handled with care</span>
                    </div>
                    <FileText size={13} className="text-blue-100/35" />
                  </div>
                </div>

                {/* Floating premium markers */}
                <div className="absolute right-[2%] top-[5%] flex h-11 w-11 items-center justify-center rounded-[15px] border border-cyan-200/25 bg-gradient-to-br from-[#164779] via-[#0A2148] to-[#061633] text-cyan-100 shadow-[0_8px_0_rgba(2,8,20,0.45),0_18px_32px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.16)] [transform:rotateY(-12deg)_rotateZ(8deg)_translateZ(55px)] sm:right-[4%] sm:top-[4%] sm:h-12 sm:w-12">
                  <ShieldCheck size={19} strokeWidth={1.7} />
                </div>
                <div className="absolute bottom-[6%] left-[1%] flex items-center gap-2 rounded-xl border border-blue-200/[0.15] bg-[#061633]/90 px-3 py-2 shadow-[0_12px_25px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl [transform:rotateY(8deg)_rotateZ(-4deg)_translateZ(45px)] sm:bottom-[4%] sm:left-[4%]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-cyan-200/15 bg-cyan-300/[0.07] text-cyan-100">
                    <LockKeyhole size={12} />
                  </span>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.11em] text-blue-50/70">Privacy first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile table of contents */}
      <div className="mx-auto w-full max-w-[1260px] px-4 pb-5 sm:px-6 lg:hidden">
        <div className="overflow-hidden rounded-2xl border border-blue-200/10 bg-[#081D3D]/85 shadow-[0_14px_38px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <button
            type="button"
            aria-expanded={IsMobileTocOpen}
            aria-controls="mobile-policy-toc"
            onClick={() => SetIsMobileTocOpen((open) => !open)}
            className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/60"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-200">
                <FileText size={15} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">On this page</span>
                <span className="mt-0.5 block text-[11px] text-blue-100/45">Jump to a policy section</span>
              </span>
            </span>
            <ChevronDown size={17} className={`shrink-0 text-blue-100/55 transition-transform duration-200 ${IsMobileTocOpen ? "rotate-180" : ""}`} />
          </button>
          {IsMobileTocOpen && (
            <div id="mobile-policy-toc" className="border-t border-blue-100/[0.08] p-2">
              <TableOfContents mobile activeId={ActiveSectionId} onNavigate={HandleSectionNavigate} />
            </div>
          )}
        </div>
      </div>

      {/* Policy text and desktop navigation */}
      <div className="relative mx-auto grid w-full max-w-[1260px] grid-cols-1 gap-6 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[245px_minmax(0,1fr)] lg:gap-8 lg:px-8 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 xl:px-10">
        <aside className="hidden min-h-0 lg:block">
          <div className="sticky top-4 flex h-[calc(100svh-2rem)] max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-[22px] border border-cyan-200/[0.13] bg-[linear-gradient(155deg,rgba(10,34,69,0.96),rgba(5,18,41,0.98))] p-3 shadow-[0_18px_0_rgba(2,8,20,0.24),0_30px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-2xl [transform:translateZ(0)] xl:p-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent"
            />
            <span aria-hidden="true" className="pointer-events-none absolute -right-12 top-10 h-32 w-32 rounded-full bg-cyan-400/[0.07] blur-3xl" />
            <div className="relative z-10 mb-3 shrink-0 border-b border-blue-100/[0.09] px-2 pb-4 pt-2">
              <div className="flex items-center gap-2.5">
                <PremiumIconBadge icon={FileText} size="default" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/85">Policy index</p>
                  <p className="mt-1 text-[12px] font-medium leading-relaxed text-blue-50/60">Navigate by topic</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-blue-100/[0.06] bg-[#020B20]/35 px-3 py-2">
                <span className="text-[10px] font-medium text-blue-100/45">Sections</span>
                <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-2 py-0.5 text-[10px] font-semibold tabular-nums text-cyan-100">
                  14 topics
                </span>
              </div>
            </div>
            <div className="policy-toc-scroll relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
              <TableOfContents activeId={ActiveSectionId} onNavigate={HandleSectionNavigate} />
            </div>
            <div className="relative z-10 mt-3 shrink-0 border-t border-blue-100/[0.08] px-2 pt-3">
              <p className="text-[9px] font-medium leading-relaxed text-blue-100/32">InnoInventive · Privacy & Trust</p>
            </div>
          </div>
        </aside>

        <article className="policy-document relative isolate min-w-0 overflow-hidden rounded-[22px] border border-cyan-100/[0.12] bg-[linear-gradient(145deg,rgba(9,32,66,0.94),rgba(4,17,39,0.98))] px-5 shadow-[0_18px_0_rgba(2,8,20,0.20),0_28px_80px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.055)] sm:rounded-[26px] sm:px-8 lg:px-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-24 top-[-80px] h-64 w-64 rounded-full bg-cyan-400/[0.045] blur-[90px]" />
            <div className="absolute -left-24 bottom-[18%] h-64 w-64 rounded-full bg-violet-500/[0.035] blur-[90px]" />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-100/30 to-violet-200/15"
          />
          <PolicySection id="introduction" number="01" title="Introduction">
            <p>
              At InnoInventive, we respect your privacy and believe you should know how your information is handled when you visit our website or get in touch
              with us.
            </p>
            <p>
              We work with businesses to build digital solutions, including websites, e-commerce platforms, CMS and CRM systems, API integrations, applications,
              and business automation solutions.
            </p>
            <p>
              This Privacy Policy explains what information may be collected when you interact with us, how it may be used, and the circumstances in which it
              may be shared. It also explains how you can contact us if you have a question or concern about your personal information.
            </p>
          </PolicySection>

          <PolicySection id="scope" number="02" title="When This Policy Applies">
            <p>This policy covers your use of the InnoInventive website, enquiries about our services, and communications with our business.</p>
            <p>
              Some of our projects involve developing or integrating digital systems that our clients use to run their own businesses. Information handled
              through those systems may also be covered by the client's privacy policy and the terms agreed for that project.
            </p>
            <p>
              Where a separate agreement applies, the handling of information will depend on the responsibilities and arrangements set out in that agreement and
              applicable law.
            </p>
          </PolicySection>

          <PolicySection id="information" number="03" title="Information We May Collect">
            <p>The information involved depends on how you use our website and interact with us.</p>
            <h3>Information you share with us</h3>
            <p>
              If you contact us about a service or a potential project, you may share your name, email address, phone number, business name, project
              requirements, or other details relevant to your enquiry.
            </p>
            <p>We use the information you choose to provide to understand what you need and communicate with you about your request.</p>
            <p>Please avoid sending passwords, payment-card details, or confidential customer records through general enquiry channels.</p>
            <h3>Technical information</h3>
            <p>
              When you visit a website, certain technical information may be processed by the systems that deliver the website. Depending on the hosting
              arrangements and configuration, this may include your IP address, browser or device information, and basic technical records of a website request.
            </p>
            <p>The exact information processed when you visit the InnoInventive website depends on the systems and services in use.</p>
            <h3>Cookies and similar technologies</h3>
            <p>Cookies are small files that websites may use to support certain features, remember preferences, or understand how visitors use a website.</p>
            <p>
              Whether these technologies are used on our website, and for what purposes, depends on the features and tools that are enabled. You can also manage
              cookies through your browser settings, although restricting them may affect some website features.
            </p>
          </PolicySection>

          <PolicySection id="use" number="04" title="How We Use Information">
            <p>When information is provided to us, we may use it to:</p>
            <ul>
              <li>Respond to your questions and service enquiries.</li>
              <li>Understand your business needs and project requirements.</li>
              <li>Discuss suitable services and prepare proposals or estimates.</li>
              <li>Communicate with you about an agreed project.</li>
              <li>Deliver and support the services you have requested.</li>
              <li>Maintain and improve our website.</li>
              <li>Investigate technical problems or potential misuse.</li>
              <li>Keep relevant business records and meet applicable legal obligations.</li>
            </ul>
            <p>We aim to use information in ways that are relevant to the reason it was provided and permitted by applicable law.</p>
          </PolicySection>

          <PolicySection id="handling" number="05" title="How We Handle Personal Information">
            <p>We handle personal information in accordance with the legal requirements that apply to the relevant activity.</p>
            <p>
              For example, we may need to use information you provide to respond to your enquiry, discuss a proposed project, deliver an agreed service, or meet
              a legal obligation. Where consent is required, we will follow the applicable consent requirements.
            </p>
            <p>
              If you have given consent for a particular use of your information and applicable law allows you to withdraw it, you can contact us to make that
              request. Withdrawal of consent does not affect processing that was lawful before the withdrawal.
            </p>
          </PolicySection>

          <PolicySection id="sharing" number="06" title="When Information May Be Shared">
            <p>
              We do not share personal information without a relevant reason. Depending on the circumstances, information may need to be shared in the following
              situations.
            </p>
            <p>
              <strong>To operate our website:</strong> Information may be handled by technology providers involved in hosting, maintaining, or supporting the
              website, where those services are used.
            </p>
            <p>
              <strong>To deliver a project:</strong> Some projects may require third-party platforms, integrations, or other service providers. Information may
              be shared where necessary for the agreed work and permitted by applicable law.
            </p>
            <p>
              <strong>To meet legal requirements:</strong> We may disclose information when required by law or a valid direction from a competent authority.
            </p>
            <p>
              <strong>In connection with a business transfer:</strong> If a business restructuring or transfer takes place, relevant information may be handled
              as part of that process where legally permitted.
            </p>
            <p>The providers involved and the information shared will depend on the services actually used and the circumstances concerned.</p>
          </PolicySection>

          <PolicySection id="projects" number="07" title="Information Handled During Client Projects">
            <p>
              Our work may involve websites, online stores, applications, CMS or CRM systems, APIs, and automated workflows that help clients manage their
              businesses.
            </p>
            <p>Depending on the project, these systems may handle information about a client's customers, employees, orders, or business operations.</p>
            <p>
              The way that information is handled depends on the project requirements, the agreement with the client, and the responsibilities of each party.
              Clients must ensure they have the necessary authority and lawful basis to provide information for a project.
            </p>
            <p>Where we process personal information on a client's behalf, the relevant project arrangements and applicable law govern that work.</p>
          </PolicySection>

          <PolicySection id="retention" number="08" title="How Long Information Is Kept">
            <p>
              We keep information for as long as it is reasonably needed for the purpose for which it was collected, subject to applicable legal and contractual
              requirements.
            </p>
            <p>
              For example, we may need to retain enquiry details to respond to you and maintain business correspondence. Information related to a project may be
              needed for project management, support, or record-keeping.
            </p>
            <p>
              The appropriate retention period depends on the type of information and why it is held. When information is no longer needed, it should be deleted
              or otherwise handled in accordance with applicable law and the processes available to us.
            </p>
          </PolicySection>

          <PolicySection id="security" number="09" title="Keeping Information Secure">
            <p>
              We understand the importance of handling information carefully. The safeguards needed to protect it depend on the nature of the information, the
              systems involved, and the risks associated with its use.
            </p>
            <p>
              We do not claim that any website or electronic communication is completely secure. If a security incident occurs and applicable law requires
              notification or other action, the relevant legal requirements must be followed.
            </p>
          </PolicySection>

          <PolicySection id="requests" number="10" title="Your Privacy Requests">
            <p>
              Depending on the applicable law and your circumstances, you may be able to ask about the personal information being processed about you, request
              corrections, seek deletion where permitted, withdraw consent where applicable, or raise a privacy-related concern.
            </p>
            <p>Some requests may be subject to legal requirements, exceptions, or record-keeping obligations.</p>
            <p>
              If you would like to make a privacy request, please contact us through the Contact Us page on our website. Explain your request clearly so that we
              can understand what you need. We may ask for reasonable information to verify your identity or authority before responding.
            </p>
            <p>We will handle your request in accordance with the requirements that apply to it.</p>
          </PolicySection>

          <PolicySection id="third-party" number="11" title="Links to Other Websites">
            <p>
              Our website may contain links to third-party websites or services. If you visit one of these websites, its own privacy policy and terms will apply
              to your interaction with it.
            </p>
            <p>
              We do not control how independent third-party websites collect or use information. We recommend reviewing their privacy information before sharing
              personal details with them.
            </p>
          </PolicySection>

          <PolicySection id="children" number="12" title="Children’s Privacy">
            <p>Our website provides information about professional technology and digital services for individuals and businesses.</p>
            <p>
              If personal information relating to a child is involved, the requirements of applicable law must be followed. If you have a concern about
              information relating to a child that may have been provided to us, please contact us through our website.
            </p>
          </PolicySection>

          <PolicySection id="changes" number="13" title="Changes to This Policy">
            <p>
              Our services, website features, and legal obligations may change over time. If those changes affect this Privacy Policy, we may update the content
              of this page.
            </p>
            <p>
              The latest revision date will be shown at the top of the policy. If a change requires additional notice or consent under applicable law, the
              relevant requirements will apply.
            </p>
          </PolicySection>

          <PolicySection id="contact" number="14" title="Contact Us" last>
            <p>
              If you have a question about this Privacy Policy, want to raise a privacy concern, or wish to make a request relating to your personal
              information, please get in touch through the Contact Us page on our website.
            </p>
            <p>
              Please mention <strong>“Privacy Request”</strong> or <strong>“Privacy Grievance”</strong> in your message so that we can understand the purpose of
              your enquiry.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-[linear-gradient(120deg,rgba(25,211,255,0.055),rgba(22,119,255,0.045),rgba(124,60,255,0.055))] p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-white sm:text-lg">InnoInventive</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-blue-100/55">Digital Solutions, Development and Business Automation</p>
                  <a
                    href="https://innoinventive.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                  >
                    innoinventive.com <ArrowUpRight size={14} />
                  </a>
                </div>
                <a
                  href="/contact"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-200/25 bg-cyan-300/[0.09] px-4 py-2.5 text-sm font-semibold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-200 hover:border-cyan-200/45 hover:bg-cyan-300/[0.14] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  Contact Us <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </PolicySection>
        </article>
      </div>

      <footer className="relative border-t border-blue-100/[0.08]">
        <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-3 px-4 py-6 text-[11px] text-blue-100/35 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <span>© {new Date().getFullYear()} InnoInventive. All rights reserved.</span>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="inline-flex w-fit items-center gap-1.5 text-blue-100/45 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </footer>

      <style>{`
                .policy-toc-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(34, 211, 238, 0.28) transparent;
                }
                .policy-toc-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .policy-toc-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .policy-toc-scroll::-webkit-scrollbar-thumb {
                    border-radius: 999px;
                    background: linear-gradient(180deg, rgba(103,232,249,0.36), rgba(59,130,246,0.24), rgba(167,139,250,0.24));
                }
                .policy-document {
                    transform-style: preserve-3d;
                }
                .policy-section {
                    scroll-margin-top: 7rem;
                }
                .policy-copy {
                    color: rgba(222, 235, 255, 0.76);
                    font-size: 14px;
                    line-height: 1.9;
                    letter-spacing: 0.002em;
                    overflow-wrap: anywhere;
                }
                .policy-copy p + p {
                    margin-top: 0.9rem;
                }
                .policy-copy h3 {
                    margin-top: 1.45rem;
                    margin-bottom: 0.45rem;
                    color: rgba(236, 254, 255, 0.88);
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.005em;
                }
                .policy-copy ul {
                    margin: 0.7rem 0 1rem;
                    padding-left: 1.2rem;
                    list-style: none;
                }
                .policy-copy li {
                    position: relative;
                    padding-left: 0.65rem;
                    margin-top: 0.38rem;
                }
                .policy-copy li::before {
                    content: "";
                    position: absolute;
                    left: -0.8rem;
                    top: 0.78em;
                    width: 4px;
                    height: 4px;
                    border-radius: 999px;
                    background: rgba(103, 232, 249, 0.65);
                }
                .policy-copy strong {
                    color: rgba(248, 250, 252, 0.92);
                    font-weight: 600;
                }
                @media (min-width: 640px) {
                    .policy-copy { font-size: 15px; line-height: 1.95; }
                    .policy-copy h3 { font-size: 14px; }
                }
                @media (min-width: 1800px) {
                    .policy-copy { font-size: 16px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    html { scroll-behavior: auto !important; }
                    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
                }
            `}</style>
    </main>
  )
}

export default PrivacyPolicy
