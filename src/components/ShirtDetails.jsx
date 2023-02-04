import data from "./WebScraping/output.json"
import image from "./MainImages/venu_50.jpg"
import "./shirtdetails.css"
import { useLocation,useParams } from "react-router"
import { useEffect, useState } from "react"

const ShirtDetails = () => {
    const [dummy,setDummy]=useState([]);
    const { type }=useParams();
    console.log(type)
    const location=useLocation();
    // const {name,description,price,oldPrice,imag1,imag2,imag3,imag4,imag5}=useLocation().state;

    return (
        <div className="divsion">
            <div className="image-grid">
                <div className="backImg img1"><img src={image} alt="pics" /></div>
                <div className="backImg img2"><img src={image} alt="pics" /></div>
                <div className="backImg img3"><img src={image} alt="pics" /></div>
                <div className="backImg img4"><img src={image} alt="pics" /></div>
                <div className="backImg img5"><img src={image} alt="pics" /></div>
            </div>
            <div className="details_data">
                <h1 className="title" >Allen Solly</h1>
                <p className="subtitle">Men Mustard Formal Shirt</p>
                <div className="pricetitle">
                    <h5 id="cost">₹1039</h5>
                    <p id="xcost">MRP <s>₹2059</s></p>
                    <h5 id="discount">(60% OFF)</h5>
                </div>
                <p id="green">inclusive of all taxes</p>
                <div id="sizechart">
                    <h5 className="headdings">SELECT SIZE</h5>
                    <h6 className="pink">SIZE CHART <i class="fa-solid fa-caret-right"></i></h6>
                </div>
                <div id="sizes">
                    <div>36</div>
                    <div>40</div>
                    <div>44</div>
                    <div>45</div>
                </div>
                <div id="buttons">
                    <button id="bag"><i class="fa-solid fa-bag-shopping"></i>   ADD TO BAG</button>
                    <button id="wishlist"><i class="fa-regular fa-heart"></i>   WISHLIST</button>
                </div>
                <hr />
                <div className="options">
                    <h5 className="headdings">DELIVERY OPTIONS   <i class="fa-solid fa-truck"></i></h5>
                    <div id="textbox">
                        <input type="text" placeholder="Enter pin code" />
                        <p className="pink" id="checking">Check</p>
                    </div>
                    <p id="pincode">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    <div id="paras">
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 30 days returns </p>
                        <p>This item is only returnable and not exchangeable</p>
                        <p>Try & Buy might be available</p>
                    </div>
                    <h5 className="headdings">BEST OFFERS   <i class="fa-solid fa-tag"></i></h5>
                    <h6 className="headdings">Best Price: Rs 849</h6>
                    <ul id="first_ul">
                        <li>Applicable on: Orders above Rs. 799 (only on first purchase)</li>
                        <li>Coupon code: <strong>MYNTRA200</strong></li>
                        <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
                    </ul>
                    <p className="pink">View Eligible Products</p>
                    <h5 className="headdings">EMI Options available</h5>
                    <ul id="second_ul">
                        <li>EMI starting from Rs.49/month</li>
                    </ul>
                    <p className="pink">view Plan</p>
                    <hr />
                    <h5 className="headdings">PRODUCT DETAILS <i class="fa-solid fa-money-check"></i></h5>
                    <p className="data">Mustard solid opaque Formal shirt ,has a band collar, button placket, 1 patch pocket, long regular sleeves, straight hem</p>
                    <h5 className="headdings">Size & Fit</h5>
                    <p className="data">Fit: Regular Fit The model (height 6') is wearing a size 40</p>
                    <h5 className="headdings" >Material & Care</h5>
                    <p className="data" >Cotton</p>
                    <p className="data">machine Wash</p>
                    <h5 className="headdings">Specifications</h5>
                    <div className="specifications">
                        <div class="index-tableContainer">
                            <div class="index-row">
                                <div class="index-rowKey">Sleeve Length</div>
                                <div class="index-rowValue">Long Sleeves</div>
                            </div>
                            <div class="index-row">
                                <div class="index-rowKey">Collar</div>
                                <div class="index-rowValue">Spread Collar</div>
                            </div>
                            <div class="index-row">
                                <div class="index-rowKey">Fit</div>
                                <div class="index-rowValue">Slim Fit</div>
                            </div>
                            <div class="index-row">
                                <div class="index-rowKey">Print or Pattern Type</div>
                                <div class="index-rowValue">Micro Checks</div>
                            </div>
                            <div class="index-row">
                                <div class="index-rowKey">Occasion</div>
                                <div class="index-rowValue">Formal</div>
                            </div>
                            <div class="index-row">
                                <div class="index-rowKey">Length</div>
                                <div class="index-rowValue">Regular</div>
                            </div><div class="index-row">
                                <div class="index-rowKey">Hemline</div>
                                <div class="index-rowValue">Curved</div>
                            </div>
                            <div class="index-row">
                                <div class="index-rowKey">Placket</div>
                                <div class="index-rowValue">Button Placket</div>
                            </div>
                        </div>
                    </div>
                    <p className="pink">See More</p>
                </div>
            </div>
        </div>
    )
}
export default ShirtDetails