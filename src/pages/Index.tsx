import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VisualGallery from '@/components/VisualGallery'
import ESIMAdapters from '@/components/ESIMAdapters'
import RoamingPlans from '@/components/RoamingPlans'
import SupportSection from '@/components/SupportSection'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <HeroSection />
      <VisualGallery />
      <ESIMAdapters />
      <RoamingPlans />
      <SupportSection />
      <Footer />
    </div>
  )
}

export default Index