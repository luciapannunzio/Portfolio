import './App.css';
import ProjectSlideShow from './components/ProjectSlideShow';

function App() {
  return (
    <div className="container mx-auto pt-4 scroll-smooth">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Lucia Pannunzio</h1>
        <h3 className="text-sm">Software Developer</h3>
      </header>

      {/* About Section */}
      <section id="about" className="text-center mb-8">
        <p className="max-w-md mb-0">
          I am a Software Developer with 3+ years experience in Web Development, coupled with 8+ years in visual arts and film production. My unique background allows me to build creative technology solutions, while displaying strong problem-solving skills with a focus on user experience.
        </p>

      </section>

      {/* SlideShow */}
      <ProjectSlideShow />

      {/* Footer */}
      {/* LinkedIn & GitHub Links */}
      <footer className="mt-20 px-4 text-center text-sm text-gray-500">
        <div className="flex flex-row items-center justify-center text-sm">
          <a
            href="https://www.linkedin.com/in/luciapannunziovanderwedden/"
            target="_blank"
            className="no-underline text-black visited:text-black hover:text-gray-700"
          >
            LinkedIn
          </a>
          <span className="separator"></span>

          <a
            href="https://github.com/luciapannunzio"
            target="_blank"
            className="no-underline text-black visited:text-black hover:text-gray-700"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;