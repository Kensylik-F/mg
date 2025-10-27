import React, { createContext, useContext, useState } from 'react';

type CartContextType = {
  items: Record<number, number>;
  add: (id: number, price?: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [items, setItems] = useState<Record<number, number>>({});

  const add = (id: number) => {
    setItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };
  const remove = (id: number) => {
    setItems(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };
  const clear = () => setItems({});
  const total = Object.values(items).reduce((s, v) => s + v, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
