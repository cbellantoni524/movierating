import React from "react";

// stand alone component with no links to other components to create the stars buttons with counts

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }
    handleClick() {
        this.props.onClick(this.props.name);
    }

    render() {
        return (
            <button
                className="btn btn-danger" id="star-btn" onClick={this.handleClick}>
                {this.props.name} {this.props.count}
                </button>
        );
    }
}