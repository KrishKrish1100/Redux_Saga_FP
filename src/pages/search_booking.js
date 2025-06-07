import React, { Component } from "react";
import { connect } from "react-redux";
import { checkBooking } from "../Action/action";
import icon from "../images/football.svg";
export class Search_Booking extends Component {
  state = {
    Search: undefined
  };

  handleHomePage = () => {
    //route to home page
  };

  render() {
    return (
      <div>
        <div className="Home">
          <header>
            {/* header content goes here */}
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
            </table>
            {/* Display the Booking Details 
           use id as Book_List for td and ClassName as Booking_List for tr and tbody */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    checkBooking: state.bookingCheck,
    details: state.details
  };
};
const mapDispatchToProps = dispatch => {
  return {
    check: payload => dispatch(checkBooking(payload)),
    getGameAndBooking: () => dispatch({ type: "GAME_BOOKING" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search_Booking);

