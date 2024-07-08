import { Link } from "react-scroll";

interface Props {
  siteName: string;
  listItems: string[];
}
function NavBar({ siteName, listItems }: Props) {
  return (
    <nav className="navBar">
      <h1>
        <Link
          to={"hero"}
          smooth={true}
          duration={500}
          offset={-80}
          className="text-blue-600 cursor-pointer no-underline text-xl"
        >
          {siteName}
        </Link>
      </h1>
      <div>
        <ul className="flex justify-evenly gap-10">
          {listItems.map((element) => (
            <li key={element}>
              <Link
                to={element.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer font-semibold hover:text-blue-600 text-black no-underline"
              >
                {element}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
