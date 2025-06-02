import "./card.css"

function Card(props){

    return(
        <div className="card" onClick={() => props.onClick(props.id)}>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <img
                        className="circle-img"
                        src={props.url}
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p>{props.tel}</p>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card