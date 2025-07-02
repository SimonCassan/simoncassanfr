import Footer from './components/Footer';
import Title from './components/Title';
import Desc from './components/Desc';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <main className='px-8'>
        <article className='flex flex-col min-h-[80dvh] mt-12 justify-around gap-6'>
          <Title />
          <Desc />
          <Nav />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default App