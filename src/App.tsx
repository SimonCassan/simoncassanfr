import Footer from './components/Footer';
import Title from './components/Title';
import Desc from './components/Desc';
import Links from './components/Links';
import TechCards from './components/TechCards';

function App() {
  return (
    <>
      <main className='px-8 tracking-widest'>
        <article className='flex flex-col min-h-[60dvh] mt-12 mb-8 justify-around gap-6'>
          <Title />
          <Desc />
          <Links />
        </article>
        <section className='mb-4'>
          <h2>Mes Techs :</h2>
          <TechCards />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App