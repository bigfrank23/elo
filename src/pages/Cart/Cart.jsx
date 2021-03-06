import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import CartItem from './CartItem';

import { Link } from 'react-router-dom';
import Recommended from './Recommended';
import useStyles from './styles'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, onAddToCart}) => {
  // const isEmpty = !cart.line_items?.length  //cart.line_items.length === 
  // console.log(cart);

  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{" "}
      <Link to="/" className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        {/* <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            {" "}
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to='/checkout'
          >
            {" "}
            Check Out
          </Button>
        </div> */}
      </div>
    </>
  );
  if (!cart.line_items) return "...loading";
  return (
    <Container style={{ marginBottom: "20px" }}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterbuttom="true">
        Your Shopping Cart
      </Typography>
      {!cart.line_items?.length ? <EmptyCart /> : <FilledCart />}
      <Recommended cart={cart} onAddToCart={onAddToCart} />
    </Container>
  );
};

export default Cart