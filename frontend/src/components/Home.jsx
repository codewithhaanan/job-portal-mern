
import CategoryCarousel from './CategoreyCrousel'
import Footer from './Footer'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Navbar from './shared/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home