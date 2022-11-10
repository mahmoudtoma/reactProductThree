import React from "react";

const Box = ({DataMenu}) => {

    return (
        <div className="card-all">
            {DataMenu.length ? (DataMenu.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img className="image-menu" src={item.image}/>
                            <div className="text" >
                                <h5>{item.name}</h5>
                                <p>{item.data}</p>
                                <b>{item.price}</b>
                            </div>
                        </div>
                    )
                })) : <h2 className="no-food" >There are no Food</h2> }
        </div>
    )
}
export default Box