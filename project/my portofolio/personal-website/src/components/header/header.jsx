import SideBar from "../sidebar/sideBar";
import VerticalMassage from "../verticalMassage/verticalMassage";
import "./header.css";

const Header = () => {
  return (
    <div className="header mt-5 flex justify-between ">
      <SideBar />
      <VerticalMassage />
      <div className="navigation mr-8 ">
        <ul className="flex text-secondary space-x-4">
          <li className="home">Home</li>
          <li className="about">About</li>
          <li className="skill">Skill</li>
          <li className="project">Project</li>
          <li className="contact">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
