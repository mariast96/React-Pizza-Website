import React from 'react';
import {
   FeaturedContainer,
   FeaturedH1,
   FeaturedP,
   FeaturedBtn
} from './FeaturedElments';

const Featured = () => {
   return (
      <FeaturedContainer>
         <FeaturedH1>Pizza of the Day</FeaturedH1>
         <FeaturedP>Trufle alfredo sauce topped with 24 carat gold dust.</FeaturedP>
         <FeaturedBtn>Order Now</FeaturedBtn>
      </FeaturedContainer>
   )
}

export default Featured
