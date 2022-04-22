import React from 'react'


const Exchange =(props)=>{
    return(
        <div className="exchange">
            <div className="title">
                <img src={props.icon} />
                <span>{props.name}</span>
                <span className="status">{props.status}</span>
                <img onClick={props.info} className="dots" src="./assets/Dots.svg" />
            </div>
            <span className="amount">{props.amount}</span>
            <div className="access">
                <button className="increase"><img src="./assets/arrow-bottom.svg" /></button>
                <button className="decrease"><img src="./assets/arrow-top.svg" /></button>
                <button className="card"><img src="./assets/credit-card.svg" /></button>
            </div>
        </div>
    )
}

export default Exchange;