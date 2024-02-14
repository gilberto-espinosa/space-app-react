import { styled } from 'styled-components'

const ItemListaEstilizado = styled.li`
`

const IntemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
  return (
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  )
}

export default IntemNavegacao