import { SiReact, SiPostgresql, SiMysql, SiExpress, SiNodedotjs } from "react-icons/si";

const TECHS_PUNCHY2 = [
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        iconColor: "text-[#3c873a]",
        bg: "bg-[#224f36]/90 border border-white/10",
    },
    {
        name: "Express",
        icon: <SiExpress />,
        iconColor: "text-white",
        bg: "bg-[#181818]/90 border border-white/10",
    },
    {
        name: "React",
        icon: <SiReact />,
        iconColor: "text-[#61dafb]",
        bg: "bg-[#1a5faf]/80 border border-cyan-500/20",
    },
    {
        name: "MySQL",
        icon: <SiMysql />,
        iconColor: "text-[#e48e00]",
        bg: "bg-[#1d2330]/90 border border-orange-400/20",
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        iconColor: "text-[#fff]",
        bg: "bg-[#295787]/80 border border-blue-500/20",
    }
];

export default function TechCards() {
    return (
        <div className="flex flex-wrap gap-6 justify-center p-4">
            {TECHS_PUNCHY2.map(tech => (
                <div
                    key={tech.name}
                    className={`flex flex-col items-center justify-center ${tech.bg} rounded-2xl p-4  w-[150px] hover:-translate-y-2 shadow-[0_4px_24px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200`}>
                    <span className={`text-4xl mb-2 ${tech.iconColor}`}>{tech.icon}</span>
                    <span className={`font-semibold text-sm`}>{tech.name}</span>
                </div>
            ))}
        </div>
    );
}