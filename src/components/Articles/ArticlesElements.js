import styled from "styled-components";

export const ArticlesContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e4faed;
`;

export const ArticlesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: -10px;
  display: grid;
  align-items: center;
  grid-gap: 6px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const ArticlesCard = styled.div`
  background: #fff;
  width: 100%;
  max-width: 300px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  z-index: 3;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ArticlesH1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 150px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ArticlesH2 = styled.h2`
  text-decoration: none;
  color: #010606;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 900;
  margin-top: 15px;
  text-align: center;
`;

export const ArticlesP = styled.p`
  color: #535461;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 300;
  margin-top: -10px;
`;
