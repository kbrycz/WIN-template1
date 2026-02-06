import './App.css'
import HeroSection from './components/HeroSection'
import ImageTextSection from './components/ImageTextSection'
import SignupSection from './components/SignupSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import PopupModal from './components/PopupModal'

function App() {
  return (
    <div className="min-h-screen">
      <PopupModal />
      <HeroSection />
      <ImageTextSection />
      <SignupSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App
