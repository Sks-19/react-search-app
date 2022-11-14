import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import SearchResult from "./Components/searchResults";
import { productActions } from "./Store/product";

function App() {
  const dispatch = useDispatch();
  const showProduct = useSelector((state) => state.products.showProduct);

  console.log(showProduct);
  useEffect(() => {
    const getProduct = async () => {
      const reqData = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((products) => dispatch(productActions.setInitialList(products)));
    };
    getProduct();
  }, []);

  return (
    <div className="App">
      <SearchBox />
      {showProduct.length > 0 ? (
        <SearchResult />
      ) : (
        <>
          <div className="App" style={{ height: "90vh" }}></div>
        </>
      )}
    </div>
  );
}

export default App;
