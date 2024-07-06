interface Props {
  siteName: string;
  listItems: string[];
}
function NavBar({ siteName, listItems }: Props) {
  return (
    <nav className="flex flex-col justify-around bg-blue-400 items-center p-5 gap-3 md:flex-row ">
      <h1 className="text-blue-600 font-extrabold text-2xl md:text-3xl">
        {siteName}
      </h1>
      <div>
        <ul className="flex justify-evenly gap-5 font-semibold text-xl md:gap-12 md:text-xl md:font-bold">
          {listItems.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
