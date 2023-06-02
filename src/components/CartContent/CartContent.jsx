import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import CartEmpty from "./CartEmpty";

const CartContent = () => {
    const { cart } = useContext(dataContext);

    //condition ? true : false

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <CartElements />
                    <CartTotal />
                </>
            ) : (
                <>
                    <CartEmpty />
                </>
            )}
        </>
    )
}


export default CartContent
