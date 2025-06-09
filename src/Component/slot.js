import React, { Component } from "react";
import { connect } from "react-redux";
import { selectGame, selectSlot } from "../Action/action";
class Slots extends Component {
  handleSlot = (slot) => {
    if (slot.slotStatus === "btn btn-danger") return;
    this.props.selectSlot(slot.id);
  };

  render() {
    const { bookingSlot, selectedGame } = this.props;
    // console.log("slot", slot, this.props);

    return (
      <div className="slot_list">
        {selectedGame?.slots?.length > 0 &&
          selectedGame?.slots.map((slot) => (
            <h4 key={slot.id}>
              <span
                className={
                  bookingSlot?.id === slot.id
                    ? bookingSlot?.slotStatus
                    : slot.slotStatus
                }
                style={{ cursor: "pointer" }}
                onClick={() => this.handleSlot(slot)}
              >
                {slot.startTime} - {slot.endTime}
              </span>
            </h4>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGame: state.selectedGame,
    bookingSlot: state.slotBooked,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectSlot: (id) => dispatch(selectSlot(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slots);
