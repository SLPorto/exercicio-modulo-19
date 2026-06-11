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
  backgroundColor: props.adicionado ? "#198754" : "#6c757d",
}));

function CardProduto({ nome, preco, adicionado }) {
  return (
    <Container>
      <h3>{nome}</h3>
      <p>BRL {preco}</p>
      <AddToCartButton adicionado={adicionado}>
        Adicionar ao carrinho
      </AddToCartButton>
    </Container>
  );
}

export default CardProduto;
