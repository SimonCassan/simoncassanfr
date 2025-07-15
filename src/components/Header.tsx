import { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { useTranslation } from "react-i18next";

type SupportedLang = "fr" | "en";
interface HeaderProps {
    toggleTheme: () => void;
    changeLanguage: (lng: SupportedLang) => void;
}

function Header({ toggleTheme, changeLanguage }: HeaderProps) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        function handleClose(e: KeyboardEvent | MouseEvent) {
            if (e instanceof KeyboardEvent && e.key === "Escape")
                setOpen(false);
            if (e instanceof MouseEvent && e.target instanceof Element && !e.target.closest("#langMenu") && !e.target.closest("#btnLang"))
                setOpen(false);
        }
        document.addEventListener("keydown", handleClose);
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("keydown", handleClose);
            document.removeEventListener("mousedown", handleClose);
        }
    }, [open]);

    return (
        <header className="max-w-[1440px] w-full py-4 px-2">
            <div className="flex justify-end items-center gap-[0.5rem]">
                <div className="relative h-[24px]">
                    <button id="btnLang" aria-haspopup="menu" aria-controls="langMenu" aria-expanded={open} title={t("header.btn-lang")} aria-label={t("header.btn-lang")} onClick={() => setOpen(o => !o)}>
                        <BsGlobe aria-hidden="true" className="w-[24px] h-[24px] cursor-pointer fill-[#780000] dark:fill-[#f77820] hover:fill-[#914803] dark:hover:fill-[#b63a01] duration-300" />
                    </button>
                    {open && (
                        <ul id="langMenu" role="menu" className="absolute top-[25px] left-[-1px] flex flex-col">
                            <li role="none"><button className="hover:text-shadow-[0_5px_5px_rgba(0,0,0,0.3)] duration-300 dark:hover:text-shadow-[0_2px_5px_rgba(255,255,255,0.5)]" role="menuitem" onClick={() => { changeLanguage("fr"); setOpen(false); }}>FR</button></li>
                            <li role="none"><button className="hover:text-shadow-[0_5px_5px_rgba(0,0,0,0.3)] duration-300 dark:hover:text-shadow-[0_2px_5px_rgba(255,255,255,0.5)]" role="menuitem" onClick={() => { changeLanguage("en"); setOpen(false); }}>EN</button></li>
                        </ul>
                    )}
                </div>
                <button title={t("header.btn-theme")} aria-label={t("header.btn-theme")} onClick={() => toggleTheme()}><img className="w-[36px] select-none" src="/img/sun-moon.png" alt="" /></button>
            </div>
        </header>
    )
}

export default Header;