// ========== Media Imports
// Images
import portfolioImage from "../Assets/images/NewPortfolioSite.png";
import expenseTrackerImage from "../Assets/images/expenseTracker-screenshot.png";
import rockPaperImage from "../Assets/images/RockPaperScissors_screenshot.png";
import restaurantImage from "../Assets/images/RestaurantProject.png";
import weatherImage from "../Assets/images/WeatherAPI_Project.png";
import kreativstormImage from "../Assets/images/Kreativstorm_GroupProject_Screenshot.png";
import gameHubImage from "../Assets/images/GameHub.png";
import mern_bookstore from "../Assets/images/MERN_Bookstore.png";
// Vidoes
import leavingVideo from "../Assets/videos/LeavingEarth_Gameplay.mp4";
import kickVideo from "../Assets/videos/GroupProject_KickReturner - Made with Clipchamp.mp4";
import gameMenuVideo from "../Assets/videos/RollCharacter_Video - Made with Clipchamp.mp4";
import heatProjectVideo from "../Assets/videos/Project_Heat.mp4";

// ======= Links
const portfolioLink = "https://marcoseliasportfolio.com";
const portfolioGitHub = "https://github.com/mark-elias/Marcos_Elias_Portfolio";
const expenseLink = "https://react-budgeter-project.vercel.app/";
const expenseGitHub = "https://github.com/mark-elias/Budgeter.github.io";
const rockPaperLink =
  "https://mark-elias.github.io/RockPaperScissors.github.io/";
const rockPaperGitHub =
  "https://github.com/mark-elias/RockPaperScissors.github.io";
const restaurantLink =
  "https://mark-elias.github.io/Restaurant_Project.github.io/";
const restaurantGitHub =
  "https://github.com/mark-elias/Restaurant_Project.github.io";
const weatherLink = "https://mark-elias.github.io/WeatherProject.github.io/";
const weatherGitHub = "https://github.com/mark-elias/WeatherProject.github.io";
const kreativstormLink =
  "https://second-assignment-kreativstorm.vercel.app/pages/matches.html";
const kreativstormGitHub =
  "https://github.com/joaopedro-vidal/second-assignment-kreativstorm?tab=readme-ov-file";
const leavingGitHub = "https://github.com/mark-elias/S22_Proj_2A_Elias_Marcos";
const gameMenuGitHub = "https://github.com/mark-elias/S22_Proj_2A_Elias_Marcos";
const kickGitHub =
  "https://github.com/mark-elias/CS583_S22_Group7_KickoffReturn";

const gameHubLink = "https://game-hub-project-kappa.vercel.app/";
const gameHubGitHub = "https://github.com/mark-elias/game-hub";

export const projects = [
  {
    title: "MERN Bookstore",
    image: mern_bookstore,
    description:
      "MERN stack project with CRUD operations, validation, TypeScript, and TanStack Query. 🚧 Still in progress, almost complete",
    badges: [
      "mongoDB",
      "express",
      "react",
      "node",
      "typescript",
      "git",
      "tailwind",
      "API",
      "TanStackQuery",
      "validation",
      "zod",
      "joi",
    ],
  },
  {
    title: "Game Hub",
    image: gameHubImage,
    description:
      "Game discovery project where you can filter and search for games. Uses Custom and Generic hooks",
    siteLink: gameHubLink,
    gitHubLink: gameHubGitHub,
    badges: [
      "react",
      "typescript",
      "chakraUI",
      "git",
      "vercel",
      "API",
      "axios",
    ],
  },
  {
    title: "Expense Tracker",
    image: expenseTrackerImage,
    description:
      "Uses React Hook Form and Zod for Validation. You can add, sort, and delete expenses",
    siteLink: expenseLink,
    gitHubLink: expenseGitHub,
    badges: [
      "react",
      "typescript",
      "tailwind",
      "git",
      "zod",
      "react_hook_form",
      "validation",
    ],
  },
  {
    title: "Portfolio Site",
    image: portfolioImage,
    description:
      "Remade my portfolio site with React, Tailwind, and TypeScript. This way it is easier to maintain and keep updating",
    siteLink: portfolioLink,
    gitHubLink: portfolioGitHub,
    badges: ["react", "typescript", "tailwind", "git"],
  },
  {
    title: "JS RockPaperScissors Game",
    image: rockPaperImage,
    description:
      "Used unique border radius styling, added a scoreboard, and ensured mobile/tablet compatibility. JavaScript was fun and challenging; helper functions improved readability.",
    siteLink: rockPaperLink,
    gitHubLink: rockPaperGitHub,
    badges: ["javascript", "git", "css"],
  },
  {
    title: "CSS Restaurant Project",
    image: restaurantImage,
    description:
      "Multipage site showcasing my CSS skills. Improved performance with smaller images and semantic HTML. Made the site responsive, added persistent Dark Mode",
    siteLink: restaurantLink,
    gitHubLink: restaurantGitHub,
    badges: ["html", "css", "javascript", "git"],
  },
  {
    title: "Weather API Project",
    image: weatherImage,
    description:
      "First API project. It was challenging trying to understand the syntax of Async Javascript. Experimented with glassmorphism and CSS tricks. Will continue practicing API skills.",
    siteLink: weatherLink,
    gitHubLink: weatherGitHub,
    badges: ["html", "css", "javascript", "git", "API"],
  },
  {
    title: "Kreativstorm Group Project",
    image: kreativstormImage,
    description:
      "Group project in Kreativstorm's Front End training with international students. Enjoyed collaborating across cultures. Responsible for creating the 'Matches' page.",
    siteLink: kreativstormLink,
    gitHubLink: kreativstormGitHub,
    badges: ["html", "css", "git"],
  },
  {
    title: "Leaving Earth Game",
    video: leavingVideo,
    description:
      "Game Dev Project. Designed and developed my own art and gameplay. Very fun and challenging",
    gitHubLink: leavingGitHub,
    badges: ["Unity", "C#", "Adobe Fresco", "git"],
  },
  {
    title: "Kick Returner Game",
    video: kickVideo,
    description:
      "With this Game Dev Group Project, I leveled up my project management, teamwork, and communication skills. Emphasized version control, clean code, and polished user experience.",
    gitHubLink: kickGitHub,
    badges: ["Unity", "C#", "git"],
  },
  {
    title: "Roll Character Menu",
    video: gameMenuVideo,
    description:
      "My first C# and JSON project: Designed a Dungeons and Dragons style Roll Character menu. Created original art and focused on intuitive interface design.",
    gitHubLink: gameMenuGitHub,
    badges: ["Unity", "C#", "Adobe Fresco", "git"],
  },
  {
    title: "Arduino HeatWave Detector",
    video: heatProjectVideo,
    description:
      "My first Arduino project in a group setting. Learned problem-solving, research, and adaptability while overcoming hardware challenges.",
    badges: ["Arduino", "C++"],
  },
];
