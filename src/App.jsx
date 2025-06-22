import './App.css';
import ProjectSlideShow from './components/ProjectSlideShow';

function App() {
  return (
    <div className="container mx-auto pt-4 scroll-smooth min-h-screen flex flex-col">
      {/* Header */}
      <header className="portfolio-header">
        <h2 className="header-name">Lucia Pannunzio</h2>
        <h2 className="header-title">Software Developer</h2>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <p className="max-w-md mb-0">
          I am a Software Developer with 3+ years experience in Web Development, coupled with 8+ years in visual arts and film production. My unique background allows me to build creative technology solutions, while displaying strong problem-solving skills with a focus on user experience.
        </p>
      </section>

      {/* SlideShow */}
      <ProjectSlideShow />

      {/* Footer */}
      {/* LinkedIn & GitHub Links */}
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