import { useEffect, useState } from "react"
import PremiumIconBadge from "../../components/UI/PremiumIconBadge"

import { ArrowUp, ArrowRight, ArrowUpRight, ChevronDown, FileText, Scale, ShieldCheck, Handshake, Gavel, ClipboardCheck, LockKeyhole } from "lucide-react"

const LastUpdated = "24 October 2026"

const TermsSections = [
  { id: "introduction", number: "01", title: "Introduction" },
  { id: "website-use", number: "02", title: "Use of Our Website" },
  { id: "services", number: "03", title: "Our Services" },
  { id: "project-enquiries", number: "04", title: "Project Enquiries and Proposals" },
  { id: "pricing-payment", number: "05", title: "Pricing and Payment" },
  { id: "project-changes", number: "06", title: "Changes to Project Requirements" },
  { id: "client-responsibilities", number: "07", title: "Client Responsibilities" },
  { id: "intellectual-property", number: "08", title: "Intellectual Property" },
  { id: "third-party-services", number: "09", title: "Third-Party Services and Integrations" },
  { id: "testing-delivery", number: "10", title: "Testing, Delivery, and Maintenance" },
  { id: "website-accuracy", number: "11", title: "Website Content and Accuracy" },
  { id: "confidentiality", number: "12", title: "Confidential Information" },
  { id: "privacy", number: "13", title: "Privacy and Personal Information" },
  { id: "availability", number: "14", title: "Availability and Technical Limitations" },
  { id: "liability", number: "15", title: "Limitation of Liability" },
  { id: "access-restriction", number: "16", title: "Suspension or Restriction of Website Access" },
  { id: "external-links", number: "17", title: "External Links" },
  { id: "changes-to-terms", number: "18", title: "Changes to These Terms" },
  { id: "governing-law", number: "19", title: "Governing Law" },
  { id: "contact", number: "20", title: "Contact Us" },
]

const TermsSection = ({ id, number, title, children, last = false }) => {
  const NumberMark = ({ className = "" }) => (
    <span className={`${className} font-mono text-[10px] font-semibold tracking-[0.04em] text-cyan-100`}>{number}</span>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      data-terms-section="true"
      className={`terms-section relative scroll-mt-28 py-7 sm:py-9 ${last ? "" : "border-b border-blue-100/[0.08]"}`}
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
      <div className="terms-copy min-w-0 pl-0 sm:pl-[56px]">{children}</div>
    </section>
  )
}

const TableOfContents = ({ mobile = false, activeId, onNavigate }) => (
  <nav aria-label="Terms and Conditions sections" className={mobile ? "space-y-1" : "space-y-1.5"}>
    {TermsSections.map((section) => {
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

const TermsAndConditions = () => {
  const [IsMobileTocOpen, SetIsMobileTocOpen] = useState(false)
  const [ActiveSectionId, SetActiveSectionId] = useState(TermsSections[0].id)

  useEffect(() => {
    const sections = TermsSections.map(({ id }) => document.getElementById(id)).filter(Boolean)

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

      {/* Premium 3D terms hero */}
      <header className="relative mx-auto w-full max-w-[1440px] px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-10 lg:pb-14 lg:pt-14">
        <div className="mx-auto max-w-[1260px]">
          <div className="relative isolate overflow-hidden rounded-[26px] border border-cyan-200/[0.16] bg-[linear-gradient(135deg,rgba(10,35,72,0.97),rgba(5,20,46,0.98)_55%,rgba(9,20,54,0.98))] shadow-[0_15px_0_rgba(2,8,20,0.26),0_32px_85px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.10)] sm:rounded-[30px]">
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
                  <Scale size={14} strokeWidth={1.8} className="text-cyan-200" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-cyan-100/85 sm:text-[11px]">Legal · Terms & Agreement</span>
                </div>

                <h1 className="mt-5 text-[clamp(2.35rem,5.8vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.067em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.25)] sm:mt-6">
                  Terms <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-violet-400 bg-clip-text text-transparent">& Conditions</span>
                </h1>

                <p className="mt-4 max-w-[670px] text-[13px] leading-7 text-blue-100/70 sm:mt-5 sm:text-[14px] sm:leading-8 lg:text-[15px]">
                  These terms explain how to use the InnoInventive website and set out general information about our digital services, project enquiries, and
                  working arrangements.
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
                    <ClipboardCheck size={13} className="shrink-0 text-cyan-200/75" />
                    <span>20 sections · Digital services</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-medium tracking-[0.02em] text-blue-100/35 sm:mt-6 sm:text-[11px]">
                  <span className="h-px w-7 bg-gradient-to-r from-cyan-200/55 to-blue-400/20" />
                  Clear terms. Better collaboration.
                </div>
              </div>

              {/* Decorative 3D terms-and-agreement visual */}
              <div
                aria-hidden="true"
                className="relative mx-auto flex min-h-[225px] w-full max-w-[420px] items-center justify-center [perspective:1200px] sm:min-h-[270px] lg:min-h-[315px]"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.10] blur-[55px] sm:h-[220px] sm:w-[300px]" />

                {/* Back layers give the document real depth */}
                <div className="absolute left-1/2 top-1/2 h-[174px] w-[min(72vw,300px)] rounded-[25px] border border-violet-200/[0.14] bg-[#08152E]/65 shadow-[0_28px_45px_rgba(0,0,0,0.25)] [transform:translate(-47%,-47%)_rotateY(-17deg)_rotateX(5deg)_rotateZ(-11deg)_translateZ(-35px)] sm:h-[210px] sm:w-[320px]" />
                <div className="absolute left-1/2 top-1/2 h-[180px] w-[min(72vw,300px)] rounded-[25px] border border-blue-200/[0.16] bg-gradient-to-br from-[#0A2854]/95 to-[#06152F]/95 shadow-[0_24px_42px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.07)] [transform:translate(-53%,-51%)_rotateY(-13deg)_rotateX(4deg)_rotateZ(7deg)_translateZ(-15px)] sm:h-[216px] sm:w-[320px]" />

                <div className="relative h-[190px] w-[min(72vw,300px)] rounded-[24px] border border-cyan-200/[0.24] bg-[linear-gradient(145deg,rgba(15,48,91,0.98),rgba(5,20,44,0.99)_70%)] p-4 shadow-[0_26px_55px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.40)] [transform:rotateY(-12deg)_rotateX(5deg)_rotateZ(-3deg)_translateZ(24px)] sm:h-[226px] sm:w-[320px] sm:p-5">
                  <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/65 to-transparent" />
                  <span className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-[48px] bg-gradient-to-bl from-cyan-300/[0.10] to-transparent" />

                  <div className="relative flex items-center justify-between gap-3 border-b border-blue-100/[0.09] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/20 bg-gradient-to-br from-[#164779] to-[#091D40] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_6px_14px_rgba(0,0,0,0.25)]">
                        <Scale size={17} strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-100/85">InnoInventive</p>
                        <p className="mt-1 text-[8px] text-blue-100/40">Terms & Conditions</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-emerald-200/15 bg-emerald-300/[0.06] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-emerald-100/75">
                      Clear terms
                    </span>
                  </div>

                  <div className="relative mt-4 flex items-start gap-3 sm:mt-5">
                    <div className="flex h-[55px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-cyan-200/[0.19] bg-gradient-to-br from-cyan-300/[0.13] via-blue-400/[0.07] to-violet-400/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_10px_20px_rgba(0,0,0,0.18)]">
                      <Gavel size={23} strokeWidth={1.5} className="text-cyan-100 drop-shadow-[0_0_9px_rgba(103,232,249,0.35)]" />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-[12px] font-semibold tracking-[-0.02em] text-white sm:text-[13px]">Built on clarity.</p>
                      <p className="mt-1.5 max-w-[180px] text-[8px] leading-[1.65] text-blue-100/48 sm:text-[9px]">
                        Shared expectations for projects, services, and collaboration.
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
                      <span className="text-[7px] font-medium uppercase tracking-[0.12em] text-blue-100/45">Project clarity</span>
                    </div>
                    <FileText size={13} className="text-blue-100/35" />
                  </div>
                </div>

                {/* Floating premium markers */}
                <div className="absolute right-[2%] top-[5%] flex h-11 w-11 items-center justify-center rounded-[15px] border border-cyan-200/25 bg-gradient-to-br from-[#164779] via-[#0A2148] to-[#061633] text-cyan-100 shadow-[0_8px_0_rgba(2,8,20,0.45),0_18px_32px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.16)] [transform:rotateY(-12deg)_rotateZ(8deg)_translateZ(55px)] sm:right-[4%] sm:top-[4%] sm:h-12 sm:w-12">
                  <Handshake size={19} strokeWidth={1.7} />
                </div>
                <div className="absolute bottom-[6%] left-[1%] flex items-center gap-2 rounded-xl border border-blue-200/[0.15] bg-[#061633]/90 px-3 py-2 shadow-[0_12px_25px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl [transform:rotateY(8deg)_rotateZ(-4deg)_translateZ(45px)] sm:bottom-[4%] sm:left-[4%]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-cyan-200/15 bg-cyan-300/[0.07] text-cyan-100">
                    <LockKeyhole size={12} />
                  </span>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.11em] text-blue-50/70">Clear expectations</span>
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
            aria-controls="mobile-terms-toc"
            onClick={() => SetIsMobileTocOpen((open) => !open)}
            className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/60"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05] text-cyan-200">
                <FileText size={15} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">On this page</span>
                <span className="mt-0.5 block text-[11px] text-blue-100/45">Jump to a terms section</span>
              </span>
            </span>
            <ChevronDown size={17} className={`shrink-0 text-blue-100/55 transition-transform duration-200 ${IsMobileTocOpen ? "rotate-180" : ""}`} />
          </button>
          {IsMobileTocOpen && (
            <div id="mobile-terms-toc" className="border-t border-blue-100/[0.08] p-2">
              <TableOfContents mobile activeId={ActiveSectionId} onNavigate={HandleSectionNavigate} />
            </div>
          )}
        </div>
      </div>

      {/* Terms text and desktop navigation */}
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
                <PremiumIconBadge icon={Scale} size="default" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/85">Terms index</p>
                  <p className="mt-1 text-[12px] font-medium leading-relaxed text-blue-50/60">Navigate by topic</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-blue-100/[0.06] bg-[#020B20]/35 px-3 py-2">
                <span className="text-[10px] font-medium text-blue-100/45">Sections</span>
                <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-2 py-0.5 text-[10px] font-semibold tabular-nums text-cyan-100">
                  20 topics
                </span>
              </div>
            </div>
            <div className="terms-toc-scroll relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
              <TableOfContents activeId={ActiveSectionId} onNavigate={HandleSectionNavigate} />
            </div>
            <div className="relative z-10 mt-3 shrink-0 border-t border-blue-100/[0.08] px-2 pt-3">
              <p className="text-[9px] font-medium leading-relaxed text-blue-100/32">InnoInventive · Terms & Conditions</p>
            </div>
          </div>
        </aside>

        <article className="terms-document relative isolate min-w-0 overflow-hidden rounded-[22px] border border-cyan-100/[0.12] bg-[linear-gradient(145deg,rgba(9,32,66,0.94),rgba(4,17,39,0.98))] px-5 shadow-[0_18px_0_rgba(2,8,20,0.20),0_28px_80px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.055)] sm:rounded-[26px] sm:px-8 lg:px-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-24 top-[-80px] h-64 w-64 rounded-full bg-cyan-400/[0.045] blur-[90px]" />
            <div className="absolute -left-24 bottom-[18%] h-64 w-64 rounded-full bg-violet-500/[0.035] blur-[90px]" />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-100/30 to-violet-200/15"
          />

          <TermsSection id="introduction" number="01" title="Introduction">
            <p>Welcome to InnoInventive.</p>
            <p>
              These Terms &amp; Conditions explain the rules for using our website and provide general information about our digital services. InnoInventive
              helps businesses build and improve their digital presence through website development, e-commerce solutions, CMS and CRM solutions, API
              integrations, application development, and business automation.
            </p>
            <p>
              By accessing or using our website, you agree to use it responsibly and in accordance with these terms. If you do not agree with these terms,
              please discontinue using the website.
            </p>
            <p>
              Any services you purchase or engage us to provide may also be governed by a separate proposal, statement of work, service agreement, or other
              written arrangement.
            </p>
          </TermsSection>

          <TermsSection id="website-use" number="02" title="Use of Our Website">
            <p>You may use this website to learn about InnoInventive, explore our services, review our work, and contact us regarding a potential project.</p>
            <p>When using the website, you agree not to:</p>
            <ul>
              <li>Use the website for unlawful, fraudulent, or misleading purposes.</li>
              <li>Attempt to gain unauthorised access to the website, its systems, or related services.</li>
              <li>Interfere with the website&apos;s operation, security, or availability.</li>
              <li>Introduce malicious code or attempt to compromise the website.</li>
              <li>Copy, reproduce, or misuse website content in a way that infringes applicable rights.</li>
              <li>Submit information that you know to be false or that you are not authorised to share.</li>
            </ul>
            <p>We may take reasonable steps to protect the website and address misuse where necessary and permitted by law.</p>
          </TermsSection>

          <TermsSection id="services" number="03" title="Our Services">
            <p>
              InnoInventive provides digital and technology services according to the requirements of each project. Depending on the agreed scope, these
              services may include:
            </p>
            <ul>
              <li>Website design and development.</li>
              <li>E-commerce website development.</li>
              <li>CMS and CRM implementation or customisation.</li>
              <li>API integration and related development.</li>
              <li>Application development.</li>
              <li>Business workflow and automation solutions.</li>
              <li>Related technical support, improvements, or maintenance where agreed.</li>
            </ul>
            <p>The availability, features, deliverables, and timelines of a service depend on the specific project and the terms agreed with the client.</p>
            <p>
              Descriptions on this website are intended to explain our capabilities. They do not, by themselves, guarantee that a particular feature, result,
              delivery date, or service package will be available for every project.
            </p>
          </TermsSection>

          <TermsSection id="project-enquiries" number="04" title="Project Enquiries and Proposals">
            <p>You may contact us to discuss your requirements or request information about a potential project.</p>
            <p>An enquiry does not, by itself, create a service contract or guarantee that InnoInventive will accept or undertake the project.</p>
            <p>
              Before work begins, the parties should agree on the relevant scope, deliverables, responsibilities, charges, timeline, payment arrangements, and
              any other important conditions in writing.
            </p>
            <p>
              If a proposal or project agreement contains terms that differ from these general website terms, the specific agreement will govern the relevant
              project to the extent permitted by applicable law.
            </p>
          </TermsSection>

          <TermsSection id="pricing-payment" number="05" title="Pricing and Payment">
            <p>The cost of our services depends on the nature, complexity, scope, and requirements of the project.</p>
            <p>
              Any quotation, proposal, or estimate provided for a project will be subject to the conditions stated in that document. Applicable taxes,
              third-party charges, subscriptions, licences, hosting costs, or other expenses should be identified in the relevant proposal or agreement where
              applicable.
            </p>
            <p>
              Payment amounts, due dates, milestones, advance payments, and accepted payment methods will be communicated and agreed before or as part of the
              engagement.
            </p>
            <p>
              Where a client does not make a payment when due, the parties&apos; rights and responsibilities will be determined by the applicable agreement and
              relevant law.
            </p>
            <p>We do not establish a universal price, payment schedule, or late-payment charge through these website terms.</p>
          </TermsSection>

          <TermsSection id="project-changes" number="06" title="Changes to Project Requirements">
            <p>A project may need to change as requirements become clearer or business needs evolve.</p>
            <p>
              If you request additional features, new integrations, changes to approved designs, or work outside the original scope, we may need to review the
              impact on cost, resources, and delivery time.
            </p>
            <p>
              Any material change to the agreed scope, price, or timeline should be confirmed by the parties in writing before the additional work proceeds.
            </p>
            <p>This helps both parties maintain a clear understanding of what is included in the project.</p>
          </TermsSection>

          <TermsSection id="client-responsibilities" number="07" title="Client Responsibilities">
            <p>Successful delivery often depends on timely information, decisions, access, and feedback from the client.</p>
            <p>Depending on the project, clients may be responsible for:</p>
            <ul>
              <li>Providing accurate requirements and necessary project information.</li>
              <li>Supplying content, branding assets, product information, and other materials they are responsible for providing.</li>
              <li>Ensuring they have the necessary rights and permissions for materials supplied to us.</li>
              <li>Providing authorised access to relevant systems or accounts when required.</li>
              <li>Reviewing deliverables and providing feedback or approvals within agreed timelines.</li>
              <li>Maintaining their own account credentials and following appropriate security practices.</li>
              <li>Ensuring that their intended use of the delivered solution complies with applicable law.</li>
            </ul>
            <p>
              Delays in receiving required information, approvals, or access may affect the project timeline. Any resulting change to the schedule should be
              discussed with the client.
            </p>
          </TermsSection>

          <TermsSection id="intellectual-property" number="08" title="Intellectual Property">
            <p>
              Intellectual property rights in website content, software, designs, graphics, documentation, code, and other materials depend on their ownership,
              applicable law, and the terms agreed for the relevant project.
            </p>
            <p>
              Unless a separate written agreement states otherwise, you may not assume that paying for a service automatically transfers ownership of every
              tool, component, asset, or piece of technology used to deliver it.
            </p>
            <p>
              Third-party software, open-source components, stock assets, fonts, plugins, and external platforms may be subject to their own licences and terms.
            </p>
            <p>
              The ownership or permitted use of project-specific deliverables, reusable components, source code, and client-provided materials should be
              established in the applicable project agreement.
            </p>
            <p>Nothing in these terms is intended to remove rights that cannot lawfully be excluded.</p>
          </TermsSection>

          <TermsSection id="third-party-services" number="09" title="Third-Party Services and Integrations">
            <p>
              Some projects may require external platforms or services, such as hosting providers, payment gateways, APIs, software licences, plugins, or other
              third-party tools.
            </p>
            <p>Those services are generally governed by their respective providers&apos; terms, policies, availability, and technical requirements.</p>
            <p>
              Where a project depends on a third-party service, its performance may be affected by changes, outages, pricing, access restrictions, or
              discontinuation by that provider.
            </p>
            <p>
              Unless expressly agreed otherwise, InnoInventive does not control independent third-party services and cannot guarantee their continued
              availability or performance.
            </p>
            <p>Any responsibility for purchasing, maintaining, renewing, or paying for third-party services should be clarified in the project agreement.</p>
          </TermsSection>

          <TermsSection id="testing-delivery" number="10" title="Testing, Delivery, and Maintenance">
            <p>Testing, deployment, documentation, training, maintenance, and post-launch support will depend on the scope agreed for the project.</p>
            <p>
              A service agreement or proposal should identify the applicable deliverables, review process, acceptance criteria, support arrangements, and any
              agreed warranty or correction period.
            </p>
            <p>
              Ongoing maintenance, additional development, monitoring, hosting, and future updates are not automatically included in every project unless they
              form part of the agreed scope.
            </p>
            <p>Clients should review the delivered solution and raise any concerns through the communication process agreed for the project.</p>
          </TermsSection>

          <TermsSection id="website-accuracy" number="11" title="Website Content and Accuracy">
            <p>
              We make reasonable efforts to present our services and business information clearly. However, website content may be updated as our services,
              capabilities, or business requirements evolve.
            </p>
            <p>
              Information published on this website is provided for general informational purposes. It should not be treated as a project-specific quotation, a
              guaranteed delivery commitment, or a substitute for a written service agreement.
            </p>
            <p>
              If you need confirmation of a particular feature, technical requirement, price, or delivery timeline, please discuss it with us before entering
              into an engagement.
            </p>
          </TermsSection>

          <TermsSection id="confidentiality" number="12" title="Confidential Information">
            <p>During a project, either party may share information that is not intended for public disclosure.</p>
            <p>
              The parties should agree on appropriate confidentiality obligations where a project involves sensitive business information, proprietary
              materials, credentials, customer records, or other confidential data.
            </p>
            <p>
              Information that is already public, independently developed, lawfully obtained from another source, or required to be disclosed by law may be
              subject to different treatment under the applicable agreement and law.
            </p>
            <p>Clients should avoid sending passwords, payment credentials, or sensitive customer data through general website enquiry channels.</p>
          </TermsSection>

          <TermsSection id="privacy" number="13" title="Privacy and Personal Information">
            <p>
              Your use of our website and the handling of personal information are also addressed in our{" "}
              <a href="/privacy-policy" className="terms-inline-link">
                Privacy Policy
              </a>
              .
            </p>
            <p>You can review the Privacy Policy through the relevant link on the InnoInventive website.</p>
            <p>
              Where a project involves personal information belonging to a client or its customers, the responsibilities of each party should be established in
              the applicable project agreement and handled in accordance with the laws that apply to the processing.
            </p>
          </TermsSection>

          <TermsSection id="availability" number="14" title="Availability and Technical Limitations">
            <p>We aim to maintain a useful and accessible website, but uninterrupted availability cannot be guaranteed.</p>
            <p>
              Access may occasionally be affected by maintenance, technical problems, network interruptions, security measures, or circumstances outside our
              reasonable control.
            </p>
            <p>
              Similarly, the operation of a website, application, integration, or automation solution may depend on third-party infrastructure, external APIs,
              hosting environments, or systems managed by the client.
            </p>
            <p>
              Any service-level commitments, uptime targets, recovery arrangements, or support response times apply only where they have been expressly agreed.
            </p>
          </TermsSection>

          <TermsSection id="liability" number="15" title="Limitation of Liability">
            <p>
              To the extent permitted by applicable law, InnoInventive will not be responsible for losses arising solely from circumstances outside its
              reasonable control, unauthorised changes made by others, misuse of a delivered solution, or failures of independent third-party services.
            </p>
            <p>
              This section does not exclude or limit liability where such exclusion or limitation is prohibited by law, nor does it override any express
              responsibility accepted under a separate project agreement.
            </p>
            <p>
              Any limitation of liability applicable to a specific engagement should be clearly stated in the relevant agreement and interpreted in accordance
              with applicable law.
            </p>
          </TermsSection>

          <TermsSection id="access-restriction" number="16" title="Suspension or Restriction of Website Access">
            <p>
              We may restrict or suspend access to the website where reasonably necessary to address security risks, technical problems, suspected misuse, or
              unlawful activity.
            </p>
            <p>
              Where appropriate and permitted by law, we may also take steps to protect the website, its users, and related systems from interference or
              unauthorised access.
            </p>
            <p>This section concerns use of the website and does not replace any termination or suspension provisions agreed for a client project.</p>
          </TermsSection>

          <TermsSection id="external-links" number="17" title="External Links">
            <p>Our website may contain links to external websites or resources for convenience or reference.</p>
            <p>
              These websites operate independently and may have their own content, policies, and terms. A link does not necessarily mean that InnoInventive
              endorses every statement, product, or service available through that website.
            </p>
            <p>You access third-party websites at your own discretion and should review their applicable terms and privacy policies.</p>
          </TermsSection>

          <TermsSection id="changes-to-terms" number="18" title="Changes to These Terms">
            <p>We may update these Terms &amp; Conditions when our website, services, or legal obligations change.</p>
            <p>
              The latest version will be published on this page with an updated revision date. Changes to these general website terms do not automatically amend
              an existing project agreement unless the parties agree otherwise or applicable law provides otherwise.
            </p>
            <p>We encourage you to review this page periodically.</p>
          </TermsSection>

          <TermsSection id="governing-law" number="19" title="Governing Law">
            <p>These Terms &amp; Conditions are intended to be interpreted in accordance with the laws of India, subject to applicable legal requirements.</p>
            <p>
              The competent courts and dispute-resolution arrangements applicable to a particular matter will be determined by applicable law and any valid
              agreement between the parties.
            </p>
            <p>
              Any specific jurisdiction, arbitration arrangement, or dispute-resolution procedure for a client engagement should be set out in the relevant
              written agreement where appropriate.
            </p>
          </TermsSection>

          <TermsSection id="contact" number="20" title="Contact Us" last>
            <p>
              If you have questions about these Terms &amp; Conditions or would like to discuss a potential project, please contact InnoInventive through the
              Contact Us page on our official website.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-[linear-gradient(120deg,rgba(25,211,255,0.055),rgba(22,119,255,0.045),rgba(124,60,255,0.055))] p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
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
          </TermsSection>
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
                .terms-toc-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(34, 211, 238, 0.28) transparent;
                }
                .terms-toc-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .terms-toc-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .terms-toc-scroll::-webkit-scrollbar-thumb {
                    border-radius: 999px;
                    background: linear-gradient(180deg, rgba(103,232,249,0.36), rgba(59,130,246,0.24), rgba(167,139,250,0.24));
                }
                .terms-document {
                    transform-style: preserve-3d;
                }
                .terms-section {
                    scroll-margin-top: 7rem;
                }
                .terms-copy {
                    color: rgba(222, 235, 255, 0.76);
                    font-size: 14px;
                    line-height: 1.9;
                    letter-spacing: 0.002em;
                    overflow-wrap: anywhere;
                }
                .terms-copy p + p {
                    margin-top: 0.9rem;
                }
                .terms-copy h3 {
                    margin-top: 1.45rem;
                    margin-bottom: 0.45rem;
                    color: rgba(236, 254, 255, 0.88);
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.005em;
                }
                .terms-copy ul {
                    margin: 0.7rem 0 1rem;
                    padding-left: 1.2rem;
                    list-style: none;
                }
                .terms-copy li {
                    position: relative;
                    padding-left: 0.65rem;
                    margin-top: 0.38rem;
                }
                .terms-copy li::before {
                    content: "";
                    position: absolute;
                    left: -0.8rem;
                    top: 0.78em;
                    width: 4px;
                    height: 4px;
                    border-radius: 999px;
                    background: rgba(103, 232, 249, 0.65);
                }
                .terms-copy strong {
                    color: rgba(248, 250, 252, 0.92);
                    font-weight: 600;
                }
                .terms-inline-link {
                    color: rgba(165, 243, 252, 0.96);
                    text-decoration: underline;
                    text-decoration-color: rgba(103, 232, 249, 0.35);
                    text-underline-offset: 3px;
                    transition: color 180ms ease, text-decoration-color 180ms ease;
                }
                .terms-inline-link:hover {
                    color: white;
                    text-decoration-color: rgba(103, 232, 249, 0.8);
                }
                .terms-inline-link:focus-visible {
                    outline: 2px solid rgba(103, 232, 249, 0.6);
                    outline-offset: 3px;
                    border-radius: 2px;
                }
                @media (min-width: 640px) {
                    .terms-copy { font-size: 15px; line-height: 1.95; }
                    .terms-copy h3 { font-size: 14px; }
                }
                @media (min-width: 1800px) {
                    .terms-copy { font-size: 16px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    html { scroll-behavior: auto !important; }
                    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
                }
            `}</style>
    </main>
  )
}

export default TermsAndConditions
