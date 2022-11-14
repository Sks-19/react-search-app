import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../Store/product";
import { AiFillStar } from "react-icons/ai";

const FilterSection = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  const handlePriceChecked = (e) => {
    if (e.target.checked) {
      const [min, max] = e.target.value.split("-");
      console.log(min, max);

      const priceFiltered = productList?.filter(
        (product) => product.price >= min && product.price <= max
      );
      console.log(priceFiltered);
      dispatch(productActions.setShowProduct(priceFiltered));
    } else {
      console.log(productList);
      dispatch(productActions.setShowProduct(productList));
    }
  };

  const handleRateChecked = (e) => {
    if (e.target.checked) {
      const rateValue = e.target.value;
      console.log("rate", e.target.value);

      const rateFiltered = productList?.filter(
        (product) => product.rating.rate >= rateValue
      );
      dispatch(productActions.setShowProduct(rateFiltered));
    } else {
      dispatch(productActions.setShowProduct(productList));
    }
  };

  return (
    <>
      <div className="conainer">
        <div
          className="py-3"
          style={{ display: "block" }}
          onChange={handlePriceChecked}
        >
          <p className="text-white">PRICE RANGE</p>
          <Checkbox value={"0-100"} className="text-white">
            Under 100
          </Checkbox>
          <Checkbox value={"100-300"} className="text-white">
            100 - 300
          </Checkbox>
          <Checkbox value={"300-1000"} className="text-white">
            Above 300
          </Checkbox>
        </div>

        <div
          className="py-3"
          style={{ display: "block" }}
          onChange={handleRateChecked}
        >
          <p className="text-white">RATINGS</p>
          <Checkbox value={2} className="text-white">
            2<AiFillStar />& Above
          </Checkbox>
          <Checkbox value={3} className="text-white">
            3<AiFillStar />& Above
          </Checkbox>
          <Checkbox value={4} className="text-white">
            4<AiFillStar />& Above
          </Checkbox>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
