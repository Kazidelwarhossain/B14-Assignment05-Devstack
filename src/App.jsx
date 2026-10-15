
import { Toaster } from 'react-hot-toast';
import './App.css'
import Navbar from './components.jsx/Navbar';
import Footer from './components.jsx/Footer';
import Banner from './components.jsx/Banner';

function App() {
 

  return (
    <div>
        <Navbar />
        <Banner />
        <Footer />
        <Toaster />
    </div>
     
  )
}

export default App
