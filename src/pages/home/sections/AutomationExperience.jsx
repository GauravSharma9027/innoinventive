import { useEffect, useState } from "react";
import {
    Activity,
    BarChart3,
    CheckCircle2,
    FileText,
    Gauge,
    Mail,
    MessageSquare,
    Network,
    Settings,
    Sparkles,
    Table2,
    Users,
    Zap,
} from "lucide-react";

import Logo from "../../../assets/Logo.png";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

const WorkflowViews = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: BarChart3,
        steps: [
            {
                id: 1,
                title: "New Customer",
                subtitle: "Form Submission",
                icon: Users,
            },
            {
                id: 2,
                title: "AI Processing",
                subtitle: "Analyze & Categorize",
                icon: Sparkles,
            },
            {
                id: 3,
                title: "Auto Response",
                subtitle: "Send Personalized Email",
                icon: Mail,
            },
            {
                id: 4,
                title: "Update CRM",
                subtitle: "Log Customer Data",
                icon: Network,
            },
        ],
        metrics: [
            {
                id: 1,
                label: "Total Processes",
                value: 248,
                decimals: 0,
                suffix: "",
                progress: 82,
            },
            {
                id: 2,
                label: "Time Saved",
                value: 1240,
                decimals: 0,
                suffix: " hrs",
                progress: 68,
            },
            {
                id: 3,
                label: "Error Reduction",
                value: 99.2,
                decimals: 1,
                suffix: "%",
                progress: 96,
            },
        ],
    },
    {
        id: "automations",
        label: "Automations",
        icon: Zap,
        steps: [
            {
                id: 1,
                title: "Lead Capture",
                subtitle: "Incoming Lead Detected",
                icon: Users,
            },
            {
                id: 2,
                title: "AI Qualification",
                subtitle: "Score & Categorize Lead",
                icon: Sparkles,
            },
            {
                id: 3,
                title: "CRM Routing",
                subtitle: "Assign Sales Owner",
                icon: Network,
            },
            {
                id: 4,
                title: "Follow-up Trigger",
                subtitle: "Start Email Sequence",
                icon: Mail,
            },
        ],
        metrics: [
            {
                id: 1,
                label: "Active Flows",
                value: 318,
                decimals: 0,
                suffix: "",
                progress: 88,
            },
            {
                id: 2,
                label: "Tasks Automated",
                value: 2840,
                decimals: 0,
                suffix: "",
                progress: 76,
            },
            {
                id: 3,
                label: "Automation Success",
                value: 98.4,
                decimals: 1,
                suffix: "%",
                progress: 98,
            },
        ],
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: Activity,
        steps: [
            {
                id: 1,
                title: "Collect Data",
                subtitle: "Live Business Signals",
                icon: Activity,
            },
            {
                id: 2,
                title: "Detect Trends",
                subtitle: "AI Pattern Recognition",
                icon: Sparkles,
            },
            {
                id: 3,
                title: "Generate Insights",
                subtitle: "Business Intelligence",
                icon: BarChart3,
            },
            {
                id: 4,
                title: "Smart Recommendation",
                subtitle: "Actionable Next Step",
                icon: Gauge,
            },
        ],
        metrics: [
            {
                id: 1,
                label: "Data Points",
                value: 18640,
                decimals: 0,
                suffix: "",
                progress: 91,
            },
            {
                id: 2,
                label: "Insights Generated",
                value: 624,
                decimals: 0,
                suffix: "",
                progress: 73,
            },
            {
                id: 3,
                label: "Prediction Accuracy",
                value: 96.8,
                decimals: 1,
                suffix: "%",
                progress: 97,
            },
        ],
    },
    {
        id: "integrations",
        label: "Integrations",
        icon: Network,
        steps: [
            {
                id: 1,
                title: "Connect Platform",
                subtitle: "Secure API Connection",
                icon: Network,
            },
            {
                id: 2,
                title: "Sync Data",
                subtitle: "Real-time Synchronization",
                icon: Activity,
            },
            {
                id: 3,
                title: "Validate Records",
                subtitle: "Automatic Data Checks",
                icon: CheckCircle2,
            },
            {
                id: 4,
                title: "Sync Complete",
                subtitle: "Systems Fully Connected",
                icon: Network,
            },
        ],
        metrics: [
            {
                id: 1,
                label: "Connected Apps",
                value: 42,
                decimals: 0,
                suffix: "",
                progress: 84,
            },
            {
                id: 2,
                label: "Sync Success",
                value: 99.6,
                decimals: 1,
                suffix: "%",
                progress: 99,
            },
            {
                id: 3,
                label: "Data Synced",
                value: 78,
                decimals: 0,
                suffix: "K",
                progress: 78,
            },
        ],
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings,
        steps: [
            {
                id: 1,
                title: "Security Check",
                subtitle: "System Permissions",
                icon: CheckCircle2,
            },
            {
                id: 2,
                title: "Backup System",
                subtitle: "Automatic Data Backup",
                icon: FileText,
            },
            {
                id: 3,
                title: "API Gateway",
                subtitle: "Secure Access Control",
                icon: Network,
            },
            {
                id: 4,
                title: "System Health",
                subtitle: "Continuous Monitoring",
                icon: Gauge,
            },
        ],
        metrics: [
            {
                id: 1,
                label: "System Health",
                value: 99.9,
                decimals: 1,
                suffix: "%",
                progress: 99,
            },
            {
                id: 2,
                label: "Security Score",
                value: 98,
                decimals: 0,
                suffix: "%",
                progress: 98,
            },
            {
                id: 3,
                label: "Backup Success",
                value: 100,
                decimals: 0,
                suffix: "%",
                progress: 100,
            },
        ],
    },
];

const IntegrationData = [
    {
        id: 1,
        name: "CRM",
        icon: Users,
        side: "left",
        positionClass: "integration-left-top",
        connectionPath:
            "M 184 65 C 220 65 248 72 273 84 C 308 101 347 100 408 83",
        startX: 184,
        startY: 65,
        endX: 408,
        endY: 83,
    },
    {
        id: 2,
        name: "Gmail",
        icon: Mail,
        side: "left",
        positionClass: "integration-left-middle",
        connectionPath:
            "M 174 178 C 222 178 253 185 282 194 C 322 207 359 203 408 195",
        startX: 174,
        startY: 178,
        endX: 408,
        endY: 195,
    },
    {
        id: 3,
        name: "Slack",
        icon: MessageSquare,
        side: "left",
        positionClass: "integration-left-bottom",
        connectionPath:
            "M 184 291 C 222 291 248 284 273 273 C 310 256 348 258 408 276",
        startX: 184,
        startY: 291,
        endX: 408,
        endY: 276,
    },
    {
        id: 4,
        name: "Notion",
        icon: FileText,
        side: "right",
        positionClass: "integration-right-top",
        connectionPath:
            "M 1256 65 C 1220 65 1192 72 1167 84 C 1132 101 1093 100 1032 83",
        startX: 1256,
        startY: 65,
        endX: 1032,
        endY: 83,
    },
    {
        id: 5,
        name: "HubSpot",
        icon: Gauge,
        side: "right",
        positionClass: "integration-right-middle",
        connectionPath:
            "M 1266 178 C 1218 178 1187 185 1158 194 C 1118 207 1081 203 1032 195",
        startX: 1266,
        startY: 178,
        endX: 1032,
        endY: 195,
    },
    {
        id: 6,
        name: "Google Sheets",
        icon: Table2,
        side: "right",
        positionClass: "integration-right-bottom",
        connectionPath:
            "M 1256 291 C 1218 291 1192 284 1167 273 C 1130 256 1092 258 1032 276",
        startX: 1256,
        startY: 291,
        endX: 1032,
        endY: 276,
    },
];

const AnimatedNumber = ({
    value,
    decimals = 0,
    suffix = "",
    duration = 1200,
    resetKey,
}) => {
    const [CurrentValue, SetCurrentValue] = useState(0);

    useEffect(() => {
        const StartTime = performance.now();
        let AnimationFrame;

        const Animate = (CurrentTime) => {
            const Progress = Math.min(
                (CurrentTime - StartTime) / duration,
                1,
            );

            const EaseOut = 1 - Math.pow(1 - Progress, 3);

            SetCurrentValue(value * EaseOut);

            if (Progress < 1) {
                AnimationFrame = requestAnimationFrame(Animate);
            }
        };

        AnimationFrame = requestAnimationFrame(Animate);

        return () => cancelAnimationFrame(AnimationFrame);
    }, [value, duration, resetKey]);

    return (
        <span>
            {CurrentValue.toFixed(decimals)}
            {suffix}
        </span>
    );
};

const IntegrationNode = ({ integration }) => {
    const Icon = integration.icon;

    return (
        <div className={`absolute z-30 ${integration.positionClass}`}>
            <div className="integration-card-group">
                <div className={`integration-card integration-card-${integration.side}`}>
                    <span className="integration-card-depth integration-card-depth-back" />

                    <span className="integration-card-depth integration-card-depth-side" />

                    <div className="integration-card-face">
                        <span className="pointer-events-none absolute inset-x-5 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/45 to-transparent" />

                        <span className="integration-card-reflection pointer-events-none absolute -left-[40%] top-[-25%] h-[170%] w-[28%] rotate-[23deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                        <span className="pointer-events-none absolute inset-[3px] rounded-[10px] border border-white/[0.025]" />

                        <div className="relative z-10 shrink-0 scale-[0.9]">
                            <PremiumIconBadge
                                icon={Icon}
                                size="default"
                            />
                        </div>

                        <span className="relative z-10 min-w-0 truncate text-[9px] font-semibold tracking-[-0.01em] text-blue-50">
                            {integration.name}
                        </span>

                        <span className="integration-status-dot absolute right-[7px] top-[7px] h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,1)]" />

                        <span className="pointer-events-none absolute bottom-[2px] left-1/2 h-[2px] w-[38px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 blur-[1px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const IntegrationConnections = () => {
    return (
        <svg
            viewBox="0 0 1440 390"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
        >
            <defs>
                <filter
                    id="AutomationConnectionGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="1.6"
                        result="blur"
                    />

                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <linearGradient
                    id="AutomationConnectionLeft"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#19D3FF" stopOpacity="0.12" />
                    <stop offset="40%" stopColor="#19D3FF" stopOpacity="0.50" />
                    <stop offset="76%" stopColor="#19D3FF" stopOpacity="0.78" />
                    <stop offset="100%" stopColor="#1677FF" stopOpacity="0.26" />
                </linearGradient>

                <linearGradient
                    id="AutomationConnectionRight"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#19D3FF" stopOpacity="0.12" />
                    <stop offset="40%" stopColor="#19D3FF" stopOpacity="0.50" />
                    <stop offset="76%" stopColor="#19D3FF" stopOpacity="0.78" />
                    <stop offset="100%" stopColor="#1677FF" stopOpacity="0.26" />
                </linearGradient>
            </defs>

            {IntegrationData.map((Integration) => (
                <g key={`connection-${Integration.id}`}>
                    <path
                        d={Integration.connectionPath}
                        fill="none"
                        stroke="#19D3FF"
                        strokeOpacity="0.08"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#AutomationConnectionGlow)"
                    />

                    <path
                        d={Integration.connectionPath}
                        fill="none"
                        stroke={
                            Integration.side === "left"
                                ? "url(#AutomationConnectionLeft)"
                                : "url(#AutomationConnectionRight)"
                        }
                        strokeWidth="1"
                        strokeDasharray="1 7"
                        strokeLinecap="round"
                        opacity="0.72"
                    />

                    <path
                        d={Integration.connectionPath}
                        fill="none"
                        stroke="#19D3FF"
                        strokeWidth="2"
                        strokeDasharray="1 22 5 22"
                        strokeLinecap="round"
                        opacity="0.78"
                        filter="url(#AutomationConnectionGlow)"
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="-46"
                            dur="2.8s"
                            repeatCount="indefinite"
                        />
                    </path>

                    <circle
                        cx={Integration.startX}
                        cy={Integration.startY}
                        r="2.2"
                        fill="#19D3FF"
                        opacity="0.75"
                    />

                    <circle
                        cx={Integration.endX}
                        cy={Integration.endY}
                        r="2.1"
                        fill="#19D3FF"
                        opacity="0.65"
                    />
                </g>
            ))}
        </svg>
    );
};

const DashboardSidebar = ({
    ActiveViewId,
    OnSelectView,
}) => {
    return (
        <aside className="dashboard-side-panel relative z-30 border-r border-blue-300/[0.08] bg-[linear-gradient(180deg,rgba(7,26,56,0.92),rgba(4,18,43,0.84))] px-3 py-4">
            <div className="flex items-center gap-2 border-b border-blue-300/[0.07] pb-4">
                <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-300/20 bg-[#0A2148] shadow-[0_0_18px_rgba(22,119,255,0.12)]">
                    <span className="absolute inset-0 rounded-lg bg-cyan-400/[0.04] blur-md" />

                    <img
                        src={Logo}
                        alt="InnoInventive"
                        className="relative z-10 w-[19px] object-contain"
                    />
                </div>

                <span className="text-[7px] font-semibold text-cyan-300">
                    InnoInventive
                </span>
            </div>

            <div className="mt-5 space-y-2">
                {WorkflowViews.map((Item, Index) => {
                    const SidebarIcon = Item.icon;
                    const IsActive = ActiveViewId === Item.id;

                    return (
                        <button
                            key={Item.id}
                            type="button"
                            onClick={() => OnSelectView(Index)}
                            className={`dashboard-nav-item group relative flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[7px] ${IsActive
                                    ? "dashboard-nav-active text-white"
                                    : "text-blue-100/50"
                                }`}
                        >
                            {IsActive && (
                                <>
                                    <span className="absolute inset-0 rounded-lg border border-cyan-300/20 bg-gradient-to-r from-cyan-400/[0.10] via-blue-500/[0.07] to-violet-500/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_18px_rgba(22,119,255,0.10)]" />

                                    <span className="absolute -left-[1px] top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-cyan-300 via-blue-500 to-violet-500 shadow-[0_0_9px_rgba(25,211,255,0.8)]" />
                                </>
                            )}

                            <span
                                className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-md border ${IsActive
                                        ? "border-cyan-300/20 bg-[#102E5A] text-cyan-300 shadow-[inset_0_0_12px_rgba(25,211,255,0.08)]"
                                        : "border-blue-300/[0.06] bg-[#071A38]/60 text-blue-100/45"
                                    }`}
                            >
                                <SidebarIcon
                                    size={10}
                                    strokeWidth={1.7}
                                />
                            </span>

                            <span className="relative z-10 flex-1 truncate">
                                {Item.label}
                            </span>

                            {IsActive && (
                                <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.9)]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </aside>
    );
};

const WorkflowPanel = ({
    ActiveView,
    AnimationCycle,
}) => {
    return (
        <main className="dashboard-workflow-panel relative z-20 min-w-0 border-r border-blue-300/[0.06] px-4 py-4 [transform:translateZ(12px)]">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-[10px] font-semibold tracking-[-0.01em] text-white">
                        {ActiveView.label}
                    </h3>

                    <p className="mt-1 text-[6px] text-blue-100/45">
                        Intelligent workflow automation
                    </p>
                </div>

                <div className="dashboard-running-pill flex items-center gap-1 rounded-full border border-emerald-300/20 bg-gradient-to-r from-emerald-400/[0.10] to-cyan-300/[0.05] px-2 py-1 text-[6px] text-emerald-300 shadow-[0_0_14px_rgba(74,222,128,0.05)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(74,222,128,0.9)]" />
                    Running
                </div>
            </div>

            <div className="mt-4 space-y-2">
                {ActiveView.steps.map((Step, Index) => {
                    const StepIcon = Step.icon;

                    return (
                        <div
                            key={`${AnimationCycle}-${Step.id}`}
                            className="dashboard-flow-card group relative overflow-hidden rounded-[9px] border border-cyan-300/[0.08] bg-[linear-gradient(145deg,rgba(8,34,72,0.86),rgba(4,19,43,0.92))] px-2.5 py-2 shadow-[0_8px_15px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] [transform-style:preserve-3d]"
                            style={{
                                animationDelay: `${Index * 120}ms`,
                            }}
                        >
                            <span className="dashboard-flow-depth absolute inset-x-1 bottom-[-3px] h-2 rounded-full bg-[#020B20]/80 blur-[2px]" />

                            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />

                            <span className="pointer-events-none absolute -left-[70%] top-[-70%] h-[220%] w-[22%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />

                            <div className="relative flex items-center gap-2.5 [transform:translateZ(10px)]">
                                <div className="workflow-step-icon relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-300/10 bg-[linear-gradient(145deg,#103466,#071A38)] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_7px_12px_rgba(0,0,0,0.2)]">
                                    <span className="absolute inset-[2px] rounded-md border border-white/[0.025]" />

                                    <StepIcon
                                        size={12}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-[7px] font-medium text-white">
                                        {Step.id}. {Step.title}
                                    </p>

                                    <p className="mt-0.5 truncate text-[6px] text-blue-100/45">
                                        {Step.subtitle}
                                    </p>
                                </div>

                                <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/15 bg-emerald-400/[0.06]">
                                    <CheckCircle2
                                        size={10}
                                        className="text-emerald-300 drop-shadow-[0_0_7px_rgba(74,222,128,0.7)]"
                                    />
                                </div>
                            </div>

                            <span className="pointer-events-none absolute bottom-0 left-[9%] h-px w-[82%] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

const ImpactPanel = ({
    ActiveView,
    AnimationCycle,
}) => {
    return (
        <aside className="dashboard-impact-panel relative z-20 bg-[linear-gradient(180deg,rgba(7,26,56,0.84),rgba(4,18,43,0.76))] px-3 py-4 [transform:translateZ(14px)]">
            <h3 className="text-[9px] font-semibold tracking-[-0.01em] text-white">
                Automation Impact
            </h3>

            <div className="mt-4 space-y-5">
                {ActiveView.metrics.map((Metric, Index) => (
                    <div
                        key={`${AnimationCycle}-${Metric.id}`}
                        className="dashboard-metric-item"
                        style={{
                            animationDelay: `${Index * 100}ms`,
                        }}
                    >
                        <p className="text-[6px] text-blue-100/40">
                            {Metric.label}
                        </p>

                        <div className="mt-1 flex items-center justify-between gap-1">
                            <span className="text-[11px] font-semibold tracking-[-0.02em] text-white">
                                <AnimatedNumber
                                    value={Metric.value}
                                    decimals={Metric.decimals}
                                    suffix={Metric.suffix}
                                    resetKey={AnimationCycle}
                                />
                            </span>

                            <span className="text-[6px] font-medium text-emerald-300">
                                +{Metric.progress}%
                            </span>
                        </div>

                        <div className="dashboard-progress-shell relative mt-2 h-[5px] overflow-hidden rounded-full border border-blue-300/[0.06] bg-[#020B20]/80">
                            <div
                                key={`${AnimationCycle}-${Metric.id}-bar`}
                                className="dashboard-progress-bar relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                                style={{
                                    "--progress-width": `${Metric.progress}%`,
                                }}
                            >
                                <span className="absolute inset-y-0 right-0 w-4 bg-white/25 blur-[3px]" />
                                <span className="absolute inset-x-0 top-0 h-px bg-white/20" />
                            </div>
                        </div>

                        <div className="mt-1.5 flex justify-between text-[5px] text-blue-100/25">
                            <span>0</span>
                            <span>{Metric.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

const DashboardPlatform = () => {
    return (
        <div className="dashboard-platform absolute left-1/2 top-[302px] z-10 h-[86px] w-[390px] -translate-x-1/2 [perspective:1200px]">

            {/* Vertical holographic neck */}
            <div className="absolute left-1/2 top-[-18px] h-[48px] w-[34px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-cyan-300/[0.18] via-blue-400/[0.10] to-transparent blur-[2px]" />

            <div className="absolute left-1/2 top-[-16px] h-[48px] w-[12px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-200/30 via-blue-400/20 to-transparent blur-[3px]" />

            {/* Deep shadow */}
            <div className="absolute left-1/2 top-[72px] h-[20px] w-[280px] -translate-x-1/2 rounded-full bg-black/55 blur-[15px]" />

            {/* Lower 3D base */}
            <div className="absolute left-1/2 top-[57px] h-[42px] w-[310px] -translate-x-1/2 rounded-[50%] border border-blue-300/25 bg-[linear-gradient(180deg,rgba(15,48,98,0.95),rgba(3,16,38,0.98))] shadow-[0_16px_35px_rgba(0,0,0,0.46),0_0_32px_rgba(22,119,255,0.16)] [transform:rotateX(68deg)]" />

            {/* Elevated cyan ring */}
            <div className="absolute left-1/2 top-[43px] h-[42px] w-[275px] -translate-x-1/2 rounded-[50%] border border-cyan-300/55 bg-cyan-300/[0.025] shadow-[0_0_28px_rgba(25,211,255,0.18)] [transform:rotateX(68deg)_translateZ(12px)]" />

            {/* Inner violet ring */}
            <div className="absolute left-1/2 top-[34px] h-[29px] w-[188px] -translate-x-1/2 rounded-[50%] border border-violet-300/40 shadow-[0_0_22px_rgba(124,60,255,0.12)] [transform:rotateX(68deg)_translateZ(18px)]" />

            {/* Holographic core */}
            <div className="dashboard-core-glow absolute left-1/2 top-[24px] h-[34px] w-[116px] -translate-x-1/2 rounded-[50%] border border-cyan-200/55 bg-gradient-to-r from-cyan-300/[0.05] via-cyan-200/[0.18] to-violet-400/[0.07] shadow-[0_0_32px_rgba(25,211,255,0.28)] [transform:rotateX(68deg)_translateZ(28px)]" />

            {/* Core beam */}
            <div className="absolute left-1/2 top-[8px] h-[48px] w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-200/60 via-blue-400/20 to-transparent blur-[1px]" />

            {/* Floating light slices */}
            <div className="dashboard-platform-slice absolute left-1/2 top-[31px] h-[2px] w-[150px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent blur-[1px]" />

            <div className="dashboard-platform-slice-delayed absolute left-1/2 top-[48px] h-[1px] w-[210px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-300/50 to-transparent blur-[1px]" />
        </div>
    );
};

const AutomationDashboard = () => {
    const [
        ActiveViewIndex,
        SetActiveViewIndex,
    ] = useState(0);

    const [
        AnimationCycle,
        SetAnimationCycle,
    ] = useState(0);

    const ActiveView =
        WorkflowViews[ActiveViewIndex];

    useEffect(() => {
        const AutoSwitchTimer = window.setInterval(() => {
            SetActiveViewIndex(
                (PreviousIndex) =>
                    (PreviousIndex + 1) %
                    WorkflowViews.length,
            );

            SetAnimationCycle(
                (PreviousCycle) =>
                    PreviousCycle + 1,
            );
        }, 3000);

        return () =>
            window.clearInterval(
                AutoSwitchTimer,
            );
    }, []);

    const HandleViewSelect = (ViewIndex) => {
        SetActiveViewIndex(ViewIndex);

        SetAnimationCycle(
            (PreviousCycle) =>
                PreviousCycle + 1,
        );
    };

    return (
        <div className="dashboard-perspective relative z-20 mx-auto w-full max-w-[620px]">

            {/* Ambient depth */}
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[545px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[82px]" />

            {/* Back extrusion */}
            <div className="dashboard-depth absolute inset-x-[4%] bottom-[-28px] top-[7%] rounded-[21px] border border-blue-400/[0.08] bg-[#020B20]/90 shadow-[0_45px_70px_rgba(0,0,0,0.58)]" />

            {/* Secondary extrusion */}
            <div className="dashboard-side-depth absolute inset-x-[1.5%] bottom-[-12px] top-[3%] rounded-[20px] border border-cyan-300/[0.08] bg-[#04132B]/90" />

            {/* Main console */}
            <div className="dashboard-shell group relative overflow-hidden rounded-[20px] border border-cyan-300/45 bg-[linear-gradient(145deg,rgba(12,42,87,0.99),rgba(4,20,47,0.99))] shadow-[0_30px_70px_rgba(0,0,0,0.46),0_0_65px_rgba(22,119,255,0.19),inset_0_1px_0_rgba(255,255,255,0.13)] [transform-style:preserve-3d]">

                <div className="absolute inset-x-10 top-0 z-30 h-px bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent" />

                <div className="absolute inset-x-[18%] top-[2px] z-30 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-[1px]" />

                <div className="dashboard-reflection pointer-events-none absolute -left-[35%] top-[-50%] z-40 h-[220%] w-[18%] rotate-[22deg] bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />

                <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/[0.035]" />

                <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:22px_22px]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[55px]" />

                <div className="dashboard-active-line pointer-events-none absolute inset-x-0 top-0 z-30 h-[2px] bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

                <div className="relative grid min-h-[320px] grid-cols-[126px_minmax(0,1fr)_118px] [transform-style:preserve-3d]">
                    <DashboardSidebar
                        ActiveViewId={ActiveView.id}
                        OnSelectView={HandleViewSelect}
                    />

                    <WorkflowPanel
                        ActiveView={ActiveView}
                        AnimationCycle={AnimationCycle}
                    />

                    <ImpactPanel
                        ActiveView={ActiveView}
                        AnimationCycle={AnimationCycle}
                    />
                </div>

                <div className="pointer-events-none absolute inset-x-[12%] bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
            </div>
        </div>
    );
};

const AutomationExperience = () => {
    return (
        <section className="relative left-1/2 min-h-[720px] w-screen max-w-none -translate-x-1/2 overflow-hidden bg-[#061633] text-white">
            <style>
                {`
                    @keyframes ExperienceWaveMove {
                        0%, 100% {
                            transform: translate3d(0, 0, 0);
                        }

                        50% {
                            transform: translate3d(-24px, 8px, 0);
                        }
                    }

                    @keyframes ExperienceParticleFloat {
                        0%, 100% {
                            transform: translateY(0);
                            opacity: 0.25;
                        }

                        50% {
                            transform: translateY(-7px);
                            opacity: 1;
                        }
                    }

                    @keyframes ExperiencePlatformPulse {
                        0%, 100% {
                            transform: translateZ(0) scale(0.96);
                            opacity: 0.55;
                        }

                        50% {
                            transform: translateZ(14px) scale(1.04);
                            opacity: 1;
                        }
                    }

                    @keyframes ExperienceEnergySweep {
                        0% {
                            transform: translateX(-120%);
                            opacity: 0;
                        }

                        20% {
                            opacity: 0.15;
                        }

                        50% {
                            opacity: 0.85;
                        }

                        80% {
                            opacity: 0.15;
                        }

                        100% {
                            transform: translateX(220%);
                            opacity: 0;
                        }
                    }

                    @keyframes IntegrationStatusPulse {
                        0%, 100% {
                            opacity: 0.4;
                            transform: scale(0.85);
                        }

                        50% {
                            opacity: 1;
                            transform: scale(1.15);
                        }
                    }

                    @keyframes AutomationSceneFloat {
                        0%, 100% {
                            transform:
                                translate3d(0, 0, 0)
                                rotateX(0.25deg);
                        }

                        25% {
                            transform:
                                translate3d(0, -2px, 0)
                                rotateX(0.6deg);
                        }

                        50% {
                            transform:
                                translate3d(0, -5px, 0)
                                rotateX(0.25deg);
                        }

                        75% {
                            transform:
                                translate3d(0, -2px, 0)
                                rotateX(-0.15deg);
                        }
                    }

                    @keyframes DashboardReflection {
                        0% {
                            transform:
                                translateX(-130%)
                                rotate(22deg);
                            opacity: 0;
                        }

                        15% {
                            opacity: 0.35;
                        }

                        42% {
                            opacity: 0.75;
                        }

                        65% {
                            opacity: 0.15;
                        }

                        100% {
                            transform:
                                translateX(760%)
                                rotate(22deg);
                            opacity: 0;
                        }
                    }

                    @keyframes DashboardContentIn {
                        0% {
                            opacity: 0;
                            transform:
                                translate3d(20px, 0, 15px)
                                rotateY(-6deg)
                                scale(0.975);
                            filter: blur(2px);
                        }

                        65% {
                            opacity: 0.9;
                        }

                        100% {
                            opacity: 1;
                            transform:
                                translate3d(0, 0, 0)
                                rotateY(0)
                                scale(1);
                            filter: blur(0);
                        }
                    }

                    @keyframes DashboardMetricIn {
                        0% {
                            opacity: 0;
                            transform:
                                translate3d(18px, 0, 12px)
                                rotateY(-4deg)
                                scale(0.95);
                            filter: blur(2px);
                        }

                        100% {
                            opacity: 1;
                            transform:
                                translate3d(0, 0, 0)
                                rotateY(0)
                                scale(1);
                            filter: blur(0);
                        }
                    }

                    @keyframes DashboardProgressFill {
                        from {
                            width: 0;
                        }

                        to {
                            width: var(--progress-width);
                        }
                    }

                    @keyframes DashboardActiveLine {
                        0%, 100% {
                            opacity: 0.25;
                        }

                        50% {
                            opacity: 0.95;
                        }
                    }

                    @keyframes DashboardCorePulse {
                        0%, 100% {
                            transform:
                                translateX(-50%)
                                scaleX(0.92);
                            opacity: 0.5;
                        }

                        50% {
                            transform:
                                translateX(-50%)
                                scaleX(1.06);
                            opacity: 1;
                        }
                    }

                    @keyframes DashboardPlatformSlice {
                        0% {
                            transform:
                                translateX(-50%)
                                translateX(-50px);
                            opacity: 0;
                        }

                        30% {
                            opacity: 0.9;
                        }

                        70% {
                            opacity: 0.25;
                        }

                        100% {
                            transform:
                                translateX(-50%)
                                translateX(50px);
                            opacity: 0;
                        }
                    }

                    .experience-wave {
                        animation:
                            ExperienceWaveMove
                            14s
                            ease-in-out
                            infinite;
                    }

                    .experience-particle {
                        animation:
                            ExperienceParticleFloat
                            3s
                            ease-in-out
                            infinite;
                    }

                    .experience-platform-pulse {
                        animation:
                            ExperiencePlatformPulse
                            4s
                            ease-in-out
                            infinite;
                    }

                    .experience-energy {
                        animation:
                            ExperienceEnergySweep
                            5.5s
                            ease-in-out
                            infinite;
                    }

                    .integration-status-dot {
                        animation:
                            IntegrationStatusPulse
                            2.4s
                            ease-in-out
                            infinite;
                    }

                    .automation-scene-float {
                        animation:
                            AutomationSceneFloat
                            6s
                            ease-in-out
                            infinite;
                        transform-style:
                            preserve-3d;
                        will-change:
                            transform;
                    }

                    .dashboard-perspective {
                        perspective:
                            1800px;
                    }

                    /*
                     * Smooth dashboard hover:
                     * no competing transform animation here.
                     */
                    .dashboard-shell {
                        transform:
                            perspective(1800px)
                            rotateX(3.5deg)
                            rotateY(-1.5deg)
                            translateZ(22px);

                        transform-style:
                            preserve-3d;

                        transition:
                            transform 900ms
                            cubic-bezier(
                                0.16,
                                1,
                                0.3,
                                1
                            ),
                            box-shadow 900ms
                            cubic-bezier(
                                0.16,
                                1,
                                0.3,
                                1
                            );

                        will-change:
                            transform,
                            box-shadow;
                    }

                    .dashboard-shell:hover {
                        transform:
                            perspective(1800px)
                            rotateX(5deg)
                            rotateY(-2.5deg)
                            translate3d(0, -6px, 34px);

                        box-shadow:
                            0 38px 80px
                                rgba(0,0,0,0.50),
                            0 0 80px
                                rgba(22,119,255,0.24),
                            inset 0 1px 0
                                rgba(255,255,255,0.16);
                    }

                    .dashboard-depth {
                        transform:
                            translateZ(-38px)
                            rotateX(1deg);
                    }

                    .dashboard-side-depth {
                        transform:
                            translateZ(-18px)
                            translateY(5px);
                    }

                    .dashboard-reflection {
                        animation:
                            DashboardReflection
                            6.5s
                            ease-in-out
                            infinite;
                    }

                    .dashboard-active-line {
                        animation:
                            DashboardActiveLine
                            3s
                            ease-in-out
                            infinite;
                    }

                    .dashboard-nav-item {
                        transform-style:
                            preserve-3d;

                        transition:
                            transform 400ms
                            cubic-bezier(
                                0.22,
                                1,
                                0.36,
                                1
                            ),
                            color 350ms ease,
                            background-color 350ms ease,
                            box-shadow 350ms ease;
                    }

                    .dashboard-nav-item:hover {
                        transform:
                            translate3d(
                                3px,
                                0,
                                8px
                            );
                    }

                    .dashboard-nav-active {
                        transform:
                            translateZ(8px);
                    }

                    .dashboard-running-pill {
                        box-shadow:
                            inset 0 1px 0
                                rgba(255,255,255,0.05),
                            0 0 18px
                                rgba(74,222,128,0.04);
                    }

                    .dashboard-flow-card {
                        opacity:
                            0;

                        transform-style:
                            preserve-3d;

                        animation:
                            DashboardContentIn
                            720ms
                            cubic-bezier(
                                0.22,
                                1,
                                0.36,
                                1
                            )
                            forwards;

                        will-change:
                            transform,
                            opacity;
                    }

                    .dashboard-flow-card::after {
                        content:
                            "";

                        position:
                            absolute;

                        left:
                            0;

                        right:
                            0;

                        bottom:
                            0;

                        height:
                            1px;

                        background:
                            linear-gradient(
                                90deg,
                                transparent,
                                rgba(25,211,255,0.18),
                                transparent
                            );
                    }

                    .dashboard-flow-depth {
                        transform:
                            translateZ(-8px);
                    }

                    .workflow-step-icon {
                        transform:
                            translateZ(12px);
                    }

                    .dashboard-metric-item {
                        opacity:
                            0;

                        transform-style:
                            preserve-3d;

                        animation:
                            DashboardMetricIn
                            650ms
                            cubic-bezier(
                                0.22,
                                1,
                                0.36,
                                1
                            )
                            forwards;

                        will-change:
                            transform,
                            opacity;
                    }

                    .dashboard-progress-shell {
                        box-shadow:
                            inset 0 1px 2px
                                rgba(0,0,0,0.4),
                            0 0 8px
                                rgba(22,119,255,0.04);

                        transform:
                            translateZ(7px);
                    }

                    .dashboard-progress-bar {
                        width:
                            0;

                        animation:
                            DashboardProgressFill
                            1.25s
                            cubic-bezier(
                                0.22,
                                1,
                                0.36,
                                1
                            )
                            350ms
                            forwards;

                        box-shadow:
                            0 0 12px
                                rgba(25,211,255,0.16);
                    }

                    .dashboard-platform {
                        transform-style:
                            preserve-3d;
                    }

                    .dashboard-core-glow {
                        animation:
                            DashboardCorePulse
                            3.2s
                            ease-in-out
                            infinite;
                    }

                    .dashboard-platform-slice {
                        animation:
                            DashboardPlatformSlice
                            3.6s
                            ease-in-out
                            infinite;
                    }

                    .dashboard-platform-slice-delayed {
                        animation:
                            DashboardPlatformSlice
                            4.4s
                            0.8s
                            ease-in-out
                            infinite;
                    }

                    .integration-card-group {
                        width:
                            104px;
                        height:
                            52px;
                        perspective:
                            1100px;
                    }

                    .integration-card {
                        position:
                            relative;
                        width:
                            104px;
                        height:
                            52px;

                        transform-style:
                            preserve-3d;

                        transition:
                            transform 650ms
                            cubic-bezier(
                                0.22,
                                1,
                                0.36,
                                1
                            ),
                            filter 650ms ease;

                        will-change:
                            transform;
                    }

                    .integration-card-left {
                        transform:
                            perspective(1100px)
                            rotateY(14deg)
                            rotateX(2deg)
                            rotateZ(-2deg)
                            translateZ(10px);
                    }

                    .integration-card-right {
                        transform:
                            perspective(1100px)
                            rotateY(-14deg)
                            rotateX(2deg)
                            rotateZ(2deg)
                            translateZ(10px);
                    }

                    .integration-card-group:hover
                    .integration-card-left {
                        transform:
                            perspective(1100px)
                            rotateY(19deg)
                            rotateX(4deg)
                            rotateZ(-3deg)
                            translate3d(0,-7px,20px);

                        filter:
                            drop-shadow(
                                0 15px 27px
                                rgba(25,211,255,0.18)
                            );
                    }

                    .integration-card-group:hover
                    .integration-card-right {
                        transform:
                            perspective(1100px)
                            rotateY(-19deg)
                            rotateX(4deg)
                            rotateZ(3deg)
                            translate3d(0,-7px,20px);

                        filter:
                            drop-shadow(
                                0 15px 27px
                                rgba(25,211,255,0.18)
                            );
                    }

                    .integration-card-face {
                        position:
                            relative;
                        z-index:
                            3;
                        display:
                            flex;
                        width:
                            100%;
                        height:
                            100%;
                        align-items:
                            center;
                        gap:
                            3px;
                        overflow:
                            hidden;
                        padding:
                            4px 6px;

                        border:
                            1px solid
                            rgba(103,230,255,0.24);

                        border-radius:
                            12px;

                        background:
                            linear-gradient(
                                145deg,
                                rgba(14,52,101,0.98),
                                rgba(5,23,52,0.98) 72%,
                                rgba(3,15,36,0.99)
                            );

                        box-shadow:
                            inset 0 1px 0
                                rgba(255,255,255,0.13),
                            inset 0 -4px 0
                                rgba(0,0,0,0.22),
                            0 9px 20px
                                rgba(0,0,0,0.32),
                            0 0 22px
                                rgba(22,119,255,0.10);

                        transform:
                            translateZ(15px);

                        transform-style:
                            preserve-3d;
                    }

                    .integration-card-depth {
                        position:
                            absolute;
                        pointer-events:
                            none;
                        border-radius:
                            12px;
                    }

                    .integration-card-depth-back {
                        inset:
                            4px -4px -6px 4px;
                        z-index:
                            1;

                        border:
                            1px solid
                            rgba(25,211,255,0.10);

                        background:
                            linear-gradient(
                                145deg,
                                rgba(2,11,32,0.98),
                                rgba(2,11,32,0.88)
                            );

                        box-shadow:
                            0 12px 18px
                            rgba(0,0,0,0.4);

                        transform:
                            translateZ(-12px);
                    }

                    .integration-card-depth-side {
                        inset:
                            2px -3px -3px 2px;
                        z-index:
                            2;

                        border:
                            1px solid
                            rgba(25,211,255,0.10);

                        background:
                            linear-gradient(
                                180deg,
                                rgba(22,119,255,0.20),
                                rgba(5,19,43,0.92)
                            );

                        transform:
                            translateY(4px)
                            translateZ(0);
                    }

                    .integration-card-reflection {
                        transform:
                            translateX(-25px)
                            rotate(23deg);

                        transition:
                            transform
                            900ms
                            cubic-bezier(
                                0.22,
                                1,
                                0.36,
                                1
                            );
                    }

                    .integration-card-group:hover
                    .integration-card-reflection {
                        transform:
                            translateX(95px)
                            rotate(23deg);
                    }

                    .integration-left-top {
                        left:
                            clamp(22px,5.5vw,105px);
                        top:
                            10%;
                    }

                    .integration-left-middle {
                        left:
                            clamp(16px,5vw,95px);
                        top:
                            39%;
                    }

                    .integration-left-bottom {
                        left:
                            clamp(22px,5.5vw,105px);
                        top:
                            68%;
                    }

                    .integration-right-top {
                        right:
                            clamp(22px,5.5vw,105px);
                        top:
                            10%;
                    }

                    .integration-right-middle {
                        right:
                            clamp(16px,5vw,95px);
                        top:
                            39%;
                    }

                    .integration-right-bottom {
                        right:
                            clamp(22px,5.5vw,105px);
                        top:
                            68%;
                    }

                    @media (max-width:900px) {
                        .integration-card-group {
                            width:
                                94px;
                            height:
                                48px;
                        }

                        .integration-card {
                            width:
                                94px;
                            height:
                                48px;
                        }

                        .integration-left-top {
                            left:
                                12px;
                        }

                        .integration-left-middle {
                            left:
                                10px;
                        }

                        .integration-left-bottom {
                            left:
                                12px;
                        }

                        .integration-right-top {
                            right:
                                12px;
                        }

                        .integration-right-middle {
                            right:
                                10px;
                        }

                        .integration-right-bottom {
                            right:
                                12px;
                        }
                    }
                `}
            </style>

            {/* Full width atmosphere */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(22,119,255,0.12),transparent_34%),radial-gradient(circle_at_8%_55%,rgba(25,211,255,0.045),transparent_24%),radial-gradient(circle_at_92%_48%,rgba(124,60,255,0.055),transparent_25%)]" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[90px]" />

            {/* Background waves */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <svg
                    viewBox="0 0 1440 700"
                    preserveAspectRatio="none"
                    className="experience-wave absolute -left-[5%] top-[65px] h-[620px] w-[110%] opacity-70"
                >
                    <defs>
                        <linearGradient
                            id="ExperienceWaveGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#1677FF"
                                stopOpacity="0"
                            />

                            <stop
                                offset="32%"
                                stopColor="#1677FF"
                                stopOpacity="0.45"
                            />

                            <stop
                                offset="57%"
                                stopColor="#19D3FF"
                                stopOpacity="0.75"
                            />

                            <stop
                                offset="100%"
                                stopColor="#7C3CFF"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>

                    <path
                        d="M-120 520 C150 315 360 315 565 440 C780 572 1010 580 1220 365 C1330 252 1440 270 1545 360"
                        fill="none"
                        stroke="url(#ExperienceWaveGradient)"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M-100 565 C155 352 345 355 560 470 C780 590 1020 602 1235 405 C1340 305 1440 315 1540 395"
                        fill="none"
                        stroke="#1677FF"
                        strokeOpacity="0.28"
                        strokeWidth="1"
                    />

                    <path
                        d="M-110 605 C155 395 360 405 570 500 C800 618 1030 630 1245 445 C1360 345 1450 350 1560 430"
                        fill="none"
                        stroke="#19D3FF"
                        strokeOpacity="0.15"
                        strokeWidth="0.8"
                    />
                </svg>
            </div>

            {/* Heading */}
            <div className="relative mx-auto max-w-[1400px] px-6 pt-12 text-center lg:px-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-[#0A1F4A]/60 px-3.5 py-1.5 text-[10px] font-medium text-cyan-300 shadow-[0_0_20px_rgba(25,211,255,0.06)] backdrop-blur-md">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/35 to-cyan-400/20">
                        <Zap
                            size={10}
                            strokeWidth={2}
                        />
                    </span>

                    Automation Experience
                </div>

                <h2 className="mx-auto mt-3 max-w-[900px] text-[clamp(35px,4.4vw,58px)] font-bold leading-[1.02] tracking-[-0.045em]">
                    See What{" "}
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                        Automation
                    </span>{" "}
                    Feels Like.
                </h2>

                <p className="mx-auto mt-4 max-w-[680px] text-[11px] leading-5 text-blue-100/65 sm:text-[12px]">
                    From repetitive tasks to complex workflows, our AI-powered
                    automation turns your business processes
                    <br className="hidden sm:block" />
                    into smooth, intelligent systems — so you can focus on what
                    truly matters.
                </p>
            </div>

            {/* Increased gap between description and dashboard */}
            <div className="relative mt-10 h-[390px] w-full max-w-none px-0">

                <div className="automation-scene-float absolute inset-0">
                    <IntegrationConnections />

                    {IntegrationData.map((Integration) => (
                        <IntegrationNode
                            key={Integration.id}
                            integration={Integration}
                        />
                    ))}

                    <div className="absolute left-1/2 top-[3%] z-20 w-[68%] -translate-x-1/2">
                        <AutomationDashboard />
                    </div>

                    {/* New 3D pedestal directly beneath dashboard */}
                    <DashboardPlatform />
                </div>

                {/* Platform ambient glow */}
                <div className="pointer-events-none absolute left-1/2 top-[296px] h-[85px] w-[390px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[48px]" />

                {/* Ambient particles */}
                <span className="experience-particle absolute left-[25%] top-[43%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.9)]" />

                <span
                    className="experience-particle absolute right-[25%] top-[43%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(22,119,255,0.9)]"
                    style={{
                        animationDelay:
                            "0.8s",
                    }}
                />

                <span
                    className="experience-particle absolute left-[31%] bottom-[10%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(124,60,255,0.95)]"
                    style={{
                        animationDelay:
                            "1.4s",
                    }}
                />

                <span
                    className="experience-particle absolute right-[31%] bottom-[9%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.95)]"
                    style={{
                        animationDelay:
                            "2s",
                    }}
                />
            </div>
        </section>
    );
};

export default AutomationExperience;