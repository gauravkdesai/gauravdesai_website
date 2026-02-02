import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import './App.css'

function App() {
  return (
    <ThemeProvider>
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
          <ScrollToTop />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
