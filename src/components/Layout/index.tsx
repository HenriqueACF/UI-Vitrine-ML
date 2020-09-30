import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Product from '../Product';
//STYLES
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
