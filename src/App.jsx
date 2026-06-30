import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import AboutUs from './components/AboutUs'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <AboutUs />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}
