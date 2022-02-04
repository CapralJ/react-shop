function Cart(props) {
    const {quantity = 0, hendleBasketShow = Function.prototype} = props;
    return <div 
            className="cart #ff1744 red accent-3 white-text"
            onClick={hendleBasketShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
            <span className="cart-quantity">{quantity}</span>) : null}
    </div>
}

export {Cart}