import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.styles.scss';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToChecoutHandler = () => {
    navigate('./checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToChecoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
