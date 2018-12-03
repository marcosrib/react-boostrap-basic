import React from 'react'

const HomeCard = (props) => (
    <div className="col-12 col-sm-4">
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary" onClick={props.action}>send button</button>
            </div>
        </div>
    </div>


)
export default HomeCard