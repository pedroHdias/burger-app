import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  state = {
    totalLikes: 100,
    clicked: false
  };

  LikesHandler = () => {
    const isClicked = this.state.clicked;
    if (isClicked) {
      this.setState(prevState => {
        return { totalLikes: prevState.totalLikes - 1 };
      });
    } else {
      this.setState(prevState => {
        return { totalLikes: prevState.totalLikes + 1 };
      });
    }
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Like Button</h2>
          <button
            onClick={this.LikesHandler}
            className={
              this.state.clicked ? cx("liked", "like-button") : "like-button"
            }
          >
            Like |<span className="like-counter"> {this.state.totalLikes}</span>
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
