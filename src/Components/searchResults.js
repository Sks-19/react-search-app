import React from "react";
import { Breadcrumb, Layout, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./searchResults.scss";
import FilterSection from "./filterSection";
import { productActions } from "../Store/product";

const { Content, Sider } = Layout;

const SearchResult = () => {
  const dispatch = useDispatch();

  const showProduct = useSelector((state) => state.products.showProduct);

  const handleLike = (e) => {
    const productId = +e.target.closest("div").id;

    const likedData = showProduct?.map((product) => {
      if (product.id === productId) {
        if (product.isChecked) {
          return { ...product, isChecked: false };
        } else {
          return { ...product, isChecked: true };
        }
      } else {
        return product;
      }
    });
    dispatch(productActions.setShowProduct(likedData));
  };

  const handleButton = (e) => {
    const bttn = e.target.parentElement.lastElementChild;
    if (!bttn.closest("svg")) {
      if (bttn?.className?.includes("productButton")) {
        bttn.style.display = "block";
      }
    }
  };

  const handleOutButton = (e) => {
    const bttn = e.target.parentElement.lastElementChild;
    if (!bttn.closest("svg")) {
      if (bttn?.className?.includes("productButton")) {
        bttn.style.display = "none";
      }
    }
  };

  return (
    <>
      <Layout>
        <Content style={{ padding: "0 5px" }}>
          <Breadcrumb style={{ margin: "10px 0" }}>
            <Breadcrumb.Item>
              <h5>Search Results</h5>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "10px 0" }}
          >
            <Sider className="site-layout-background" width={140}>
              <FilterSection />
            </Sider>
            <Content style={{ padding: "0 10px", minHeight: 280 }}>
              <>
                <div className="cards">
                  {showProduct?.map((product) => {
                    return (
                      <>
                        <div className="card m-2" style={{ width: "11rem" }}>
                          <div
                            className="card"
                            onMouseEnter={handleButton}
                            onMouseOut={handleOutButton}
                          >
                            <div class="bg-image">
                              <img
                                className="card-img-top"
                                src={product.image}
                                alt="product"
                                height="200"
                              />
                              <div
                                id={product.id}
                                className="position-absolute top-0"
                                style={{ marginLeft: "75%", marginTop: "8%" }}
                                onClick={handleLike}
                              >
                                {product.isChecked ? (
                                  <HeartFilled
                                    style={{
                                      color: "red",
                                      fontSize: "1.6rem",
                                    }}
                                  />
                                ) : (
                                  <HeartOutlined
                                    style={{
                                      fontSize: "1.6rem",
                                    }}
                                  />
                                )}
                              </div>
                              <div
                                id={`productButton-${product.id}`}
                                className="position-absolute bottom-0 text-light w-100 productButton"
                                style={{
                                  backgroundColor: "rgba(0, 0, 60, 0.6)",
                                }}
                              >
                                <button class="btn p-2 m-0 w-100">
                                  View Product
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            className="card-body"
                            style={{ textAlign: "left" }}
                          >
                            <p
                              className="card-text d-inline"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {`${product.title.slice(0, 16)}..`}
                            </p>
                            <br />
                            <p className="text-primary d-inline">
                              <FaRupeeSign /> {product.price}
                            </p>
                            <br />
                            <span>
                              <Rate allowHalf value={product.rating.rate} />
                              &nbsp;&nbsp;(
                              {product.rating.count})
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            </Content>
          </Layout>
        </Content>
      </Layout>
      {/* <div className="container">
        <div className="row">
          <h5>Search Results</h5>
          <div className="col-3" style={{ textAlign: "left" }}>
            <FilterSection />
          </div>
          <div className="cards col-9">
            {showProduct?.map((product) => {
              return (
                <>
                  <div className="card m-2" style={{ width: "11rem" }}>
                    <div
                      className="card"
                      onMouseEnter={handleButton}
                      onMouseOut={handleOutButton}
                    >
                      <div class="bg-image">
                        <img
                          className="card-img-top"
                          src={product.image}
                          alt="product"
                          height="200"
                        />
                        <div
                          id={product.id}
                          className="position-absolute top-0"
                          style={{ marginLeft: "75%", marginTop: "8%" }}
                          onClick={handleLike}
                        >
                          {product.isChecked ? (
                            <HeartFilled
                              style={{
                                color: "red",
                                fontSize: "1.6rem",
                              }}
                            />
                          ) : (
                            <HeartOutlined
                              style={{
                                fontSize: "1.6rem",
                              }}
                            />
                          )}
                        </div>
                        <div
                          id={`productButton-${product.id}`}
                          className="position-absolute bottom-0 text-light w-100 productButton"
                          style={{ backgroundColor: "rgba(0, 0, 60, 0.6)" }}
                        >
                          <button class="btn p-2 m-0 w-100">
                            View Product
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card-body" style={{ textAlign: "left" }}>
                      <p className="card-text d-inline">
                        {`${product.title.slice(0, 16)}..`}
                      </p>
                      <p className="text-primary d-inline">
                        <FaRupeeSign /> {product.price}
                      </p>
                      <span>
                        <Rate allowHalf value={product.rating.rate} />
                        &nbsp;&nbsp;(
                        {product.rating.count})
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SearchResult;
