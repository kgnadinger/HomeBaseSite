import Layout from './components/Layout'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Screens from './sections/Screens'
import LegalLinks from './sections/LegalLinks'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Screens />
      <LegalLinks />
      <Footer />
    </Layout>
  )
}

export default App

