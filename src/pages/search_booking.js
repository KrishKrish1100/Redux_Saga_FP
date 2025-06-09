import React, { Component } from "react";
import { connect } from "react-redux";
import { checkBooking } from "../Action/action";
import icon from "../images/football.svg";
export class Search_Booking extends Component {
  state = {
    Search: undefined,
  };

  handleChange = (e) => {
    const key = e.target.value.trim() ? e.target.value.trim() : undefined;
    this.setState({ Search: key });
    this.props.check(key);
  };
  handleHomePage = () => {
    this.props.history.push("/"); // Assuming you have a route set up for the home page
  };
  componentDidMount() {
    if (this.props.details?.length > 0) {
      this.props.check(this.state.Search);
    } else this.props.getGameAndBooking();
  }

  render() {
    const { details, checkBooking } = this.props;
    const res = this.state.Search === undefined ? details : checkBooking;
    return (
      <div>
        <div className="Home">
          <header>
            {/* header content goes here */}
            {"Play Zone "}
            <img
              alt=""
              id="icon"
              width="40px"
              height="40px"
              src={icon}
              onClick={this.handleHomePage}
            />
          </header>
        </div>
        <div>
          <span>
            {/* input field for the search field goes here with name "Search" */}
            <input
              type="text"
              name="Search"
              id="Search"
              value={this.state.Search}
              className="Search"
              placeholder="Enter your Booking ID"
              onChange={(e) => this.handleChange(e)}
            />
          </span>
          <div>
            <table>
              <thead>
                <tr id="Book_List_header">
                  <td id="Book_List_header">Booking ID</td>
                  <td id="Book_List_header">Slot Date</td>
                  <td id="Book_List_header">Name</td>
                  <td id="Book_List_header">Contact No</td>
                  <td id="Book_List_header">Game</td>
                  <td id="Book_List_header">Slots</td>
                </tr>
              </thead>
              <tbody>
                {res && res.length > 0 ? (
                  res.map((booking) => (
                    <tr className="Booking_List" key={booking.bookingId}>
                      <td id="Book_List">{booking.bookingId}</td>
                      <td id="Book_List">{booking.slotDate}</td>
                      <td id="Book_List">{booking.name}</td>
                      <td id="Book_List">{booking.contact}</td>
                      <td id="Book_List">{booking.game}</td>
                      <td id="Book_List">
                        {booking.slot.startTime}-{booking.slot.endTime}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="Booking_List">
                    <td id="Book_List" colSpan={6}>
                      <p>
                        {details && details.length > 0
                          ? "No Booking Found"
                          : "No Booking happend yet"}
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Display the Booking Details 
           use id as Book_List for td and ClassName as Booking_List for tr and tbody */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkBooking: state.bookingCheck,
    details: state.details,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    check: (payload) => dispatch(checkBooking(payload)),
    getGameAndBooking: () => dispatch({ type: "GAME_BOOKING" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search_Booking);
