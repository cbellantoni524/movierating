import React from "react";
import Container from "./container";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";

//create Movie class to contain the ratings, reviews and review form to input a review.
// render contains prefilled information for comments one through three


export default class Movie extends React.Component {
    state = { 
        review: "", 
       } 

    handleCallback = (formData) =>{ 

        this.setState({review: formData})
    }
        render() {
            const {review} = this.state;
            return (
                <div className="card w-75">
                    <div className="card-header bg-primary text-white">
                        {this.props.name}
                    </div>
                    <div className="card-body">
                        Rate this move, click on how many stars you think it deserves.
                    </div>
                    <div className="card-footer">
                        <Container />
                        <ReviewList />
                    </div>
                    <div className="card-footer">
                    <ReviewForm parentCallback = {this.handleCallback}/>
                        {review}
                    </div>
                </div>
            );
        }
    }