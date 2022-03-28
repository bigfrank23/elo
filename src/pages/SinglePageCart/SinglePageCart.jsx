import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar'

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
const TopTitle = styled.h2`
  font-family: 'Roboto Condensed', Sans-Serif;
  font-weight: 700;
  text-align: center;
  color: #dadada;
`;
const TopList = styled.ul`
  list-style: none;
  display: flex;
  color: red;
  padding: 0;
  margin: 0;
  &:hover{
    color: #fff;
  }
`;
const TopListItem = styled.li`
  margin-left: 10px;
  .list-icon{
    margin-left: 10px;
    color: #fff;
  }
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
const LeftContainer = styled.div`
  flex: 1;
  width: 50%;
  align-self: flex-start;
`
const Img = styled.img`
  width: 70%;
  height: 70%;
`
const CenterContainer = styled.div`
  flex: 1;
  align-self: flex-start;
`
const Title = styled.h2`
  font-family: 'Poppins', Sans-Serif;
  font-weight: 400;
  text-transform: capitalize;
  font-size: 22px;
  color: #34548c;
  margin-bottom: 10px;
`;
const Price = styled.h2`
  font-family: "Poppins", Sans-Serif;
  font-weight: 700;
  font-size: 20px;
  color: red;
  margin-bottom: 1.5em;
`;
const Desc = styled.p`
 color: #415161;
 margin-bottom: 1.5em;
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
  width: 25%;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
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
    background: #000;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
  }
`;
const AddButton = styled.button`
  margin-left: 20px;
  &:hover {
    border: none;
    background: #040476;
    color: #fff;
    transform: translate3d(0,-3px,0);
    transition: 0.5s ease;
  }
`;
const Category = styled.h1`
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 700;
  color: #415161;
  /* margin: 35px 0 0; */
  padding: 35px 0 0;
`;
const Span = styled.span`
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #415161;
  opacity: 0.7;
  font-weight: 500;
`;
const Social = styled.div`
  /* margin: 35px 0 0; */
  padding: 35px 0 0;
  display: flex;
  color: #415161 !important;
  background: unset;
  .social-icon{
    flex: .1;
  }
`;
const RightContainer = styled.div`
  flex: 1;
  align-self: flex-start;
`;
const ProductTitle = styled.h3`
  color: #34548c;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 20px;
`;
const TitleList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const TitleListItem = styled.li``;

const SinglePageCart = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
          <Top>
            <TopContent>
              <div>
                <TopTitle>
                  Lorem, ipsum dolor.
                </TopTitle>
                <TopList>
                  <TopListItem>
                    Home
                    <i className="fa fa-angle-right list-icon" aria-hidden="true" />
                  </TopListItem>
                  <TopListItem>
                    Uncategorized
                    <i className="fa fa-angle-right list-icon" aria-hidden="true" />
                  </TopListItem>
                  <TopListItem>
                    Lorem, ipsum.
                  </TopListItem>
                </TopList>
              </div>
            </TopContent>
          </Top>
          <Bottom>
              <BottomContent>
                <LeftContainer>
                  <Img src='https://elonatech.com.ng/wp-content/uploads/2022/02/Honeywell-orbit-barcode.gif' alt='' />
                </LeftContainer>
                <CenterContainer>
                  <Title>Lorem ipsum dolor sit.</Title>
                  <Price>N500000</Price>
                  <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae.
                  </Desc>
                  <Hr />
                  <InputContainer>
                  <Box>
                    <BoxLeft>
                      1
                    </BoxLeft>
                    <BoxRight>
                      <i className="fa fa-angle-up input-icon" aria-hidden="true" />
                      <i className="fa fa-angle-down input-icon" aria-hidden="true" />
                    </BoxRight>
                  </Box>
                  <AddButton>Add to cart</AddButton>
                  </InputContainer>
                  <Hr />
                  <Category>
                    Lorem : <Span>low</Span>
                  </Category>
                  <Hr />
                  <Social>
                    <i className="fa fa-twitter social-icon" aria-hidden="true" />
                    <i className="fa fa-pinterest social-icon" aria-hidden="true" />
                    <i className="fa fa-instagram social-icon" aria-hidden="true" />
                    <i className="fa fa-linkedin social-icon" aria-hidden="true" />
                  </Social>
                </CenterContainer>
                <RightContainer>
                  <ProductTitle>
                    Lorem, ipsum.
                  </ProductTitle>
                    <TitleList>
                      <TitleListItem>Computers</TitleListItem>
                      <TitleListItem>Computers</TitleListItem>
                      <TitleListItem>Computers</TitleListItem>
                      <TitleListItem>Computers</TitleListItem>
                      <TitleListItem>Computers</TitleListItem>
                    </TitleList>
                </RightContainer>
              </BottomContent>
          </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default SinglePageCart