import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //! get one obj in products
    const [cart, setCart] = useState([]);
    //!  select product.id
    const [kactive, setKactivet] = useState('');
    //!  click add to cart  function
    const addToCart = (product) => {
        let { items = [] } = cart
        const productIndex = items.findIndex(item => item.id === product.id)
        if (productIndex === -1) {
            items.push({
                ...product,
                qty: 1,
                result: [],
                pric: [],
                dis: [], 
            })
        } else {
            items[productIndex].qty++
        }    
        setKactivet(product)
        setIsActive('')
        setQty(true)
        setSprice(false)
        setPdiscu(false)
        const total = calculateCartTotal(items);
        setCart({
            items,
            ...total,
        })    
    };    
    // const [kkhan, setKkhan] = useState('')
    //!  calculate reduc (qty * price)
    const calculateCartTotal = (items) => {
        let CartTotall = items.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
        let Newtotal = items.reduce((prev, curr) => prev + curr.result.join('') * curr.pric.join(''), 0);
        const CartTotal = CartTotall.toFixed(2);
        const NewTotal = Newtotal.toFixed(2)
        return {CartTotal, NewTotal};
    };   
    //!  toggle select item from backgroundColor in cart
    const [isActive, setIsActive] = useState(true);
    //!  arry set all object item
    const [keyitem, setKeyitem] = useState('');
    const GreyClass = (i, item) => {
        setIsActive(isActive === i ? isActive : i);
        setNumbers('');
        setKactivet('');
        setDiscuNumber('');
        setKeyitem(item)
        setNumprices('');
        setQty(true)
        setSprice(false)
        setPdiscu(false)
    }
    //!  add toggle class in qty
    const [qty, setQty] = useState(true);
    const [Pdiscu, setPdiscu] = useState(false);
    const [Sprice, setSprice] = useState(false);
    //!color click qty
    const classAdd = () => {
        setQty(true)
        setSprice(false)
        setPdiscu(false)
    }
    //! color click disc
    const PdiscuAdd = () => {
        setPdiscu(true)
        setQty(false)
        setSprice(false)
    }
    //! color click price
    const SpriceAdd = () => {
        setSprice(true)
        setPdiscu(false)
        setQty(false)
    }
    //!  plusProduct ++ (+1) click 
    const plusProduct = () => {
        // result Qty
        if (!keyitem.result.length && keyitem && qty) {
            setNumbers([...keyitem.result], keyitem.qty++)
        }
        if (keyitem.qty === 0 && keyitem && qty) {
            setNumbers([...keyitem.result], keyitem.qty++)
        }
        // pric in price
    };
    //! minusProduct -- (-1) click
    const minusProduct = () => {
        //qty
        if (!keyitem.result.length && keyitem.qty && qty) {
            keyitem.qty--
        }
        if (keyitem.result && qty) {
            setNumbers([...keyitem.result], keyitem.result.pop(0, 1))
        }
       // price
        if (keyitem.pric && Sprice) {
            setNumbers([...keyitem.pric], keyitem.pric.pop(0, 1))
        }
        //discu
        if (keyitem.pric && Pdiscu) {
            setNumbers([...keyitem.dis], keyitem.dis.pop(0, 1))
        }
        // console.log("kactive", kactive)
        // console.log("keyitem.qty", keyitem.qty)
    }
    //!  click remove all product
    const RemveProductAll = (product) => {
        let { items = [] } = cart
        const productIndex = items.findIndex(item => item.id === product.id)
        if (productIndex !== -1) {
            items.splice(productIndex, 1);
        }
        const total = calculateCartTotal(items);
        setCart({
            items,
            ...total,
        })
    };
    const [numbers, setNumbers] = useState('');
    const [numprice, setNumprices] = useState('');
    const [discuNumber, setDiscuNumber] = useState('');
    // ! Get Value input and Change Number(Qty)Input
    const handleValue = (value) => {
        //qty
        if (qty && !Sprice && !Pdiscu && keyitem.id) {
            keyitem.result.push(value)
            setNumbers([...keyitem.result])
        }
        //price
        if (!qty && !Pdiscu && Sprice && keyitem.id) {
            keyitem.pric.push(value)
            setNumprices([...keyitem.pric])
        }
        // discu
        if (!qty && !Sprice && Pdiscu && keyitem.id) {
            keyitem.dis.push(value)
            setDiscuNumber([...keyitem.pric])
        }
    };

    return <CartContext.Provider
        value={{
            cart, calculateCartTotal, addToCart, RemveProductAll, plusProduct,
             handleValue, minusProduct, kactive, isActive, GreyClass,
            classAdd, qty, Sprice, SpriceAdd, Pdiscu, PdiscuAdd, keyitem, setKeyitem
        }}>{children}</CartContext.Provider>
}