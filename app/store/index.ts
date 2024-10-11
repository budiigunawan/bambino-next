import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '../lib/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface States {
  cart: CartItem[];
}

interface Actions {
  addToCart: (cartItem: CartItem) => void;
}

export const useCartStore = create(
  persist<States & Actions>(
    (set) => ({
      cart: [],
      addToCart: (cartItem: CartItem) =>
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (item) => item.product.id === cartItem.product.id
          );

          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].quantity += cartItem.quantity;
            return { cart: updatedCart };
          }

          return { cart: [...state.cart, cartItem] };
        }),
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
