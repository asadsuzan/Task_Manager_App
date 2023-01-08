import toggle_btn from "../assets/icons/menu.png";
import home_btn from "../assets/icons/home.png";
import toggle_btn_option from "../assets/icons/option.png";
import search_btn from "../assets/icons/search.png";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdOutlineToday,
  MdTaskAlt,
} from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import TaskAddForm from "./Forms/TaskAddForm";
const AppContainer = (props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  let sideBarRef = useRef();
  let contentRef = useRef();
  const toggleSideBar = () => {
    const sideBar = sideBarRef.current.classList;
    if (sideBar.contains("side-nav-open")) {
      sideBarRef.current.classList.remove("side-nav-open");
      sideBarRef.current.classList.add("side-nav-close");
      contentRef.current.classList.remove("content");
      contentRef.current.classList.add("content-expends");
      setIsSideBarOpen(false);
    } else {
      sideBarRef.current.classList.remove("side-nav-close");
      sideBarRef.current.classList.add("side-nav-open");
      contentRef.current.classList.remove("content-expends");
      contentRef.current.classList.add("content");
      setIsSideBarOpen(true);
    }
  };
  return (
    <div className="app-container ">
      <div className="app-wrapper">
        {/* app header  */}
        <header className="app-header d-flex justify-content-between align-items-center px-3">
          {/* header  left side  */}
          <div className="left-side d-flex flex-fill">
            <div className="toggle-btn me-2" onClick={toggleSideBar}>
              <img
                src={isSideBarOpen ? toggle_btn : toggle_btn_option}
                alt="toggle-btn"
              />
            </div>
            <div className="home-btn me-2">
              <img src={home_btn} alt="'home-btn" />
            </div>
            <div className="search-bar me-2  d-flex">
              <input type="text" placeholder="search" />
              <img src={search_btn} alt="search_btn" />
            </div>
          </div>
          {/* header  right side  */}
          <div className="right-side flex-fill  d-flex justify-content-end">
            <div className="controllers text-end">
              <div className="img shadow-lg"></div>
            </div>
          </div>
        </header>
        {/* app body  */}
        <div className="app-body d-flex ">
          {/* app body side nav */}
          <div className="side-nav-open " ref={sideBarRef}>
            <aside className="aside d-flex px-2 me-1 mt-5 flex-column">
              <NavLink to={"/dashboard"}>
                <span>
                  {" "}
                  <MdOutlineDashboardCustomize color="blue" size={"20px"} />
                  Dashboard
                </span>
                <span>1</span>
              </NavLink>
              <NavLink to={"/my_day"}>
                <span>
                  {" "}
                  <MdOutlineToday color="#ffc014" size={"20px"} />
                  My Day
                </span>
                <span>1</span>
              </NavLink>
              <NavLink to={"/important"}>
                <span>
                  {" "}
                  <AiOutlineStar color="red" size={"20px"} />
                  Important
                </span>
                <span>1</span>
              </NavLink>
              <NavLink to={"/inprogress"}>
                <span>
                  {" "}
                  <FaRunning color="green" size={"20px"} />
                  Inprogress
                </span>
                <span>1</span>
              </NavLink>
              <NavLink to={"/tasks"}>
                <span>
                  <BsListTask color="#ffc014" size={"20px"} />
                  Tasks
                </span>
                <span>1</span>
              </NavLink>
              <NavLink to={"/completed"}>
                <span>
                  {" "}
                  <MdTaskAlt color="green" size={"20px"} />
                  Completed
                </span>
                <span>1</span>
              </NavLink>
            </aside>
          </div>
          {/* app body content display here as child */}
          <div className="content pt-5" ref={contentRef}>

            <div className="inner-content container">
              {props.children}

            </div>
            <TaskAddForm />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
