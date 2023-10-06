import styled from "styled-components";

export const WalletMain = styled.div`
  padding: 0 22px;

  .balanceSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 16px 16px 13px;
    border-bottom: 1px solid var(--main-color);
  }

  .balanceDiv {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .balanceDiv p {
    color: #909090;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .balanceDiv span {
    color: var(--main-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > img {
    width: 100%;
    max-height: 160px;
    object-fit: cover;

    margin: 21px 0;
  }

  .historyDiv {
    display: flex;
    flex-direction: column;
  }

  .historyDiv header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;

    padding: 8px 16px;
    background-image: linear-gradient(89deg, #eb690b -2.82%, #f28b22 90.37%);
  }

  .historyDiv header h3 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .historyDiv header p {
    color: #fff;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border-bottom: 1px solid #fff;
  }

  .historyDiv li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 16px;
    border-bottom: 1px solid #7071724d;
  }

  .historyDiv li div {
    display: flex;
    flex-direction: row;
    gap: 57px;
  }

  .historyDiv li div p {
    color: #7071728c;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .historyDiv li div span {
    color: #909090;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .historyDiv li svg {
    color: #70717269;
    height: 20px;
    width: 20px;
  }

  .buttonsDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    margin-top: 34px;
  }

  .depositButton {
    width: 191px;
    height: 41px;
    border-radius: 7.56px;
    border: none;
    background: #f28b22;
  }
`;
