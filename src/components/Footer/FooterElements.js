import styled from "styled-components";
import { Link } from "react-router-dom"; 

export const FooterContainer = styled.footer`
background-color: #101522;
`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:20px;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width:820px){
    padding-top: 32px;
}
`
export const FooterLinksWrapper = styled.div`
display: flex;


@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;

width: 100%;
box-sizing: border-box;
color: #2ecc71;
@media screen and (max-width:420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

export const FooterLinkTitle = styled.div`
font-size: 18px;
margin-bottom: 16px;
color:#fff;
`
// export const Footer = styled.div`
// display:flex;
// flex-direction:row;
// `
export const FooterLink = styled.div`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem,;
margin-top: 2rem;
font-size: 16px;
&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}
`
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`
export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;


    flex-direction: row;

`
export const SocialLogo = styled(Link)`
color: #2ecc71;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

`
export const WebsiteRight = styled.small`
padding:1rem;
 color:#fff;
 margin-bottom: 16px;
 padding-right:1.5rem;
`
export const SocialIcons = styled.div`
display: flex;
// justify-content:center;
// flex-direction:row;
align-items: center;
width: 10px;
padding-right=2rem;


`
export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
padding-right:.75rem;
margin-bottom:1.25rem;

`
