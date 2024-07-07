import { Link } from "react-scroll";

interface Props {
  siteName: string;
  listItems: string[];
}
function NavBar({ siteName, listItems }: Props) {
  return (
    <nav className="flex flex-col justify-around items-center p-5 gap-3 md:flex-row sticky top-0 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-extrabold text-blue-600">{siteName}</h1>
      <div>
        <ul className="flex justify-evenly gap-5">
          {listItems.map((element) => (
            <li key={element} className="hover:text-blue-600">
              <Link
                to={element.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-black"
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
