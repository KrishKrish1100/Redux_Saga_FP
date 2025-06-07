const initState = {
  Games:[],
  selectedGame:[],
  selectedDate:new Date(Date.now() + 86400000).toISOString().split('T')[0],
  slotBooked:undefined,
  details:[],
  bookingCheck:[]
};

const bookNowReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAMEANDBOOKING_SUCCESS":
      return {...state,Games:action.payload};
    case "DONE_BOOKING": {

    }
    case "UPDATE_BOOKING": {

    }
    case "SELECT_GAME": {

    }
    case "ICON_CLICK": {

    }
    case "ON_SELECTED_DAY": {

    }
    case "ON_SELECT_SLOT": {

    }

    case "CHECK_BOOKING": {

    }
    default:
      return state;
  }
};
export default bookNowReducer;
