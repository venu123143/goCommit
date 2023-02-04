
import React, { useCallback, useEffect, useMemo, useState } from "react"
import style from "./filters.module.css"
import Navbar from "./Navbar";
import data from "./WebScraping/output.json"

const Filters=()=>{
    // const [filter1,setFilter1]=useState({A:true,B:false,C:false,D:false,E:false,F:false,G:false,H:false,I:false,J:false});
    const [filterData,setFilteredData]=useState(data);
    const handleFilterChange = event => {
        if (event.target.checked) {
            console.log("checked")

        }else{
            console.log("unchecked")
        }      
    }
    const handleChange=(event)=>{
        if (event.target.checked) {
            console.log("checked")

        }else{
            console.log("unchecked")
        } 

    }
    const handleChangeColor=(event)=>{
        if (event.target.checked) {
            console.log("checked")

        }else{
            console.log("unchecked")
        } 
    }
    useEffect(()=>{

    },[])
    const sorting=()=>{
        let userSort= document.getElementById("sortBy")
        let sort_value=userSort.options[userSort.selectedIndex].value;
        console.log(sort_value)
    }
    return(
        <div className={style.mainFilter}>
        <Navbar props={filterData}/>
        <div className={style.filters}>
            <div className={style.sideFilter}>
            <h1>FILTERS</h1>
            <p>Bundles <i class="fa-solid fa-caret-down"></i></p>
            <p>Character <i class="fa-solid fa-caret-down"></i></p>
            <p>Collar <i class="fa-solid fa-caret-down"></i></p>
            <p>Country of Origin <i class="fa-solid fa-caret-down"></i></p>
            <p>Fabric <i class="fa-solid fa-caret-down"></i></p>
            <p>Fabric 2 <i class="fa-solid fa-caret-down"></i></p>
            <select name="Sort BY" id="sortBy" className={style.sortSelection} onClick={sorting}>
                <option value="Recomended">Sort BY:Recomended</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
            </select>
            
        </div>
            <div className={style.sideFilter2}>
            <div className={style.boysOrGirls}>
                <input type="radio" name="Gender"/> <label htmlFor="Gender">Men</label><br />
                <input type="radio" name="Gender"/> <label htmlFor="Gender">Women</label><br />
                <input type="radio" name="Gender"/> <label htmlFor="Gender">Boys</label><br />
                <input type="radio" name="Gender"/> <label htmlFor="Gender">Girls</label><br />
            </div>
            <div className={style.Brand}>
                <label htmlFor="Allen Solly"><input type="checkbox" value={"Allen Solly"} onChange={handleFilterChange} name="Allen Solly"/> Allen Solly </label> <br />
                <label htmlFor="Roadster"><input type="checkbox" value={"Roadster"} onChange={handleFilterChange} name="Roadster"/> Roadster </label> <br />
                <label htmlFor="Louie Philippe"><input type="checkbox" value={"Louie Philippe"} onChange={handleFilterChange} name="Louie Philippe"/>Louie Philippe  </label><br />
                <label htmlFor="Van Heusen"><input type="checkbox" value={"Van Heusen"} onChange={handleFilterChange} name="Van Heusen"/>Van Heusen  </label><br />
                <label htmlFor="Jack & Jones Junior"><input type="checkbox" value={"Jack & Jones Junior"} onChange={handleFilterChange} name="Jack & Jones Junior"/>Jack & Jones Junior </label><br />
                <label htmlFor="H&M"><input type="checkbox" value={"H&M"} onChange={handleFilterChange} name="H&M"/>H&M </label><br />
                <label htmlFor="DressBerry"><input type="checkbox" value={"DressBerry"} onChange={handleFilterChange} name="DressBerry"/>DressBerry  </label><br />
                <label htmlFor="TeenTrums"><input type="checkbox" value={"TeenTrums"} onChange={handleFilterChange} name="TeenTrums"/>TeenTrums </label><br />
                <label htmlFor="Style Quotient"><input type="checkbox" value={"Style Quotient"} onChange={handleFilterChange} name="Style Quotient"/>Style Quotient  </label><br />
            </div>
            <div className={style.Price}>
                <label htmlFor="500 to Rs.1000"><input type="checkbox"  onChange={handleChange} name="Allen Solly"/>Rs.500 to Rs.1000</label><br />
                <label htmlFor="1001 to Rs.1999"><input type="checkbox"  onChange={handleChange} name="Allen Solly"/>Rs.1001 to Rs.1999</label><br />
                <label htmlFor="2000 to Rs.2500"><input type="checkbox"  onChange={handleChange} name="Allen Solly"/>Rs.2000 to Rs.2500</label><br />
                <label htmlFor="2501 to Rs.3999"><input type="checkbox"  onChange={handleChange} name="Allen Solly"/>Rs.2501 to Rs.3999</label><br />
            </div>
            <div className={style.color}>
                <label htmlFor="blue"><input type="checkbox"  onChange={handleChangeColor} name="blue"/>blue</label><br />
                <label htmlFor="black"><input type="checkbox"  onChange={handleChangeColor} name="black"/>black</label><br />
                <label htmlFor="red"><input type="checkbox"  onChange={handleChangeColor} name="red"/>red</label><br />
                <label htmlFor="white"><input type="checkbox"  onChange={handleChangeColor} name="white"/>white</label><br />
                <label htmlFor="pink"><input type="checkbox"  onChange={handleChangeColor} name="pink"/>pink</label><br />
                <label htmlFor="purple"><input type="checkbox"  onChange={handleChangeColor} name="purple"/>purple</label><br />   
            </div>
            </div>
        </div>
            
        
        </div>
    )
}
export default Filters