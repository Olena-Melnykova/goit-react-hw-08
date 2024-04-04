import { NavLink } from "react-router-dom";
import { StyledLink } from "./AuthNav.styled.jsx";

export default function AuthNav() {
  return (
    <StyledLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </StyledLink>
  );
}