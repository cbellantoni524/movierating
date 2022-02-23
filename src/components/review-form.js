import React from "react";

export default class ReviewForm extends React.Component {

    onTrigger = (event) => { 

        this.props.parentCallback(event.target.myreview.value); 

        event.preventDefault(); 

    } 

  render() {
      return (
        <div>
            <form onSumbmit ={this.onTrigger}>
                <div className="mb-3">
                    <label for="review-from" className="form-label">Tell us what you think</label>
                    <br></br>
                    <input type = "text" review = "myreview" placeholder = "Write Review"/> 
                    <br></br><br></br> 
                    <input type = "submit" value = "Submit"/> 
                    <br></br><br></br>
                </div>
            </form>
        </div>
      );
  } 
}
