import Header from './components/Header';
import Title from './components/Title';
import Desc from './components/Desc';
import Links from './components/Links';
import TechCards from './components/TechCards';
import Footer from './components/Footer';
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { techsData } from './data/Tech';
import "./i18n";
import { useEffect } from "react";

function App() {
  // Translation
  const { t, i18n } = useTranslation();
  type SupportedLang = "fr" | "en";
  const changeLanguage = (lng: SupportedLang) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  useEffect(() => {
    // Pour restaurer le choix langue au rechargement
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Color-Theme
  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      root.classList.contains('dark') ? 'dark' : 'light'
    );
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
        <meta name="description" content={t("meta-desc")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("og-desc")} />
        <meta property="og:locale" content={t("og-locale")} />
        <meta name="twitter:title" content={t("title")} />
        <meta name="twitter:description" content={t("meta-desc")} />
      </Helmet>
      <Header toggleTheme={toggleTheme} changeLanguage={changeLanguage} />
      <main className='px-8'>
        <article className='flex flex-col min-h-[60dvh] mt-12 mb-8 justify-around gap-6'>
          <Title />
          <Desc />
          <Links />
        </article>
        <section className='mb-4'>
          <h2 className='font-medium'>{t("techs")}</h2>
          <TechCards techs={techsData} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App