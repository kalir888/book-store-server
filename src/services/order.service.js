import Cart from '../models/cart.model';

export const placeOrder = async (userId) => {
    const checkCart = await Cart.findOne({userId: userId});
    if(checkCart == null) {
        throw Error('Cart does not exist');
    }else {
        const cartData = await Cart.findOneAndUpdate({userId: userId},{isPurchased: true},{new: true});
        return cartData;
    }
};