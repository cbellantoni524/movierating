import React from "react";
import Stars from "./stars-rating";

//container to hold the star rating buttons and declare functionality using props and call the state of the name and count.

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {}
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;
        return state;
        });
    }

    render() {
        return (
            <div>
                <Stars name="one"
                count={this.state.counts.one}
                onClick={this.countClicks} 
                />
                <Stars name="two"
                count={this.state.counts.two}
                onClick={this.countClicks}
                />
                <Stars name="three"
                count={this.state.counts.three}
                onClick={this.countClicks}
                />
                <Stars name="four" 
                count={this.state.counts.four}
                onClick={this.countClicks}
                />
                <Stars name="five" 
                count={this.state.counts.five}
                onClick={this.countClicks}
                />
            </div>
        );
    }
}