import type { ReactNode } from "react";
import { SiReact, SiPostgresql, SiMysql, SiExpress, SiNodedotjs } from "react-icons/si";

export interface Tech {
  name: string;
  icon: ReactNode;
  iconColor: string;
  bg: string;
}

export const techsData: Tech[] = [
  { name: 'Node.js', icon: <SiNodedotjs />, iconColor: 'text-[#3c873a]', bg: 'bg-[#224f36]/90 border border - white / 10' },
  { name: 'Express', icon: <SiExpress />, iconColor: 'text-white', bg: 'bg-[#181818]/90 border border - white / 10' },
  { name: 'React', icon: <SiReact />, iconColor: 'text-[#61dafb]', bg: 'bg-[#1a5faf]/80 border border - cyan - 500 / 20' },
  { name: 'MySQL', icon: <SiMysql />, iconColor: 'text-[#e48e00]', bg: 'bg-[#1d2330]/90 border border - orange - 400 / 20' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, iconColor: 'text-[#fff]', bg: 'bg-[#295787]/80 border border - blue - 500 / 20' }
]