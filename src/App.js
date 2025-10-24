import Header from './components/sections/banner';
import About from './components/sections/about';
import Tape from './components/sections/tape-line';
import OurRooms from './components/ourRooms';
import OurServices from './components/ourServices';
import Preview from './components/review';
import Footer from './components/footer';

export default function Ap() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Tape />
        <OurRooms />
        <OurServices />
        <Preview />
      </main>
      <Footer />
    </div>
  );
}
