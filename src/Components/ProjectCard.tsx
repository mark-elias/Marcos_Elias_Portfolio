interface Props {
  title: string;
  image: string;
  description?: string;
  description2?: string;
  siteLink?: string;
  githubLink?: string;
  badges?: string[];
}
function ProjectCard({
  title,
  image,
  description,
  description2,
  siteLink,
  githubLink,
  badges,
}: Props) {
  function badgeMaker(badge: string) {
    if (badge === "react") {
      return "bg-cyan-400 text-slate-700";
    } else if (badge === "javascript") {
      return "bg-amber-300 text-black";
    } else if (badge === "tailwind") {
      return "bg-cyan-500 text-white";
    } else if (badge === "vite") {
      return "bg-indigo-500 text-yellow-300";
    } else if (badge === "git") {
      return "bg-orange-500 text-white";
    } else if (badge === "typescript") {
      return "bg-blue-600 text-white";
    } else {
      return "bg-green-500 text-white";
    }
  }
  return (
    <div className="rounded-lg border-2 border-slate-200 p-5 w-full shadow-2xl md:w-80 lg:w-96 ">
      <h3 className="text-blue-500">{title}</h3>
      <img src={image} alt={title} className="" />
      <p>{description}</p>
      <p>{description2}</p>
      <div className="flex flex-row gap-5">
        <a href={siteLink} target="_blank">
          View Website
        </a>
        <a href={githubLink} target="_blank">
          GitHub Repo
        </a>
      </div>
      <p className="my-3">Made with:</p>
      {badges?.map((element) => (
        <span className={`mr-2 p-2 rounded-lg + ${badgeMaker(element)}`}>
          {element}
        </span>
      ))}
    </div>
  );
}

export default ProjectCard;
