import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import icon from "../images/football.svg";
import { connect } from "react-redux";
import { onSelectedDay, doneBooking, iconClick } from "../Action/action";

export class Booking extends Component {
  state = {
    name: undefined,
    contact: undefined,
    errorStmt: "",
  };

  handleHomePage = () => {

  };


  handleValidation = () => {

  };

  Display_slot = Day => {
    this.props.onSelectedDay(Day);
  };


  handleBook = () => {

  };

  render() {

    return (
      <div className="Home">
        <header>
          Play Zone:
          <img
            alt=""
            id="icon"
            src={icon}
            onClick={this.handleHomePage}
            width="40px"
            height="40px"
          />
          <p id="header_Date">
            {/* display date */}
          </p>
        </header>

        <div className="Card" id="date">
          {/* date picker goes here */}
        </div>
        <br />
        <div>
          <div id="slot-display">
            {/* code goes here to display slot */}
            <div>
              {/* code goes here for the name and contact number input fields
                each input field has name as name and contact respectively*/}

              <div>
                {/* code goes here the "Book Now" button with id book_button */}
                {/* span to display error statement */}

              </div>
            </div>
          </div>

          <p id="not_opened">
            Booking has been closed.Book your slot for
            {/* code goes here to display the date */}
          </p>

          <p id="not_opened">Booking is not opened yet</p>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.Games,
    selectedGame: state.selectedGame,
    selectedDate: state.selectedDate,
    slotBooked: state.slotBooked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doneBooking: () => dispatch(doneBooking()),
    onSelectedDay: id => dispatch(onSelectedDay(id)),
    iconClick: () => dispatch(iconClick()),
    bookingDetails: (details, updatesGame) => dispatch({ type: "BOOKINGS", details, updatesGame }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
