import React from "react";
// import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Carousel from "react-bootstrap/Carousel";
import ProductComponent from "../components/product";

const HomePage = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../images/h4-slide2.png")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="caption-group">
                            <h2 className="caption title">
                                Apple{" "}
                                <span className="primary">
                                    Store <strong>Ipod</strong>
                                </span>
                            </h2>
                            <h4 className="caption subtitle">Phone</h4>
                            <a className="caption button-radius" href="#">
                                <span className="icon"></span>Shop now
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        classNameName="d-block w-100"
                        src={require("../images/h4-slide3.png")}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="caption-group">
                            <h2 className="caption title">
                                Apple{" "}
                                <span className="primary">
                                    Store <strong>Ipod</strong>
                                </span>
                            </h2>
                            <h4 className="caption subtitle"> Phone</h4>
                            <a className="caption button-radius" href="#">
                                <span className="icon"></span>Shop now
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../images/h4-slide4.png")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="caption-group">
                            <h2 className="caption title">
                                Apple{" "}
                                <span className="primary">
                                    Store <strong>Ipod</strong>
                                </span>
                            </h2>
                            <h4 className="caption subtitle">& Phone</h4>
                            <a className="caption button-radius" href="#">
                                <span className="icon"></span>Shop now
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="maincontent-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title">Latest Products</h2>
                                <div className="product-carousel">
                                    <ProductComponent></ProductComponent>

                                    <ProductComponent></ProductComponent>

                                    <ProductComponent></ProductComponent>

                                    <ProductComponent></ProductComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="promo-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo1">
                                <i className="fa fa-refresh"></i>
                                <p>30 Days return</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo2">
                                <i className="fa fa-truck"></i>
                                <p>Free shipping</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo3">
                                <i className="fa fa-lock"></i>
                                <p>Secure payments</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo4">
                                <i className="fa fa-gift"></i>
                                <p>New products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-widget-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">Top Sellers</h2>
                                <a href="" className="wid-view-more">
                                    View All
                                </a>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-1.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Sony Smart TV - 2015</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-2.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Apple new mac book 2015</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-3.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Apple new i phone 6</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">Recently Viewed</h2>
                                <a href="#" className="wid-view-more">
                                    View All
                                </a>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-4.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Sony playstation microsoft</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-1.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Sony Smart Air Condtion</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-2.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Samsung gallaxy note 4</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">Top New</h2>
                                <a href="#" className="wid-view-more">
                                    View All
                                </a>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-3.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Apple new i phone 6</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-4.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Samsung gallaxy note 4</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html">
                                        <img
                                            src="img/product-thumb-1.jpg"
                                            alt=""
                                            className="product-thumb"
                                        />
                                    </a>
                                    <h2>
                                        <a href="single-product.html">Sony playstation microsoft</a>
                                    </h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    );
};

export default HomePage;