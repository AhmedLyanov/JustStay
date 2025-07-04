import Header from "../../components/banner";
import About from "../../components/about";
import Tape from "../../components/tape-line";
import OurRooms from "../../components/ourRooms";
import OurServices from "../../components/ourServices";
import Preview from "../../components/review";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Tape />
        <OurRooms />
        <OurServices/>
        <Preview/>
      </main>
      <Footer/>
    </div>
  );
}
