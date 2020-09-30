import React from 'react';

import { 
  Container,
  Condition,
  Row,
  DispatchTag,
  PriceCard,
  PriceRow,
  HeartIcon,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
 } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 20 vendidos</Condition>

      <Row>
        <h1>Camiseta branca de marca</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em até 3x de R$ 11,67</InstallmentsInfo>
      </PriceCard>
        <StockStatus>Estoque disponível</StockStatus>
        <MethodCard>
          <CheckIcon />

          <div>
            <span className="title">Frete grátis</span>
            <span className="details">Benefício Lorem Ipsum</span>
            <a href="#" className="more">
              Ver mais opções
            </a>
          </div>
        </MethodCard>
        <Actions>
          <Button solid >Comprar agora</Button>
          <Button>Adicionar ao carrinho</Button>
        </Actions>

        <Benefits>
          <li>
            <ShieldIcon />
            <p>
              Compra garantida, ou devolvemos o seu dinheiro.
            </p>
          </li>
        </Benefits>
    </Container>
  );
};

export default ProductAction;
