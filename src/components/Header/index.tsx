import logo from "../../assets/Logo.svg";
import { Button } from "../Button";
import * as S from "./style";

export function Header() {
  return (
    <S.Container>
      <S.Nav>
        <img src={logo} alt="foto do ibson, dono do site" />
        <Button type="button" variable="primary" title="Home" />
      </S.Nav>
    </S.Container>
  );
}
