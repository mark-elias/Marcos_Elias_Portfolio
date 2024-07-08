import { Link } from "react-scroll";

interface Props {
  siteName: string;
  listItems: string[];
}
function NavBar({ siteName, listItems }: Props) {
  return (
    <nav className="navBar">
      <h1 className="font-black text-xl text-blue-600">
        <Link to={"contact"} smooth={true} duration={500} offset={-80}>
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
                className="cursor-pointer text-black hover:text-blue-600 no-underline"
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
