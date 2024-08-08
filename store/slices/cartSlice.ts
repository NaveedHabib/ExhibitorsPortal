import { StandSpaceItemModel } from '@/sysmodel/StandSpaceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: StandSpaceItemModel[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<StandSpaceItemModel>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.StandSpaceItemID);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.StandSpaceItemID !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: number, quantity: number }>) => {
      const item = state.items.find(item => item.StandSpaceItemID === action.payload.productId);
      if (item) {
        item.Quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
