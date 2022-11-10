import React from "react";

const Menu = ({filterData})=> {
    
    const onFilter = (type)=> {
        filterData(type)
    }
    return(
        <div>
            <div className="bot">
                <button className="bottu" onClick={()=> onFilter('all')}>ALL</button>
                <button className="bottu" onClick={()=> onFilter('breackfast')}>BreackFast</button>
                <button className="bottu" onClick={()=> onFilter('Lunch')}>Lunch</button>
                <button className="bottu" onClick={()=> onFilter('Beverages')}>Beverages</button>
                <button className="bottu" onClick={()=> onFilter('Salad')}>Salad</button>
                <button className="bottu" onClick={()=> onFilter('Sweet')}>Sweet</button>
                <div className="line-bot" ></div>
            </div>
        </div>
    )
}
export default Menu

