import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Organizations from './components/Organizations/Organizations';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="font-['Nunito'] scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Organizations />
        <Footer />
      </main>
    </div>
  );
}

export default App;
