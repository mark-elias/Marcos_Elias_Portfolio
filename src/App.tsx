import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import ProjectCard from "./Components/ProjectCard";
// importing images
import budgeterImage from "./Assets/images/screenshot_BudgeterProject.png";
import colorPickerImage from "./Assets/images/ColorPicker_screenshot.png";
import rockPaperImage from "./Assets/images/RockPaperScissors_screenshot.png";
import restaurantImage from "./Assets/images/RestaurantProject.png";
import portfolioImage from "./Assets/images/screenshot_portfolioWebsite.png";
import weatherImage from "./Assets/images/WeatherAPI_Project.png";
import kreativstormImage from "./Assets/images/Kreativstorm_GroupProject_Screenshot.png";

function App() {
  const listItems = ["Experience", "Projects", "Resume", "Skills", "About"];

  const budgeterLink = "https://mark-elias.github.io/Budgeter.github.io/";
  const budgeterGitHub = "https://github.com/mark-elias/Budgeter.github.io";
  const pickerLink = "https://mark-elias.github.io/ColorPicker.github.io/";
  const pickerGitHub = "https://github.com/mark-elias/ColorPicker.github.io";
  const rockPaperLink =
    "https://mark-elias.github.io/RockPaperScissors.github.io/";
  const rockPaperGitHub =
    "https://github.com/mark-elias/RockPaperScissors.github.io";
  const restaurantLink =
    "https://mark-elias.github.io/Restaurant_Project.github.io/";
  const restaurantGitHub =
    "https://github.com/mark-elias/Restaurant_Project.github.io";
  const weatherLink = "https://mark-elias.github.io/WeatherProject.github.io/";
  const weatherGitHub =
    "https://github.com/mark-elias/WeatherProject.github.io";
  const kreativstormLink =
    "https://second-assignment-kreativstorm.vercel.app/pages/matches.html";
  const kreativstormGitHub =
    "https://github.com/joaopedro-vidal/second-assignment-kreativstorm?tab=readme-ov-file";
  const rocketGameGitHub =
    "https://github.com/mark-elias/S22_Proj_2A_Elias_Marcos";
  const gameMenuGitHub =
    "https://github.com/mark-elias/S22_Proj_2A_Elias_Marcos";
  const footballGameGitHub =
    "https://github.com/mark-elias/CS583_S22_Group7_KickoffReturn";

  return (
    <>
      <NavBar siteName="marcos elias" listItems={listItems}></NavBar>
      <main className="mx-3 md:mx-16 lg:mx-24 xl:mx-32">
        <Contact></Contact>
        <AboutMe></AboutMe>
        <div>
          <h2>Projects</h2>
          <div className="flex flex-row flex-wrap gap-5">
            <ProjectCard
              title="React Budgeter"
              image={budgeterImage}
              description="With this project I practiced how to work with an array of objects and how to display the objects as list items. I used updater functions and array methods to properly display content. This project helped me understand React a bit more."
              description2="I also used Tailwind CSS for this project as it has always seemed interesting. It has its pros and cons but I will continue to try it out."
              siteLink={budgeterLink}
              githubLink={budgeterGitHub}
              badges={["react", "vite", "git", "tailwind"]}
            ></ProjectCard>
            <ProjectCard
              title="React Color Picker"
              image={colorPickerImage}
              description="At first I had trouble understanding React and why it is so popular. I am starting to get the hang of it now and it does make sites easier to make and maintain. React components are like Legos which is pretty cool. I want to remake my Portfolio site with React."
              description2="I had some issues trying to deploy a React + Vite project to GitHub but I finally figured it out. I will be working on a To-Do List project next."
              siteLink={pickerLink}
              githubLink={pickerGitHub}
              badges={["react", "vite", "git", "css"]}
            ></ProjectCard>
            <ProjectCard
              title="JS RockPaperScissors Game"
              image={rockPaperImage}
              description="I expiremented with some fancy border radius styling to create some cool unique shapes. I added a scoreboard to keep track of the users points and the computers points. Ofcourse the project works on mobile screens and tablet screens as well."
              description2="The javascript was both fun and a little bit challenging to complete. Making helper functions makes it easier to read the code and keep adding features."
              siteLink={rockPaperLink}
              githubLink={rockPaperGitHub}
              badges={["javascript", "git", "css"]}
            ></ProjectCard>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
