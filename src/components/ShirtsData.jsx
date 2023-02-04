import style from "./shirtsdata.module.css"
import { Link } from "react-router-dom"

const ShirtsData=({prop})=>{
    // const [data,setData]=useState({prop})

    return(
        <div className={style.mainDiv}>
            {/* <Filters filter={props}/> */}
            <div className={style.childDiv}>
                <div className={style.productContainer}>
                    {prop.map((ele)=>{ 
                        return(
                            <div className={style.product} key={ele.id}>
                                {/* <a href=""> */}
                                <Link to={{pathname:"/shirts"
                                }}> 
                                <img src={ele.images.shortImg} alt="shirt" />
                                {/* <Carousel responsive={responsive}>
                                    <img src={ele.images.shortImg} alt="shirt" />
                                    <img src={ele.images.shortImg} alt="shirt" />
                                    <img src={ele.images.shortImg} alt="shirt" />
                                    <img src={ele.images.shortImg} alt="shirt" />
                                    <img src={ele.images.shortImg} alt="shirt" />
                                </Carousel> */}
                                <div className={style.items}>
                                    <h1>{ele.brand}</h1>
                                    <button className={style.wishlist}><i class="fa-regular fa-heart"></i>Whishlist</button>
                                    <p className={style.size}>Size:40</p>   
                                    <p className={style.desc}>{ele.description}</p>
                                    <div className={style.details}>
                                        <span className={style.cost}>Rs.{ele.price.curPrice}</span>
                                        <span className={style.Xcost}><s>Rs.{ele.price.oldPrice}</s></span>
                                        <p className={style.discount}>(40% off)</p>
                                </div>
                                </div>
                                {/* </a> */}
                                </Link>
                            </div>
                        )
                    })}
                            
                </div>
                
            </div>
        </div>
    )
}
export default ShirtsData