import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.js";

const CartDropdown = () => {
  const cartItems = useSelector( selectCartItems );
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartDropdownButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
