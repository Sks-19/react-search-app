import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../Store/product";
import "./suggestionBox.scss";

const SuggestionBox = () => {
  const dispatch = useDispatch();
  const initialList = useSelector((state) => state.products.initialList);

  const { Meta } = Card;

  const trendingProducts = initialList?.filter(
    (product) => product.id % 4 === 0
  );

  const handleClick = (e) => {
    if (e.target.innerHTML.length <= 20 || e.target.name) {
      const searchResult = initialList?.filter(
        (product) =>
          product.category.toLowerCase() === e.target.innerHTML.toLowerCase() ||
          product.category.toLowerCase() === e.target.name
      );
      dispatch(productActions.setProductList(searchResult));
      dispatch(productActions.setShowProduct(searchResult));
    }
  };

  return (
    <>
      <div className="container" onClick={handleClick}>
        <h6 className="title">Latest Trends</h6>
        <div className="d-flex px-3">
          {trendingProducts?.map((product, i) => {
            return (
              <>
                <Card
                  key={i}
                  hoverable
                  style={{ width: 120, margin: 5 }}
                  name={product.category}
                  cover={
                    <img
                      alt="product"
                      name={product.category}
                      src={product.image}
                      height="150"
                    />
                  }
                >
                  <Meta title={product.category} />
                </Card>
              </>
            );
          })}
        </div>

        <h6 className="pt-2 title">Popular Suggestions</h6>
        <span className="text-secondary d-block">Men's clothing</span>
        <span className="text-secondary d-block">Jewelery</span>
        <span className="text-secondary d-block">Electronics</span>
        <span className="text-secondary d-block">Women's clothing</span>
      </div>
    </>
  );
};

export default SuggestionBox;
