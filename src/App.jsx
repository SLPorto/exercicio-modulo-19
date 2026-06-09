import ProductCard from "./components/ProductCard/ProductCard";
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
        <ProductCard name="Tênis Nike" price={399.0} available={true} />
        <ProductCard name="Tênis Adidas" price={499.0} available={false} />
      </Container>
    </div>
  );
}

export default App;
