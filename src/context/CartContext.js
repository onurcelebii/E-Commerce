import React, { createContext, useContext, useState, useEffect } from "react";

// CartContext oluşturuluyor
const CartContext = createContext();

// useCart custom hook'u, Context'e erişim sağlamak için
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Alert state'ini ekliyoruz

  // Sayfa yüklendiğinde localStorage'dan sepet verisini alıyoruz
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Sepete ürün eklemek için fonksiyon
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Ürün zaten sepette, miktarını artır
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Güncellenen sepeti localStorage'a kaydediyoruz
        return updatedCart;
      }

      // Ürün sepette yoksa yeni olarak ekle
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Güncellenen sepeti localStorage'a kaydediyoruz
      return updatedCart;
    });

    setShowAlert(true); // Ürün sepete eklendiğinde alert gösteriliyor
    setTimeout(() => setShowAlert(false), 3000); // 3 saniye sonra alert gizleniyor
  };

  // Sepetten ürün silmek için fonksiyon
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sepetten silinen ürünü localStorage'dan çıkarıyoruz
      return updatedCart;
    });
  };

  // Sepetteki ürün miktarını artırmak için fonksiyon
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Güncellenen sepeti localStorage'a kaydediyoruz
      return updatedCart;
    });
  };

  // Sepetteki ürün miktarını azaltmak için fonksiyon
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Güncellenen sepeti localStorage'a kaydediyoruz
      return updatedCart;
    });
  };

  // Sepeti temizlemek için fonksiyon
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Sepeti temizlediğimizde localStorage'dan da siliyoruz
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        showAlert, // showAlert'ı da Context'e ekliyoruz
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
