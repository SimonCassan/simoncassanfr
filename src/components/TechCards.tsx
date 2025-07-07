import type { Tech } from "../data/Tech";

interface TechCardsProps {
    techs: Tech[]
}

export default function TechCards({ techs }: TechCardsProps) {
    return (
        <div className="flex flex-wrap gap-6 justify-center p-4">
            {techs.map(tech => (
                <div
                    key={tech.name}
                    className={`flex flex-col items-center justify-center ${tech.bg} rounded-2xl p-4  w-[150px] hover:-translate-y-2 shadow-[0_4px_24px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200`}>
                    <span aria-hidden="true" className={`text-4xl mb-2 ${tech.iconColor}`}>{tech.icon}</span>
                    <span className="font-medium text-sm text-white select-none">{tech.name}</span>
                </div>
            ))}
        </div>
    );
}