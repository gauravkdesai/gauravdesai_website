import { HashRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          {/* <Hobbies /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
