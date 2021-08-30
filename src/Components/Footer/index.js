import React from 'react'
import {FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

import { 
    FooterContainer, 
    FooterLinksContainer, 
    FooterWrap } from './FooterStyle'



    import { 
        SocialMedia, 
        SocialIconLink, 
        SocialIcons, 
        SocialLogo, 
        SocialMediaWrap, 
        WebsiteRights } from './FooterStyle';


const Footer = () => {

    const copy = '&copy';
    const parser = new DOMParser();
    const decodeString = parser.parseFromString(`<!doctype html><body>${copy}`, 'text/html').body.textContent;

    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                   
                </FooterLinksContainer>

                 <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Ôh de Casa</SocialLogo>
                        <WebsiteRights> Ôh de Casa {decodeString} {new Date().getFullYear()} todos os direitos reservados. </WebsiteRights>
                        
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/andrei.sm0/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/andrei.sm0/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/andrei-moreira/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia> 
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
