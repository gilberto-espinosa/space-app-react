import { styled } from "styled-components";
import ImagemLogo from "/imagens/logo.png";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src={ImagemLogo} alt="Logo Space app" />
      <CampoTexto />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
