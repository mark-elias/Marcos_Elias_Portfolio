import { Link } from "react-scroll";

interface Props {
  siteName: string;
  listItems: string[];
}
function NavBar({ siteName, listItems }: Props) {
  return (
    <nav className="flex flex-col justify-around items-center p-5 md:flex-row sticky top-0 bg-white shadow-lg rounded-2xl z-10">
      <h1 className="text-blue-600">{siteName}</h1>
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
