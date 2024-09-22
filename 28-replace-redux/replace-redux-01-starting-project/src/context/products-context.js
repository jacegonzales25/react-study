import React, { useState } from "react";

const ProductsContext = React.createContext({
  products: [],
  toggleFav: () => {},
});

const ProductsProvider = (props) => {
  const [productsList, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProducts((currentProductsList) => {
      const prodIndex = currentProductsList.findIndex(
        (p) => p.id === productId
      );
      const newFaveStatus = !currentProductsList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductsList];
      updatedProducts[prodIndex] = {
        ...currentProductsList[prodIndex],
        isFavorite: newFaveStatus
      }
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
