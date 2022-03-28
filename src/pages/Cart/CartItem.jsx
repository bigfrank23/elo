import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Top = styled.div`
  /* flex: 1; */
  background: #000;
  height: 50vh;
  width: 100%;
  display: flex;
`
const TopContent = styled.div`
  /* flex: 1; */
  margin: 28vh auto;
`;
const TopTitle = styled.h1`
  /* font-family: 'Roboto Condensed', Sans-Serif; */
  font-weight: 700;
  text-align: center;
  color: #fff;
`;
const Bottom = styled.div`
 /* flex: 2; */
 height: 100vh;
 padding: 4rem;
`
const BottomContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
const CenterContainer = styled.div`
  flex: 3;
  align-self: flex-start;
`
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.h2`
  color: #415161;
  font-weight: 500;
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: capitalize;
  /* font-size: 22px; */
  /* color: #34548c; */
  flex: 1;
  &:first-child{
      flex: 5;
  }
`;

const ItemContainer = styled.div`
  display: flex;
`;
const Txt1 = styled.h3`
  color: #415161;
  font-weight: 500;
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const Txt2 = styled.p`
  color: #415161;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const ItemRightContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 20px;
  padding: 2rem 0px 0px 0;
`;

const ItemLeftContainer = styled.div`
  padding: 25px;
  flex: 5;
  display: flex;
`;
const Image = styled.img``;
const Desc = styled.p`
  margin-left: 1.5rem;
  align-self: center;
`;
const Price = styled.h2`
  color: #415161;
  font-size: 1rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Hr= styled.hr`
  margin: 35px 0 0;
`
const InputContainer = styled.div`
  /* margin: 35px 0 0; */
  padding: 35px 0 0;
  display: flex;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 37%;
  border-top: 1px solid red;
  border-left: 1px solid red;
  border-bottom: 1px solid red;
  border-radius: 3px;

`;
const BoxLeft = styled.div`
  font-weight: 500;
  margin: auto;
`;
const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  .input-icon{
    background: red;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
  }
`;
const AddButton = styled.button`
  float: right;
  margin-top: 10px;
  font-weight: bold;
  border-radius: 3px;
  &:hover {
    border: none;
    background: #040476;
    color: #fff;
    transform: translate3d(0, -3px, 0);
    transition: 0.5s ease;
  }
`;
const RightContainer = styled.div`
  flex: 1;
  align-self: flex-start;
  border: 2px solid #ddd;
  padding: 2rem;
`;
const CartTitle = styled.h3`
  color: #34548c;
  font-size: 1rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 20px;
`;
const TitleList = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleListItem = styled.h5`
  color: #415161;
  font-weight: 500;
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  &:last-child{
    font-weight: 400;
  }
`;
const Hr2 = styled.hr``;
const ProceedButton = styled.button`
  margin-top: 30px;
  width: 100%;
  font-weight: bold;
  border-radius: 3px;
  &:hover {
    border: none;
    background: #040476;
    color: #fff;
    transform: translate3d(0, -3px, 0);
    transition: 0.5s ease;
  }
`;


const CartItem = ({item, onUpdateCartQty, handleEmptyCart, cart}) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Top>
          <TopContent>
            <div>
              <TopTitle>Cart Page</TopTitle>
            </div>
          </TopContent>
        </Top>
        <Bottom>
          <BottomContent>
            <CenterContainer>
              <TitleContainer>
                <Title>Product</Title>
                <Title>Quantity</Title>
                <Title>Subtotal</Title>
              </TitleContainer>
              <Hr />
              <ItemContainer>
                <ItemLeftContainer>
                  <Image src={item.image.url} width={100} alt="" />
                  <Desc>
                    <Txt1>{item.name}.</Txt1>
                    <Txt2>{item.line_total.formatted_with_symbol}</Txt2>
                  </Desc>
                </ItemLeftContainer>
                <ItemRightContainer>
                  <Box>
                    <BoxLeft>{item.quantity}</BoxLeft>
                    <BoxRight>
                      <i
                        className="fa fa-angle-up input-icon"
                        aria-hidden="true"
                        onClick={() =>
                          onUpdateCartQty(item.id, item.quantity + 1)
                        }
                      />
                      <i
                        className="fa fa-angle-down input-icon"
                        aria-hidden="true"
                        onClick={() =>
                          onUpdateCartQty(item.id, item.quantity - 1)
                        }
                      />
                    </BoxRight>
                  </Box>
                  <Price>{item.line_total.formatted_with_symbol}</Price>
                  {/* <Delete>
                            <i className="fa fa-trash" aria-hidden="true" />
                        </Delete> */}
                </ItemRightContainer>
              </ItemContainer>
              <InputContainer></InputContainer>
              <Hr />
              <AddButton onClick={handleEmptyCart}>
                Empty cart
              </AddButton>
            </CenterContainer>
            <RightContainer>
              <CartTitle>Cart totals</CartTitle>
              <TitleList>
                <TitleListItem>Subtotal</TitleListItem>
                <TitleListItem>3433434</TitleListItem>
              </TitleList>
              <Hr2 />
              <TitleList>
                <TitleListItem>Total</TitleListItem>
                <TitleListItem>{cart.subtotal.formatted_with_symbol}</TitleListItem>
              </TitleList>
              <Link to='/checkout'>
              <ProceedButton>Proceed to checkout</ProceedButton>
              </Link>
            </RightContainer>
          </BottomContent>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default CartItem