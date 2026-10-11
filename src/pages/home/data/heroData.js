import { Bot, ChartNoAxesCombined, Database, Gauge, Settings, TrendingUp } from "lucide-react";

export const HeroAutomationCards = [
    {
        id: "process-automation",
        title: "CMS Websites",
        icon: Settings,
        position: "left-top",
        points: [
            "WordPress & Shopify",
            "Webflow & Wix",
            "Easy content updates",
        ],
    },
    {
        id: "ai-integration",
        title: "Custom Web Builds",
        icon: Bot,
        position: "right-top",
        points: [
            "React & Next.js",
            "Angular & Vue.js",
            "Laravel Development",
        ],
    },
    {
        id: "smart-analytics",
        title: "Apps & Backend",
        icon: ChartNoAxesCombined,
        position: "left-middle",
        points: [
            "Node.js & Express",
            "PHP Backend Systems",
            "React Native & Flutter",
        ],
    },
    {
        id: "business-growth",
        title: "Workflow Automation",
        icon: TrendingUp,
        position: "right-middle",
        points: [
            "n8n Workflows",
            "Connect Everyday Tools",
            "Cut Repetitive Work",
        ],
    },
];

export const HeroFloatingIcons = [
    {
        id: "database",
        icon: Database,
        position: "top-left",
    },
    {
        id: "gauge",
        icon: Gauge,
        position: "top-right",
    },
];

export const HeroStatistics = [
    {
        id: "automated-businesses",
        value: "4",
        label: "CMS Platforms",
        icon: Settings,
    },
    {
        id: "productivity-increase",
        value: "5",
        label: "Custom Web Technologies",
        icon: TrendingUp,
    },
    {
        id: "system-uptime",
        value: "3",
        label: "Backend Technologies",
        icon: Gauge,
    },
    {
        id: "happy-clients",
        value: "2",
        label: "Mobile App Frameworks",
        icon: Bot,
    },
];