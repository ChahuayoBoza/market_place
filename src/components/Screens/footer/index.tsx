import React from "react";
import { Container, CopyrightText, FooterContainer, ImgTopFooter, LinkList, LinksContainer } from "./styles";

const Footer = () => {
    return (        
            <Container>
                <ImgTopFooter src="https://cdn.shopify.com/s/files/1/0761/1636/1499/files/green_wave_footer_2.svg?v=1684772555"></ImgTopFooter>  
                <FooterContainer>   
                {/* <FooterLogo /> */}
                <LinksContainer>
                    <LinkList>
                    {/* Repite esto para cada enlace de redes sociales */}
                    {/* <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://tiktok.com">TikTok</a></li> */}
                    {/* ...otros enlaces */}
                    </LinkList>
                    <LinkList>
                    {/* Repite esto para cada enlace de sección */}
                    {/* <li><a href="/plushies">PLUSHIES</a></li>
                    <li><a href="/apparel">APPAREL</a></li>
                    <li><a href="/accessories">ACCESSORIES</a></li> */}
                    {/* ...otros enlaces */}
                    </LinkList>
                </LinksContainer>
                <CopyrightText>
                    © 2024 CAPI-STORE. Todos los derechos reservados.
                </CopyrightText>
                </FooterContainer>
            </Container>
    );
};

export default Footer;  