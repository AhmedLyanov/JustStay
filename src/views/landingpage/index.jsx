import Header from "../../components/banner";
import About from "../../components/about";
import Tape from "../../components/tape-line";
import OurRooms from "../../components/ourRooms";
import OurServices from "../../components/ourServices";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Tape />
        <OurRooms />
        <OurServices/>
      </main>
    </div>
  );
}
