import { NavLink } from "react-router-dom";
import { StyledDiv } from "./AuthNav.styled";

const AuthNav = () => (
  <StyledDiv>
    <NavLink
      to="/register"
      className="nav-link"
      activeClassName="nav-activelink"
    >
      Sing up{" "}
    </NavLink>
    <NavLink to="/login" className="nav-link" activeClassName="nav-activelink">
      Log in
    </NavLink>
  </StyledDiv>
);
export default AuthNav;
