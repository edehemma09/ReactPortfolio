import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Footer from './component/footer';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
    
    <div className='Herosection'>
      <Hero/>
    </div>
    <div className='Footersection'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
