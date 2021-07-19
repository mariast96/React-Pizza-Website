
import styled from "styled-components";
import pic1 from '../../images/featured3.jpg';

export const FeaturedContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${pic1});
height: 100vh;
max-height: 450px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 2rem;
text-align: center;
color: #fff;
`;

export const FeaturedH1 = styled.h1`
  font-size: clamp(3rem, 5.5vw, 5rem);
`;

export const FeaturedP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 1rem;
`;

export const FeaturedBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  color: #fff;
  background: #ffc500;
  transition: 0.2s ease-out;

  &:hover{
     background:#e31837;
     transition: 0.2s ease-out;
     cursor: pointer;
     color: #fff;
  }
`;