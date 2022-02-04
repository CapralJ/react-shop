import {BasketItem} from './BasketItem'
function BasketList(props) {
    const {order = [], 
        hendleBasketShow= Function.prototype,
        removeFromBasket= Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    },0)

    return ( 
    <ul class="collection basket-list">
        <li  class="collection-item active">Корзина</li>
            {
                order.length ? order.map( item => (
                    <BasketItem 
                        key={item.id} 
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        removeFromBasket={removeFromBasket}
                        {...item} 
                    />
                )) : <li class="collection-item"> Корзина пуста </li>
            }
        <li class="collection-item active">
            Общая стоимость: {totalPrice} тг. 
        </li>
        <li className='collection-item'>
            <button className=" btn" >Оформить</button>
        </li>
        <i className=' material-icons basket-close' onClick={hendleBasketShow} >close</i>
  </ul>)
}

export {BasketList};