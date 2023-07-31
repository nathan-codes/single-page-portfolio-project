import "./App.css";
import data from "./data.json";


import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Navbar />
        <Intro />
        <Experience skills={data}/>
        
      </main>

      <footer>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro facilis atque consectetur doloremque nesciunt perferendis, nostrum eum aliquam tempora nobis pariatur molestias minus numquam fuga esse aspernatur quibusdam rerum.
      </footer>
    </div>
  );
}

export default App;
