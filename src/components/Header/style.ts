import { styled } from "styled-components";

export const HeaderMain = styled.header`
  margin: 55px 22px 0;
  padding-bottom: 26px;
  border-bottom: 1px solid var(--main-color);

  .container {
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .userDiv {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .userDiv > img {
    width: 67px;
    height: 67px;
    border-radius: 50%;
  }

  .userDiv > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  .userDiv > div > h2 {
    color: var(--main-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .userDiv > div > p {
    color: var(--main-color);
    font-size: 14.059px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  svg {
    color: linear-gradient(180deg, #ff5f5f 0%, #f062c0 100%);
  }
`;
