import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { selectGame } from "../Action/action";
import { connect } from "react-redux";
import footballIcon from "../images/football.svg"; // Import your icon image

export class Games extends Component {
  handlebook = (i) => {
    this.props.selectGame(i);
    this.props.history.push("/booking");
  };
  getFormattedDate(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1; // Months are zero-based
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }
  handleSearch = () => {
    this.props.history.push("/search");
  };
  componentDidMount() {
    this.props.postDate(this.getFormattedDate(new Date()));
    this.props.getGameAndBooking();
  }

  render() {
    const { Games } = this.props;
    // console.log(Games);
    // Template to display each game

    return (
      <div className="Home">
        <header>
          {/* code goes here to display the title and and an image */}
          {"Play Zone "}
          <img
            alt=""
            id="icon"
            width="40px"
            height="40px"
            src={footballIcon}
            onClick={() => this.props.history.push("/")}
          />
        </header>
        <center>
          <div>
            {/* code goes here to loop the each game */}
            {Games &&
              Games.length &&
              Games.map((game) => (
                <ul className="Card" key={game.id}>
                  <li>
                    <img src={game.src} hieght="300px" width="200px" />
                  </li>
                  <li>{game.name}</li>
                  <li>
                    <button
                      onClick={() => this.handlebook(game.id)}
                      className="btn btn-dark "
                    >
                      Book Now
                    </button>
                  </li>
                </ul>
              ))}
          </div>
        </center>
        <center>
          <div>
            <button
              onClick={() => this.handleSearch()}
              className=" btn-lg btn btn-dark m-2"
            >
              Check your booking
            </button>
          </div>
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Games: state.Games,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postDate: (date) => dispatch({ type: "TODAY_DATE", date }),
    selectGame: (id) => dispatch(selectGame(id)),
    getGameAndBooking: () => dispatch({ type: "GAME_BOOKING" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
