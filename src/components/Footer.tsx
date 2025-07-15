import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="my-5 tracking-wider">
            <div className="w-[40%] m-auto mb-5 border-t-1 [border-top-color:#780000] dark:border-t-2 dark:[border-top-color:#f77820]"></div>
            <p>©&nbsp;{new Date().getFullYear()} {t("footer")} <a href="https://vite.dev/" target="_blank">Vite</a></p>
        </footer>
    )
}

export default Footer;