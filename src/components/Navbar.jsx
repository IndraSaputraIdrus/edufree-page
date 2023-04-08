import clsx from "clsx";
import Container from "./Container";

const navLinks = [
  { id: 1, text: "home", link: "#home" },
  { id: 2, text: "tentang kami", link: "#aboutUs" },
  { id: 3, text: "kursus", link: "#" },
  { id: 4, text: "faq", link: "#" },
  { id: 5, text: "blog", link: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-primary fixed w-full top-0 left-0 z-10">
      <Container>
        <div className={clsx("h-20", "flex items-center", "text-white")}>
          <h3 className={clsx("mr-auto", "text-2xl font-bold")}>[EDUFREE]</h3>
          <ul className={clsx("flex items-center space-x-8", "mr-16")}>
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  className={clsx(
                    "cursor-pointer",
                    "uppercase",
                    "hover:opacity-75",
                    item.text === "home" && "font-bold"
                  )}
                  href={item.link}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <a
            className={clsx(
              "block",
              "px-10 py-3",
              "border border-white rounded-md",
              "transition duration-300 ease-in-out",
              "hover:bg-white hover:text-primary"
            )}
            href="#"
          >
            Login
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
