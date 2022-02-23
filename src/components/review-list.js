import React from "react";
import Review from "./review";

export default class ReviewList extends React.Component {

    render() {


        let commentOne= {
            content: 'this movie was great!',
            username: 'MovieBuff222',
            date: "1-1-2022"
        };
        let commentTwo= {
            content: 'this movie had terrible acting',
            username: 'CinePhile 123',
            date: "1-1-2022"
        };
        let commentThree= {
            content: 'this movie is ahead of it\'s time',
            username: 'RapidReviewer007',
            date: "1-1-2022"
        };

        

        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
            
                </div>
                <div className="card-body">
                </div>
                <div className="card-footer">
                    <Review {...commentOne} />
                    <Review {...commentTwo} />
                    <Review {...commentThree} />
                    
                </div>
            </div>
        );
    }
}