import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StyleImg, StyledSpan, StledBtn, StyledDiv } from "./UserMenu.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "../../image/avatar.png";
import authOperations from "../../redux/auth/auth-operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <StyledDiv>
      <StyleImg src={avatar} alt="" width="36" />
      <StyledSpan>Welcome, {name}</StyledSpan>
      <StledBtn type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </StledBtn>
    </StyledDiv>
  );
}
