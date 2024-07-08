import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  const listItems = ["Skills", "Experience", "Projects", "Contact"];

  return (
    <>
      <NavBar siteName="marcos elias" listItems={listItems}></NavBar>
      <main className="">
        <Contact></Contact>
        <AboutMe></AboutMe>
        <Education></Education>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
