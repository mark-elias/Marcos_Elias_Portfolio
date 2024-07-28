import ProjectCard from "./ProjectCard";
// ========== Media Imports
// Images
import portfolioImage from "../Assets/images/NewPortfolioSite.png";
import budgeterImage from "../Assets/images/screenshot_BudgeterProject.png";
import colorPickerImage from "../Assets/images/colorPickerScreenShot.png";
import rockPaperImage from "../Assets/images/RockPaperScissors_screenshot.png";
import restaurantImage from "../Assets/images/RestaurantProject.png";
import weatherImage from "../Assets/images/WeatherAPI_Project.png";
import kreativstormImage from "../Assets/images/Kreativstorm_GroupProject_Screenshot.png";
// Vidoes
import rocketGameVideo from "../Assets/videos/LeavingEarth_Gameplay.mp4";
import footballGameVideo from "../Assets/videos/GroupProject_KickReturner - Made with Clipchamp.mp4";
import gameMenuVideo from "../Assets/videos/RollCharacter_Video - Made with Clipchamp.mp4";
import heatProjectVideo from "../Assets/videos/Project_Heat.mp4";

function Projects() {
  // ======= Links
  const portfolioLink = "https://marcoseliasportfolio.com";
  const portfolioGitHub =
    "https://github.com/mark-elias/Marcos_Elias_Portfolio";
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
    <section id="projects">
      <h2>Projects</h2>
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        <ProjectCard
          title="Portfolio Site"
          image={portfolioImage}
          description="Remade my portfolio site with React, Tailwind, and TypeScript. This way it is easier to maintain and keep updating"
          siteLink={portfolioLink}
          githubLink={portfolioGitHub}
          badges={["react", "vite", "typescript", "tailwind", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="React Budgeter"
          image={budgeterImage}
          description="Budgeting project using an array of objects, React, useState, and Tailwind CSS. Implemented sorting by categories and displayed objects as list items."
          siteLink={budgeterLink}
          githubLink={budgeterGitHub}
          badges={["react", "vite", "git", "tailwind"]}
        ></ProjectCard>
        <ProjectCard
          title="React Color Picker"
          image={colorPickerImage}
          description="My first React project. I initially felt overwhelmed by React, but I am starting to understand its benefits. Successfully deployed React + Vite to GitHub."
          siteLink={pickerLink}
          githubLink={pickerGitHub}
          badges={["react", "vite", "git", "css"]}
        ></ProjectCard>
        <ProjectCard
          title="JS RockPaperScissors Game"
          image={rockPaperImage}
          description="Used unique border radius styling, added a scoreboard, and ensured mobile/tablet compatibility. JavaScript was fun and challenging; helper functions improved readability."
          siteLink={rockPaperLink}
          githubLink={rockPaperGitHub}
          badges={["javascript", "git", "css"]}
        ></ProjectCard>
        <ProjectCard
          title="Restaurant Project"
          image={restaurantImage}
          description="Multipage site showcasing my CSS skills. Improved performance with smaller images and semantic HTML. Made the site responsive, added persistent Dark Mode, and updated styling."
          siteLink={restaurantLink}
          githubLink={restaurantGitHub}
          badges={["html", "css", "javascript", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="Weather API Project"
          image={weatherImage}
          description="First API project. It was challenging trying to understand the syntax of Async Javascript. Experimented with glassmorphism and CSS tricks. Will continue practicing API skills."
          siteLink={weatherLink}
          githubLink={weatherGitHub}
          badges={["html", "css", "javascript", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="Kreativstorm Group Project"
          image={kreativstormImage}
          description="Group project in Kreativstorm's Front End training with international students. Enjoyed collaborating across cultures. Responsible for creating the 'Matches' page."
          siteLink={kreativstormLink}
          githubLink={kreativstormGitHub}
          badges={["html", "css", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="Leaving Earth Game"
          video={rocketGameVideo}
          description="Game Dev Project. Designed and developed my own art and gameplay. Very fun and challenging"
          githubLink={rocketGameGitHub}
          badges={["Unity", "C#", "Adobe Fresco", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="Kick Returner Game"
          video={footballGameVideo}
          description="With this Game Dev Group Project, I leveled up my project management, teamwork, and communication skills. Emphasized version control, clean code, and polished user experience."
          githubLink={footballGameGitHub}
          badges={["Unity", "C#", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="Roll Character Menu"
          video={gameMenuVideo}
          description="My first C# and JSON project: Designed a Dungeons and Dragons style Roll Character menu. Created original art and focused on intuitive interface design."
          githubLink={gameMenuGitHub}
          badges={["Unity", "C#", "Adobe Fresco", "git"]}
        ></ProjectCard>
        <ProjectCard
          title="Heat Wave Detector"
          video={heatProjectVideo}
          description="My first Arduino project in a group setting. Learned problem-solving, research, and adaptability while overcoming hardware challenges."
          badges={["Arduino", "C++"]}
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
