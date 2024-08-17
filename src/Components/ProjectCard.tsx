interface Props {
  title: string;
  image?: string;
  video?: string;
  description: string;
  siteLink?: string;
  githubLink?: string;
  badges: string[];
}
function ProjectCard({
  title,
  image,
  video,
  description,
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
    } else if (badge === "html") {
      return "bg-orange-500 text-white";
    } else if (badge === "css") {
      return "bg-blue-700 text-white";
    } else if (badge === "vercel") {
      return "bg-slate-800 text-white";
    } else if (badge === "chakra") {
      return "bg-teal-500 text-white";
    } else {
      return "bg-green-500 text-white";
    }
  }
  return (
    <div className="rounded-2xl shadow-2xl w-[350px] h-[400px] md:h-[450px] bg-slate-50 border-[2px] border-slate-200 mb-5">
      <div className="w-full h-[125px] md:h-[175px]">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-t-2xl w-full h-full object-cover"
          />
        )}
        {video && (
          <video
            src={video}
            controls
            className="rounded-t-2xl w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="px-5">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex flex-row gap-6 my-3">
          {siteLink && (
            <a href={siteLink} target="_blank">
              View Website
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank">
              GitHub Repo
            </a>
          )}
        </div>
        <p>Made with:</p>
        <div className="flex flex-wrap">
          {badges?.map((element) => (
            <span
              key={element}
              className={`mr-1 mb-1 px-2 py-1 rounded text-sm + ${badgeMaker(
                element
              )}`}
            >
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
