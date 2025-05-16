import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartView() {
    const { cartData } = useContext(CartContext);
    return (
        <header className="flex items-center justify-between bg-amber-500 ">
            Cart items : {cartData?.length}
        </header>
    );
}

export default CartView;
