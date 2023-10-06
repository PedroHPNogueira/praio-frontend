import { WalletMain } from "./style";
import { Header } from "../../components/Header";
import { useState } from "react";
import { EyeSVG } from "./EyeSVG";
import Banner1 from "../../assets/Banner1.png";
import {MdKeyboardArrowRight} from "react-icons/md";

export const Wallet = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const saldo = "2103,45";

  const buyHystory = [
    {
      day: "Sab",
      place: "PraiôHall"
    },
    {
      day: "Sab",
      place: "PraiôHall"
    },
    {
      day: "Dom",
      place: "Praiô Seixas"
    },
    {
      day: "Dom",
      place: "Praiô Seixas"
    },
    {
      day: "Dom",
      place: "Praiô Seixas"
    }
  ]

  return (
    <>
      <Header />
      <WalletMain>
        <div className="balanceSection">
          <div className="balanceDiv">
            <p>SALDO EM CONTA</p>
            <span>R$ {isBalanceVisible ? saldo : "*******"}</span>
          </div>
          <div
            className="svgDiv"
            onClick={() => {
              if (isBalanceVisible) return setIsBalanceVisible(false);
              setIsBalanceVisible(true);
            }}
          >
            <EyeSVG />
          </div>
        </div>
        <img src={Banner1}/>
        <div className="historyDiv">
          <header>
            <h3>Histórico de compras</h3>
            <p>Ver mais</p>
          </header>
          <ul>
            {buyHystory.map((buy) => (
              <li>
                <div>
                  <p>{buy.day}</p>
                  <span>{buy.place}</span>
                </div>
                <MdKeyboardArrowRight/>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttonsDiv">
          <button className="depositButton">REALIZAR DEPÓSITO</button>
          <button className="withdrawButton">REALIZAR SAQUE</button>
        </div>
      </WalletMain>
    </>
  );
};
