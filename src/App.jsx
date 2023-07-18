import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainContainer from "./components/MainContainer.jsx";


function App() {
 

  return (
    <>
      <header className="container-fluid">
        <Navbar/>
      </header>
      <main>
       <MainContainer/>
      </main>
      <footer className="container-fluid bg-light">
        <Footer/>
      </footer>
    </>
  )
}

export default App
