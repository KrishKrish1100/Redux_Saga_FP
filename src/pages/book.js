import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import icon from "../images/football.svg";
import { connect } from "react-redux";
import Slots from "../Component/slot";
import { onSelectedDay, doneBooking, iconClick } from "../Action/action";

export class Booking extends Component {
  state = {
    name: undefined,
    contact: undefined,
    errorStmt: "",
  };

  handleHomePage = () => {
    this.props.iconClick();
    this.props.history.push("/"); // Navigate to the home page
  };
  getFormattedDate(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }
  getSysDate = (Day) => {
    // Convert from "d/m/yyyy" to new date format
    return new Date(Day);
  };
  //how to convert from
  handleValidation = () => {
    // Validate name and contact number
    const { name, contact } = this.state;
    if (!this.props.slotBooked) {
      this.setState({ errorStmt: "Select your slot!!!" });
      return false;
    }
    if (
      !name ||
      /[^a-zA-Z\s]/.test(name) ||
      !contact ||
      contact.length !== 10 ||
      isNaN(contact)
    ) {
      this.setState({ errorStmt: "Invalid Input!!!" });
      return false;
    }
    return true;
  };

  Display_slot = (Day) => {
    // console.log("Selected Day:", Day);
    this.props.onSelectedDay(Day);
  };
  tomorrow = this.getFormattedDate(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 1
    )
  );

  getDateDiff = (date) => {
    const today = new Date();
    const d1 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const d2 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffTime = d2 - d1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log("Difference in days:", diffDays);

    return diffDays;
  };
  handleBook = () => {
    if (!this.handleValidation()) return;

    const { selectedGame, selectedDate } = this.props;
    const { name, contact } = this.state;

    // Prepare booking details
    const bookingDetails = {
      bookingId: "" + Math.floor(Math.random() * 1000000000),
      name: name,
      contact: contact,
      game: selectedGame?.name,
      slot: {
        id: this.props.slotBooked.id,
        startTime: this.props.slotBooked.startTime,
        endTime: this.props.slotBooked.endTime,
        slotStatus: this.props.slotBooked.slotStatus,
      },
      slotDate: selectedDate,
    };

    // Dispatch booking action
    this.props.bookingDetails(bookingDetails, selectedGame);
    window.alert(bookingDetails.bookingId);
    this.props.doneBooking();
  };

  render() {
    const { game, selectedGame, selectedDate, slotBooked } = this.props;

    return (
      <div className="Home">
        <header>
          Play Zone:{selectedGame?.name || ""}
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
            Slot Date:{this.getFormattedDate(this.props.selectedDate)}
          </p>
        </header>

        <div className="Card" id="date">
          {/* date picker goes here */}
          <DayPicker
            selectedDays={this.getSysDate(this.props.selectedDate)}
            onDayClick={this.Display_slot}
            disabledDays={{ before: new Date() }}
          />
        </div>
        <br />
        <div>
          {this.getDateDiff(selectedDate) === 1 && (
            <div id="slot-display">
              {/* code goes here to display slot */}
              <Slots />

              <div>
                {/* code goes here for the name and contact number input fields
                each input field has name as name and contact respectively*/}
                <input
                  type="text"
                  name="name"
                  id="contact"
                  placeholder="Enter Your Name"
                  value={this.state.name}
                  onChange={(e) =>
                    this.setState({ name: e.target.value, errorStmt: "" })
                  }
                  required
                />
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Enter Your Contact No"
                  value={this.state.contact}
                  onChange={(e) =>
                    this.setState({ contact: e.target.value, errorStmt: "" })
                  }
                  required
                />

                <div>
                  {/* code goes here the "Book Now" button with id book_button */}
                  <button id="book_button" onClick={this.handleBook}>
                    Book Now
                  </button>

                  {/* span to display error statement */}
                  <span id="error_msg">{this.state.errorStmt}</span>
                </div>
              </div>
            </div>
          )}{" "}
          {this.getDateDiff(selectedDate) === 0 && (
            <p id="not_opened">
              Booking has been closed. Book your slot for{this.tomorrow}
              {/* code goes here to display the date */}
            </p>
          )}
          {this.getDateDiff(selectedDate) > 1 && (
            <p id="not_opened">Booking is not opened yet</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.Games,
    selectedGame: state.selectedGame,
    selectedDate: state.selectedDate,
    slotBooked: state.slotBooked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doneBooking: () => dispatch(doneBooking()),
    onSelectedDay: (id) => dispatch(onSelectedDay(id)),
    iconClick: () => dispatch(iconClick()),
    bookingDetails: (details, updatesGame) =>
      dispatch({ type: "BOOKINGS", details, updatesGame }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
