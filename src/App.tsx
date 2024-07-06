import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";

import ProjectCard from "./Components/ProjectCard";

import Footer from "./Components/Footer";
// importing images
import budgeterImage from "./Assets/images/screenshot_BudgeterProject.png";
import colorPickerImage from "./Assets/images/ColorPicker_screenshot.png";
import rockPaperImage from "./Assets/images/RockPaperScissors_screenshot.png";
import restaurantImage from "./Assets/images/RestaurantProject.png";
// import portfolioImage from "./Assets/images/screenshot_portfolioWebsite.png";
import weatherImage from "./Assets/images/WeatherAPI_Project.png";
import kreativstormImage from "./Assets/images/Kreativstorm_GroupProject_Screenshot.png";
// videos
import rocketGameVideo from "./Assets/videos/LeavingEarth_Gameplay.mp4";
import footballGameVideo from "./Assets/videos/GroupProject_KickReturner - Made with Clipchamp.mp4";
import gameMenuVideo from "./Assets/videos/RollCharacter_Video - Made with Clipchamp.mp4";
import heatProjectVideo from "./Assets/videos/Project_Heat.mp4";

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
        <Experience></Experience>
        <section id="projects">
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
            <ProjectCard
              title="Restaurant Project"
              image={restaurantImage}
              description="My page was having some performance issues due to large image sizes. I remade my site to fix these issues and to use more semantic html so that my site can be more maintainable. I also made my site responsive as it was lacking in that category before."
              description2="My favorite feature is the cool Dark Mode feature that remains persistent. I also changed the styling of my site as I felt it was kinda lacking in looks"
              siteLink={restaurantLink}
              githubLink={restaurantGitHub}
              badges={["html", "css", "javascript", "git"]}
            ></ProjectCard>
            <ProjectCard
              title="Weather API Project"
              image={weatherImage}
              description="This is my first project working with APIs. It was challenging trying to understand how to select certain data from the JSON recieved, but it got interesting once I started to comprehend. I expiremented with some glassmorphism and other cool CSS tricks."
              description2="I am still new to working with APIs but I will continue practicing as I understand that working with APIs is a key skill."
              siteLink={weatherLink}
              githubLink={weatherGitHub}
              badges={["html", "css", "javascript", "git"]}
            ></ProjectCard>
            <ProjectCard
              title="Kreativstorm Group Project"
              image={kreativstormImage}
              description="This was a group project that I worked on as part of Kreativstorms Front End training Program. This program had students from all over the world and so it was challenging to setup meetings since we all lived in different countries."
              description2="I had fun meeting people from different backgrounds and cultures all working hard to be Front End Developers just like me. I was in charge of the Matches page for this site"
              siteLink={kreativstormLink}
              githubLink={kreativstormGitHub}
              badges={["html", "css", "git"]}
            ></ProjectCard>
            <ProjectCard
              title="Leaving Earth Game"
              video={rocketGameVideo}
              description="Making my own game was one of my favorite projects to work on. Players customize their own rocket ship and must navigate it through dangerous asteroids in space."
              description2="This project showcases my proficiency in game development using Unity, C#, Visual Studio, and Git/GitHub. I also made all of the art for this game."
              githubLink={rocketGameGitHub}
              badges={["Unity", "C#", "Adobe Fresco", "git"]}
            ></ProjectCard>
            <ProjectCard
              title="Kick Returner Game"
              video={footballGameVideo}
              description="Through this Group Project, I further developed skills in project management, teamwork, and communication. I learned the importance of version control and clean code. Additionally, I acquired valuable experience in implementing game mechanics and ensuring a polished user experience."
              description2="My groupmates and I leveled up our abilities to troubleshoot and debug."
              githubLink={footballGameGitHub}
              badges={["Unity", "C#", "git"]}
            ></ProjectCard>
            <ProjectCard
              title="Roll Character Menu"
              video={gameMenuVideo}
              description="This project was my first introduction to C# scripting and JSON. Here I demonstrate my ability to work with various types of input fields and user provided data to make a Dungeons and Dragons style Roll Character menu."
              description2="I gained experience in designing intuitive and user friendly interfaces. All the art in this project is original."
              githubLink={gameMenuGitHub}
              badges={["Unity", "C#", "Adobe Fresco", "git"]}
            ></ProjectCard>
            <ProjectCard
              title="Heat Wave Detector"
              video={heatProjectVideo}
              description="This project was my first introduction to Arduino boards. This was a group project and although our final code was very simple, it was both challenging and fun learning about all the hardware mistakes we made along the way."
              description2="My groupmates and I acquired skills in problem-solving, research, and adaptability with this project as we encountered numerous challenges while working with new parts and technologies."
              badges={["Arduino", "C++"]}
            ></ProjectCard>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
