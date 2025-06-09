import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import BasketBall from "../images/basket_ball.jpeg";
import VolleyBall from "../images/volleyBall.jpeg";
import cricket from "../images/cricket_bat.jpg";
import FootBall from "../images/football.jpeg";
import {
  bookSlot1,
  bookSlot2,
  bookSlot3,
  bookSlot4,
} from "../Component/slot_data";

const Games = [
  { id: 0, src: BasketBall, name: "BasketBall", slots: bookSlot1 },
  { id: 1, src: VolleyBall, name: "VolleyBall", slots: bookSlot2 },
  { id: 2, src: cricket, name: "Cricket", slots: bookSlot3 },
  { id: 3, src: FootBall, name: "FootBall", slots: bookSlot4 },
];
const Details = [
  {
    bookingId: "92303869",
    contact: "9876443111",
    game: "BasketBall",
    name: "Roger",
    slot: {
      id: 4,
      startTime: "12.00 P.M",
      endTime: "01.00 P.M",
      slotStatus: "btn btn-success",
    },
  },
  {
    bookingId: "14440074",
    contact: "9867844311",
    game: "FootBall",
    name: "shelly",
    slot: {
      id: 3,
      startTime: "11.00 A.M",
      endTime: "12.00 P.M",
      slotStatus: "btn btn-success",
    },
  },
];

function* bookingAsync(action) {
  try {
    console.log("Booking Details: ", action.details);

    const response = yield call(
      axios.post,
      "http://localhost:8001/book",
      action.details
    );
    console.log("Response: ", response);
    yield put({ type: "DONE_BOOKING", payload: response.data });
    getGameAndBookingAsync();
  } catch (error) {
    yield put({ type: "BOOKING_FAILURE", payload: error.message });
  }
}
function* getGameAndBookingAsync() {
  try {
    const response = yield call(axios.get, "/api/gameAndSlot");
    const bookingResponse = yield call(axios.get, "/api/bookedData");
    console.log("Response: ", response, bookingResponse);
    yield put({
      type: "GAMEANDBOOKING_SUCCESS",
      payload: {
        Games: response.data,
        Bookings: bookingResponse.data,
      },
    });
  } catch (error) {
    yield put({ type: "GAMEANDBOOKING_FAILURE", payload: error.message });
  }
}
function* postTodayTime(action) {
  try {
    const response = yield call(axios.post, "/api/dateUpdate", {
      todayDate: action.date,
    });
    console.log("Today Date Response: ", response);
    yield put({ type: "TODAY_DATE_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "TODAY_DATE_FAILURE", payload: error.message });
  }
}

export function* watchBooking() {
  yield takeEvery("BOOKINGS", bookingAsync);
}
export function* watchUpdateGame() {
  yield takeEvery("GAME_BOOKING", getGameAndBookingAsync);
}
export function* watchPostTodayTime() {
  yield takeEvery("TODAY_DATE", postTodayTime);
}
