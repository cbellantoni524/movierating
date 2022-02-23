import React from "react";
import Movie from "./movie";
/*import Stars from "./stars-rating";
import ReviewList from "./review-list";
import ReviewForm from "./review-form";
import Review from "./review";
*/

// Create MovieFeed class and render Move to DOM which will render all other compenets inside of it

export default class MovieFeed extends React.Component {
    render() {
        let movieOne= {
        name: 'Dumb and Dumber',
        };
        let movieTwo= {
        name: 'Zoolander',
         };
        let movieThree= {
        content: 'Scream',
         };
        return (
            <div className="container" id='feed-container'>
                <Movie {...movieOne} />
                <Movie {...movieTwo} />
                <Movie {...movieThree} />
            </div>
        );
    }
}