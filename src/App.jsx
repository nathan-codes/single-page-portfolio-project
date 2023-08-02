import "./App.css";
import data from "./data.json";
import projectData from "./projects.json";
import Footer from "./components/Footer";

// Importing Components
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Navbar />
        <Intro />
        <Experience skills={data} />
        <Projects projects={projectData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
