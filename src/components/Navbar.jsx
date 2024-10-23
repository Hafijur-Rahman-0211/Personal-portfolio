// import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/hafijur-rahman0211/")
          }
        />
        <FaGithub
          className="cursor-pointer"
          onClick={() => window.open("https://github.com/Hafijur-Rahman-0211")}
        />
      </div>
    </div>
  );
};

export default Navbar;
