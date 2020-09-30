import React from 'react';
//STYLES
import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
//IMAGE
import tshirtImage from '../../assets/tshirt.png';
//COMPONENTS
import SellerInfo from '../SellerInfo';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info/>
        </Column>

        <Column>
          {/* <ProductAction /> */}
          <SellerInfo /> 

          <WarrantySection/>
          <WarrantySection/>
          <WarrantySection/>

        </Column>
      </Panel>
    </Container>
  );
};
const WarrantySection = () =>(
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsun.</p>
        <p className="description">Receba o que você está esperando ou devolvemos o seu dinheiro.</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor.</p>
        <p className="description">Garantia de 90 dias após a entrega do produto.</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre a garantia.</a>
  </Section>
);


const Info = () =>(
  <Description>
    <h2>Descrição</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum erat diam, eget condimentum magna aliquam vitae. Donec imperdiet nulla in suscipit dictum. Praesent non risus dui. Praesent facilisis enim eget mi malesuada eleifend. Nam vel lacus in nunc semper ultrices.
    <br/>
    <br/>
    Itens inclusos: <br/>
    - Item Incluso <br />
    - Item Incluso <br />
    - Item Incluso <br />
    - Item Incluso <br />

    Pellentesque mollis urna lacus, ut vulputate justo scelerisque in. Ut volutpat dui non urna fringilla aliquet. Aliquam ac sagittis nisi, id venenatis lorem. Quisque ut mi mollis diam consectetur iaculis.
    </p>
  </Description>
)

export default Product;
