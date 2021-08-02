import styled from "styled-components";

export const TeamContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e4faed;

  @media screen and (max-width: 1024px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1750px;
  }
`;

export const TeamWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TeamCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 570px;
  padding: 30px;
  z-index: 3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;

export const TeamIcon = styled.img`
  width: 150px;
  margin-bottom: 10px;
  border-radius: 50% !important;
`;

export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const TeamH2 = styled.h2`
  color: #010606;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 900;
`;

export const TeamP = styled.p`
  color: #535461;
  font-size: 1rem;
  text-align: center;
  font-weight: 300;
  margin-top: -5px;
`;

export const TeamB = styled.p`
  color: #535461;
  font-size: 1rem;
  text-align: center;
  font-weight: 350;
  margin-top: 10px;
`;
