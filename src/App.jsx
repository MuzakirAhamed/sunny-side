import Footer from "./components/Footer";
import ImageContent from "./components/ImageContent";
import Images from "./components/Images";
import NavSection from "./components/NavSection";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div>
      <NavSection/>
      <ImageContent/>
      <Testimonials/>
      <Images/>
      <Footer/>
    </div>
  )
}
