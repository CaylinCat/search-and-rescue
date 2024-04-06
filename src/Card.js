import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {/* <img src={this.props.imageUrl} alt="Avatar" className="card-image" /> */}
                <div className="card-info">
                    <h2>{this.props.name}</h2>
                    <p>Age: {this.props.age}</p>
                    <p>Date: {this.props.date}</p>
                </div>
            </div>
        );
    }
}

export default Card;