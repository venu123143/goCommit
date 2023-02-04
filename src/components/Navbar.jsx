
import { useState } from "react"
import Filters from "./Filters";
import nav_logo from "./MainImages/logo-myntra.png"
import"./navbar.css"
import ShirtsData from "./ShirtsData";
// import data from "./WebScraping/output.json"

const Navbar=({props})=>{
    const [query,setQuery]=useState("");
    const search=(data)=>{  
        return data.filter((item)=>item.brand.toLowerCase().includes(query));
    }
    const [isOpen, sertOpen]=useState(true);
    const handleToggle=()=>{
        sertOpen(!isOpen);
    };
    return(
        <div>
        <div id="main">
        <section className="section">
            <article className="article">
                <button onClick={handleToggle} className="toggleBtn">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div className="logo">
                    <img src={nav_logo} alt="myntra logo" />
                </div>
                <div className={`navbar-menu ${isOpen ? "show" : "hide"}`} >
                    <i class="fa-solid fa-bars"></i>
                    <ul>
                        <li><a href="/">MEN</a></li>
                        <li><a href="/">WOMEN</a></li>
                        <li><a href="/">KIDS</a></li>
                        <li><a href="/">HOME &LIVING</a></li>
                        <li><a href="/">BEAUTY</a></li>
                        <li><a href="/">STUDIO</a></li>
                    </ul>
                </div>
                <div className="inputField">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for products brands and more" onChange={(e)=>setQuery(e.target.value)}/>
                </div>
                <div className="icons">
                    <a href="/"><i class="fa-regular fa-user"> </i><h1>Profile</h1></a>
                    <a href="/"><i class="fa-regular fa-heart"></i><h1>Whishlist</h1></a>
                    <a href="/"><i class="fa-solid fa-bag-shopping"></i><h1>Bag</h1></a>
                </div>
            </article>
        </section>
        <div className="shirtsclass">
            <ShirtsData prop={search(props)}/>
        </div>
        
        </div>
        </div>
        

    )
}
export default Navbar