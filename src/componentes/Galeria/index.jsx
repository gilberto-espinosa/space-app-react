import Tags from "./Tags";
import Imagem from "./Imagem";
import Titulo from "../Titulo";
import Populares from "./Populares";
import styled from "styled-components";


const GaleriaContainer = styled.div`
  display: flex;
  gap: 40px;
`;
const SecaoFluida = styled.section`
  flex-grow: 1;
`;
const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAoternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAoternarFavorito={aoAoternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
