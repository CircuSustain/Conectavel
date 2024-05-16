import styled, { css } from "styled-components";
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
import { FaGithub } from 'react-icons/fa'
import logo from '../assets/LogoFooter.png'
import logotipo from '../assets/logotipo.png'

const FooterWrapper = styled.footer`
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding-top: 2rem;
    background: linear-gradient(180deg, rgba(176, 217, 255, 0.2604) -34.62%, rgba(6, 171, 17, 0.4154) 80.41%, rgba(0, 121, 106, 0.62) 99.92%), #2196F3;
    background-blend-mode: color, normal;

`

const LadoEsquerdo_footer = styled.div`
    width: 50%;
    height: 133px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const LadoEsquerdo_footer_logo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const LadoEsquerdo_footer_redes = styled.div`
    display: flex;
    gap: 34px;
    justify-content: center;


`

const LadoDireito_footer = styled.div`
    width: 50%;
    height: 133px;
    display: flex;
    gap: 14px;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        height: fit-content;
        gap: 2px
    }
`

const OpcaoFooter = styled.p`
    font-size: 16px;
    color: #E0E3EA;
    line-height: 160%;
    cursor: pointer;

    @media only screen and (max-width: 1000px){
        text-align: center;
    }

    ${props => props.final && css`
        margin: 10px;
    `}
`

const CircuSustain = styled.div`
    align-items: center;
    display: flex;
`

const DivOpcaoFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`

const DivLogo = styled.div`
    display: flex;
    gap: 10px;


`

const ImgLogo = styled.img`
    height: 59.81px;
`

const DivFooter = styled.div`
    width: 100vw;
    height: 100%;
    padding: 10px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        height: fit-content;
        gap: 10px;
    }
`

const LinhaFinal = styled.div`
    width: 80%;
    height: 1px;
    background-color: #0000002a;
    border-radius: 50px;
`


function Footer() {
    return (
        <FooterWrapper>
            <DivFooter>
                <LadoEsquerdo_footer>
                    <LadoEsquerdo_footer_logo>
                        <DivLogo>
                            <ImgLogo src={logo} />
                            <CircuSustain><img src={logotipo} width='212px' alt="" /></CircuSustain>
                        </DivLogo>
                        <OpcaoFooter>Um ciclo que se renova.</OpcaoFooter>
                    </LadoEsquerdo_footer_logo>
                    <LadoEsquerdo_footer_redes>
                        <a href="https://www.linkedin.com/company/circusustain/" target="_blank"><BiLogoLinkedin size={24} color='#fff' /></a>
                        <a href="https://www.instagram.com/circusustain_/" target="_blank"><BiLogoInstagram size={24} color='#fff' /></a>
                        <a href="https://github.com/CircuSustain" target="_blank"><FaGithub size={24} color='#fff' /></a>

                    </LadoEsquerdo_footer_redes>
                </LadoEsquerdo_footer>
                <LadoDireito_footer>
                    <DivOpcaoFooter>
                        <OpcaoFooter>Sobre nós</OpcaoFooter>
                        <OpcaoFooter>Nossos serviços</OpcaoFooter>
                        <OpcaoFooter>Parcerias</OpcaoFooter>
                    </DivOpcaoFooter>
                    <DivOpcaoFooter>
                        <OpcaoFooter>Descarte eletrônico</OpcaoFooter>
                        <OpcaoFooter>Blog</OpcaoFooter>
                    </DivOpcaoFooter>
                    <DivOpcaoFooter>
                        <OpcaoFooter>Identidade visual</OpcaoFooter>
                        <OpcaoFooter>Colaboradores</OpcaoFooter>
                    </DivOpcaoFooter>
                </LadoDireito_footer>
            </DivFooter>
            <LinhaFinal></LinhaFinal>
            <OpcaoFooter final>Copyright @ 2024 CircuSustain</OpcaoFooter>
        </FooterWrapper>

    );
}

export default Footer