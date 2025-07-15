import { useTranslation } from "react-i18next";

function Desc() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-[1rem] max-w-[65ch] m-auto font-[Roboto] leading-[1.8] text-left sm:text-justify text-[1.1rem] tracking-wide">
            <p>{t("desc.p1")}</p>
            <p>{t("desc.p2")}</p>
            <p>{t("desc.p3")}</p>
        </div >
    )
}

export default Desc;