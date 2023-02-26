import { createSlice } from "@reduxjs/toolkit";

 
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            let productId = action.payload._id;
            let foundId = state.products.find(item => item._id === productId)
            if(foundId){
                if(state.quantity >= 1){ state.quantity -= 1};
                return;
            }else{
                state.products.push(action.payload);
            }
               state.total +=  action.payload.quantity * action.payload.price;
        },

        deleteProduct: (state, action) =>{
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload._id), 
                1
            )
            if(state.total > 0){state.total -= (action.payload.quantity * action.payload.price)};
            if(state.quantity >= 1){ state.quantity -= 1};
            if(state.total <= 0 ){state.total = 0};
        },

        updateProduct: (state, action) => {
                state.products = action.payload.product;
                
                const itemTotal = [...state.products.map((item) => {
                    return item.quantity * item.price;
                })];

                const newTotal  = itemTotal.reduce((result, nextItem) => {
                    return result + nextItem;
                }, 0);

                state.total = parseInt(newTotal);
        },
    }
});
export const { addProduct, deleteProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;