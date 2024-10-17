import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Certificates from "./Components/Certificates";

function App() {
  const listItems = ["Skills", "Education", "Experience", "Projects"];

  return (
    <>
      <NavBar siteName="marcos elias" listItems={listItems}></NavBar>
      <main className="">
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Certificates></Certificates>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
