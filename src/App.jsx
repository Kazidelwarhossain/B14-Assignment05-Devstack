
import { Toaster } from 'react-hot-toast';
import './App.css'
import Navbar from './components.jsx/Navbar';
import Footer from './components.jsx/Footer';
import Banner from './components.jsx/Banner';
import MainLayout from './components.jsx/MainLayout';
import { Suspense } from 'react';

const dataPromise= async()=>{
  const res= await fetch("/technologiec.json");
  const data = await res.json();
  return data;
}

function App() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Suspense fallback={<p>Lodding....</p>}>
         <MainLayout dataPromise={dataPromise()} />
        </Suspense>
       
        <Footer />
        <Toaster />
    </div>
     
  )
}

export default App
