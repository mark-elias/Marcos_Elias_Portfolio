import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-evenly items-center mt-5"
    >
      <em>Full-Stack Web Dev</em>
      <h1 className="mb-3 text-lg md:text-4xl">
        hello world, my name is <em className="text-blue-600">Marcos</em>
      </h1>
      <p>Email: mark4elias@gmail.com</p>
      <div className="flex flex-row justify-between gap-5">
        <div>
          <FaGithubSquare className="inline mr-1 mb-1" color="#ec4899" />
          <a href="https://github.com/mark-elias" target="_blank">
            GitHub
          </a>
        </div>
        <div>
          <FaLinkedin className="inline mr-1 mb-1" color="#ec4899" />
          <a
            href="https://www.linkedin.com/in/marcos-elias-382484226/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
