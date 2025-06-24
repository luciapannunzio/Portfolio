import './App.css';
import ProjectSlideShow from './components/ProjectSlideShow';
import flowerIcon from '/assets/photos/flor.png';

function App() {
  return (
    <div className="container mx-auto pt-4 scroll-smooth min-h-screen flex flex-col">
      {/* Header */}
      <header className="portfolio-header flex flex-col items-center custom-header-responsive">
        <h2 className="header-name text-nowrap">Lucia Pannunzio</h2>
        <h2 className="header-title text-nowrap mt-1 custom-header-title-spacing">Software Developer</h2>
      </header>

      {/* About */}
      <section id="about" className="about">
        <p className="max-w-md mb-0">
          I am a Software Developer with 3+ years experience in Web Development, coupled with 8+ years in visual arts and film production. My unique background allows me to build creative technology solutions, while displaying strong problem-solving skills with a focus on user experience.
        </p>
      </section>

      {/* Flower Icon */}
      <div className="flex justify-center custom-flower-icon">
      <img src={flowerIcon} alt="flower icon" className="small-flower" />
      </div>

      {/* Slider */}
      <ProjectSlideShow />

      {/* Flower Icon */}
      <div className="flex justify-center custom-flower-icon">
      <img src={flowerIcon} alt="flower icon" className="small-flower" />   
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="flex flex-row items-center justify-center">
          <a
            href="https://www.linkedin.com/in/luciapannunziovanderwedden/"
            target="_blank"
          >
            LinkedIn
          </a>
          <span className="separator"></span>

          <a
            href="https://github.com/luciapannunzio"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;