import { Link } from "react-scroll";

interface Props {
  siteName: string;
  listItems: string[];
}
function NavBar({ siteName, listItems }: Props) {
  return (
    <nav className="flex flex-col justify-around border-red-400 border-2 items-center p-5 gap-3 md:flex-row sticky top-0 bg-white">
      <h1>{siteName}</h1>
      <div>
        <ul className="flex justify-evenly gap-5">
          {listItems.map((element) => (
            <li key={element} className="hover:text-blue-600">
              <Link
                to={element.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-gray-400"
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
