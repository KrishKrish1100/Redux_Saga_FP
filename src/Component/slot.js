import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSlot } from "../Action/action";
class Slots extends Component {
  handleSlot = id => {
    this.props.selectSlot(id);
  };

  render() {
    // Template for each slot
    // <div key={slot.id} className="slot_list">
    //   <h4>
    //     <span
    //       className={slot.slotStatus}
    //       style={{ cursor: "pointer" }}              
    //     >

    //     </span>
    //   </h4>
    // </div>

    return (<div>
      {/* code for slot goes here */}
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    selectedGame: state.selectedGame,
    bookingSlot: state.slotBooked
  };
};
const mapDispatchToProps = dispatch => {
  return {
    selectSlot: id => dispatch(selectSlot(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slots);
