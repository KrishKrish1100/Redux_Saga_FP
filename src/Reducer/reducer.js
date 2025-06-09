import slot from "../Component/slot";
import { Games } from "../pages/home";

function getTomorrowFormatted() {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  );
}

const initState = {
  Games: [],
  selectedGame: [],
  selectedDate: getTomorrowFormatted(), // Default to tomorrow's date in "dd/mm/yyyy" format
  slotBooked: undefined,
  details: [],
  bookingCheck: [],
};

const bookNowReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAMEANDBOOKING_SUCCESS":
      // console.log("Game and Booking Data:", action.payload);

      return {
        ...state,
        Games: action.payload?.Games,
        details: action.payload?.Bookings,
        bookingCheck: state.details ? state.details : action.payload?.Bookings,
      };
    case "DONE_BOOKING": {
      return {
        ...state,
        selectedGame: {
          ...state.selectedGame,
          slots: state.selectedGame.slots.map((slot) =>
            slot.id === state.slotBooked.id
              ? { ...slot, slotStatus: "btn btn-danger" }
              : slot
          ),
        },
        slotBooked: undefined,
      };
    }
    case "UPDATE_BOOKING": {
      return {
        ...state,
        Games: action.GameAndSlot,
        details: action.BookingDetail,
      };
    }
    case "SELECT_GAME":
      const newGames = state.Games.map((game) => ({
        ...game,
        slots: game.slots.map((slot) =>
          slot.slotStatus === "btn btn-primary"
            ? { ...slot, slotStatus: "btn btn-success" }
            : slot
        ),
      }));
      const selectedGame = newGames.find((game) => game.id === action.id);
      // console.log("Selected Game:", selectedGame, newGames);

      if (!selectedGame) {
        return state; // If no game found, return current state
      }

      return {
        ...state,
        Games: newGames,
        selectedGame,
      };

    case "ICON_CLICK": {
      // console.log("Icon Clicked", getTomorrowFormatted());

      return {
        ...state,
        // selectedGame: [],
        // selectedDate: getTomorrowFormatted(),
        slotBooked: undefined,
      };
    }
    case "ON_SELECTED_DAY": {
      return {
        ...state,
        selectedDate: action.Day,
        slotBooked: undefined,
      };
    }
    case "ON_SELECT_SLOT": {
      const f = state.selectedGame?.slots.find((slot) => slot.id == action.id);
      let selectedSlot = f ? { ...f } : undefined;
      if (
        selectedSlot?.slotStatus === "btn btn-danger" ||
        state.slotBooked?.id === action.id
      ) {
        selectedSlot = undefined;
      }
      if (selectedSlot) selectedSlot.slotStatus = "btn btn-primary";

      // console.log("Selected Slot:", selectedSlot);

      return {
        ...state,
        slotBooked: selectedSlot,
      };
    }
    case "CHECK_BOOKING": {
      if (action.payload == undefined) {
        console.log(
          "Check Booking Action Payload:",
          action.payload,
          state.details
        );
        return {
          ...state,
          bookingCheck: state.details,
        };
      }
      return {
        ...state,
        bookingCheck: state.details.filter((item) =>
          item.bookingId.startsWith(action.payload)
        ),
      };
    }
    default:
      return state;
  }
};
export default bookNowReducer;
