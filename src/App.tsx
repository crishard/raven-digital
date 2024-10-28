
import Blog from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Services } from './components/Services/Services'
import { Team } from './components/Team/Team'
import Testimonials from './components/Testimonials/Testimonials'
import { ScrollWorks } from './components/Works/ScrollWorks'
import { Works } from './components/Works/Works'
import './index.css'

function App() {


  return (
    <main>
      <Header />
      <Services />
      <Works />
      <ScrollWorks />
      <Testimonials />
      <Team />
      <Blog />
      <Footer />
    </main>
  )
}

export default App
