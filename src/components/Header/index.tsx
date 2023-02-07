import headerBg from "../../assets/headerbg.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerBg} alt="" />
    </HeaderContainer>
  );
}
