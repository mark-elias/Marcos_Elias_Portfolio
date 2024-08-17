interface Props {
  title: string;
  image?: string;
  video?: string;
  description: string;
  siteLink?: string;
  githubLink?: string;
  badges: string[];
}

const badgeStyles: Record<string, string> = {
  react: "bg-slate-700 text-[#61DBFB]",
  javascript: "bg-[#F0DB4F] text-[#323330]",
  tailwind: "bg-sky-500 text-white",
  git: "bg-[#f1502f] text-white",
  typescript: "bg-[#3178c6] text-white",
  html: "bg-[#f06529] text-white",
  css: "bg-[#264de4] text-[#ebebeb]",
  vercel: "bg-slate-800 text-white",
  chakraUI: "bg-teal-500 text-white",
  node: "bg-[#333333] text-[#6cc24a]",
  mongoDB: "bg-[#E8E7D5] text-[#3FA037]",
  API: "bg-violet-700 text-white",
};
// 333333
// 6cc24a

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
    return badgeStyles[badge] || "bg-gray-400 text-black";
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
