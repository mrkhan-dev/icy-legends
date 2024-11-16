/* eslint-disable react/prop-types */
import {NavLink} from "react-router-dom";

const NavItem = ({label, address}) => {
  return (
    <NavLink
      to={address}
      className={({isActive}) =>
        isActive ? "text-[#F83D8E]" : "text-gray-800"
      }
    >
      <span className="font-Archivo">{label}</span>
    </NavLink>
  );
};

export default NavItem;
