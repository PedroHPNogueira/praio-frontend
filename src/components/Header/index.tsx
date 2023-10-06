import { HeaderMain } from "./style";
import { GearSVG } from "./GearSVG";
import Cr7 from "../../assets/cr7.png";

export const Header = () => {
  return (
    <HeaderMain>
      <div className="container">
        <div className="userDiv">
          <img src={Cr7}/>
          <div>
            <h2>Pedro Nogueira</h2>
            <p>Nome usuário: @user125</p>
          </div>
        </div>
        <GearSVG />
      </div>
    </HeaderMain>
  );
};
