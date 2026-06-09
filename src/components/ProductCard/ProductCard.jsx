import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
`;

const AddToCartButton = styled.button((props) => ({
  color: "white",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid gray",
  backgroundColor: props.available ? "#198754" : "#6c757d",
}));

function ProductCard({ name, price, available }) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>BRL {price}</p>
      <AddToCartButton available={available}>
        Adicionar ao carrinho
      </AddToCartButton>
    </Container>
  );
}

export default ProductCard;
