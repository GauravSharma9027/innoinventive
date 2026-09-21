import { Bot, ChartNoAxesCombined, Database, Gauge, Settings, TrendingUp } from "lucide-react";

export const HeroAutomationCards = [
    {
        id: "process-automation",
        title: "Process Automation",
        icon: Settings,
        position: "left-top",
        points: ["Save Time", "Reduce Errors", "Increase Efficiency"],
    },
    {
        id: "ai-integration",
        title: "AI Integration",
        icon: Bot,
        position: "right-top",
        points: ["Machine Learning", "Predictive Insights", "Better Decisions"],
    },
    {
        id: "smart-analytics",
        title: "Smart Analytics",
        icon: ChartNoAxesCombined,
        position: "left-middle",
        points: ["Real-time Data", "Business Insights", "Performance Tracking"],
    },
    {
        id: "business-growth",
        title: "Business Growth",
        icon: TrendingUp,
        position: "right-middle",
        points: ["More Revenue", "Better Reach", "Scalable Growth"],
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
        value: "500+",
        label: "Businesses Automated",
        icon: Settings,
    },
    {
        id: "productivity-increase",
        value: "300%",
        label: "Avg. Productivity Increase",
        icon: TrendingUp,
    },
    {
        id: "system-uptime",
        value: "99.9%",
        label: "System Uptime",
        icon: Gauge,
    },
    {
        id: "happy-clients",
        value: "50+",
        label: "Happy Clients",
        icon: Bot,
    },
];