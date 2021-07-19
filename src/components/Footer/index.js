import React from 'react';
import {
   FooterContainer,
   FooterWrap,
   SocialMedia,
   SocialMediaWrap,
   SocialLogo,
   SocialIcons,
   SocialIconsLink
} from './FooterElements';

import {
   FaFacebook,
   FaInstagram,
   FaTwitter,
   FaYoutube
} from 'react-icons/fa';

const Footer = () => {
   return (
      <FooterContainer>
         <FooterWrap>
            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to="/">Pizza</SocialLogo>

                  <SocialIcons>
                     <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                     </SocialIconsLink>

                     <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                     </SocialIconsLink>

                     <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                     </SocialIconsLink>

                     <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                     </SocialIconsLink>
                  </SocialIcons>

               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer
