import styled from "styled-components";
export const Wrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 10px 0;
    @media screen and (max-width: 643px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 14%;
      border-top: 1px solid black;
      li {
        margin-top: 10%;
        .sub-menu-item {
          cursor: pointer !important;
        }
      }
    }
    li {
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: black;
        font-weight: 500;
        transition: 0.65s;

        &:hover {
          color: #34e065;
        }
        @media screen and (max-width: 1265px) {
          font-size: 15px;
        }
        @media screen and (max-width: 1180px) {
          font-size: 13px;
        }
        @media screen and (max-width: 1015px) {
          font-size: 10px;
        }
      }
    }
  }
`;


export const Buttonw = styled.button`

`