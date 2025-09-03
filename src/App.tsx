import './reset.css'
import { Header } from './sections/Header'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Skills } from './sections/Skills'
import { Footer } from './sections/Footer'
import { ArrowTop } from './components/ArrowTop'

function App() {

  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    <ArrowTop/>
    </>
  )
}

export default App
