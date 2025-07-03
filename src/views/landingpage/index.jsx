import Banner from "../../components/banner";
import About from "../../components/about";
export default function HomePage() {
  return (
    <div>
      <Banner />
      <main>
        <div className="container__main_content">
          <About />
        </div>
        
      </main>
    </div>
  );
}
