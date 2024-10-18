import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Investment from '../components/Investment';
import FourVideos from '../components/FourVideos';
import Team from '../components/Team';
import Facility from '../components/Facility';
import InvesterFunnel from '../components/InvesterFunnel';
import Adv from '../components/Adv';
import AnimationText from '../components/AnimationText';
import Ebook from '../components/Ebook';
import NewsLetter from '../utilities/NewsLetter';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimationText />
      <Facility />
      <InvesterFunnel />
      <Investment />
      <Adv />
      <FourVideos />
      <Team />
      <Ebook />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default HomePage;
