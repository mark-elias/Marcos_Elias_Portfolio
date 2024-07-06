import NavBar from "./Components/NavBar";

function App() {
  const listItems = ["Experience", "Projects", "Resume"];
  return (
    <>
      <NavBar siteName="marcos elias" listItems={listItems}></NavBar>
    </>
  );
}

export default App;
