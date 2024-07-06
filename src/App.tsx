import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";

function App() {
  const listItems = ["Experience", "Projects", "Resume", "Skills", "About"];

  return (
    <>
      <NavBar siteName="marcos elias" listItems={listItems}></NavBar>
      <main className="mx-3 md:mx-16 lg:mx-24 xl:mx-32">
        <Contact></Contact>
        <AboutMe></AboutMe>
      </main>
    </>
  );
}

export default App;
