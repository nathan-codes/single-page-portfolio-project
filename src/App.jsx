import "./App.css";


import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <main className="container">
        <Navbar />
        <Intro />
      </main>

      <footer>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro facilis atque consectetur doloremque nesciunt perferendis, nostrum eum aliquam tempora nobis pariatur molestias minus numquam fuga esse aspernatur quibusdam rerum.
      </footer>
    </div>
  );
}

export default App;
