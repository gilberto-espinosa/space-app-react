import { styled } from 'styled-components'
import IntemNavegacao from './ItemNavegacao'

import homeAtivo from '/icones/home-ativo.png'
import homeInativo from '/icones/home-inativo.png'
import vistasAtivo from '/icones/mais-vistas-ativo.png'
import vistasInativo from '/icones/mais-vistas-inativo.png'

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <IntemNavegacao 
            iconeAtivo={homeAtivo}
            iconeInativo={homeInativo}
            ativo={true}
          >
            Início
          </IntemNavegacao>
          <IntemNavegacao 
            iconeAtivo={vistasAtivo}
            iconeInativo={vistasInativo}
            ativo={false}
          >
            Mais Visitados
          </IntemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral