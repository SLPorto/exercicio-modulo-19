import CardProduto from "./components/CardProduto/CardProduto";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

function App() {
  return (
    <div>
      <h1>Exercício Módulo 19</h1>
      <Container>
        <CardProduto nome="Tênis Nike" preco={399.0} adicionado={true} />
        <CardProduto nome="Tênis Adidas" preco={499.0} adicionado={false} />
      </Container>
    </div>
  );
}

export default App;
