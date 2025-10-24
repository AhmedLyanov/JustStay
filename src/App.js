import Header from './components/sections/banner';
import About from './components/sections/about';
import Tape from './components/sections/tape-line';
import OurRooms from './components/sections/ourRooms';
import OurServices from './components/sections/ourServices';
import Preview from './components/sections/review';
import Footer from './components/layout/footer';

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
