import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const TestimonialsWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: -60px;
  display: grid;
  align-items: center;
  grid-gap: 6px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const TestimonialsCard = styled.div`
  background: #fff;
  width: 100%;
  max-width: 380px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  z-index: 3;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: grab;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 410px;
  }
`;

export const TestimonialsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TestimonialsH2 = styled.h2`
  text-decoration: none;
  color: #010606;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 900;
`;

export const TestimonialsP = styled.p`
  color: #535461;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 300;
  margin-top: -10px;
`;

export const TestimonialsPraise = styled.p`
  color: #535461;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 350;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
