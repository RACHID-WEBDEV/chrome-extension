import classNames from "classnames";
// import { Link } from "react-router-dom";
import { MenuTypes } from "../../data/menu";
import { Link as ScrollLink } from "react-scroll";

const Navlink = ({ className, url, title }: MenuTypes) => {
  return (
    <>
      {/* <Link to={url}>
        <li className={classNames("text-secondary-800 text-sm ", className)}>
          {title}
        </li>
      </Link> */}

      <ScrollLink
        activeClass="active"
        to={url}
        spy={true}
        offset={-30}
        smooth={true}
        duration={500}
      >
        <li
          className={classNames(
            "text-secondary-800 text-sm  cursor-pointer",
            className
          )}
        >
          {title}
        </li>
      </ScrollLink>
    </>
  );
};

export default Navlink;
