interface Props {
  title: string;
  image?: string;
  video?: string;
  description: string;
  description2?: string;
  siteLink?: string;
  githubLink?: string;
  badges: string[];
}
function ProjectCard({
  title,
  image,
  video,
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
    } else if (badge === "html") {
      return "bg-orange-500 text-white";
    } else if (badge === "css") {
      return "bg-blue-700 text-white";
    } else {
      return "bg-green-500 text-white";
    }
  }
  return (
    <div className="rounded-2xl shadow-2xl border-blue-600 border-1 w-96">
      <div className="relative w-full h-44">
        {image && (
          <img
            src={image}
            alt={title}
            className=" mb-2 rounded-t-2xl w-full h-full object-cover"
          />
        )}
        {video && (
          <video
            src={video}
            controls
            className="rounded-t-2xl mb-2 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <h3 className="text-blue-600 text-center text-xl mb-3">{title}</h3>

      <div className="p-2">
        <p className="font-normal mb-2 text-sm">{description}</p>
        <p className="font-normal text-sm">{description2}</p>
        <div className="flex flex-row gap-6 my-3">
          {siteLink && (
            <a href={siteLink} target="_blank" className="font-normal text-sm">
              View Website
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" className="font-normal text-sm">
              GitHub Repo
            </a>
          )}
        </div>
        <p className="text-sm font-normal">Made with:</p>
        {badges?.map((element) => (
          <span
            key={element}
            className={`mr-1 px-2 py-1 text-sm font-normal rounded-lg + ${badgeMaker(
              element
            )}`}
          >
            {element}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
