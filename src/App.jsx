import Banner from "./componentes/Banner";
import { styled } from "styled-components";
import Cabecalho from "./componentes/Cabecalho";
import bannerBackground from "./assets/banner.png";
import BarraLateral from "./componentes/BarraLateral";
import EstilosGlobais from "./componentes/EstilosGlobais";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner
        texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerBackground}
      />
    </FundoGradiente>
  );
}

export default App;
