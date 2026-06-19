import './Home-Page.css'
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

function Home() { 
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div></div>
          <div></div>
          <button></button>
        </section>
        <section className="picture"></section>
        <section className="adds">
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section className='motivation'></section>
        <section className='end'></section>
      </main>
      <Footer />
    </>
  )
}
export default Home