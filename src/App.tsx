import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Clock from './components/Clock/Clock'
import './App.css'

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
    <Footer />
    <Clock />
  </>
)

export default App
