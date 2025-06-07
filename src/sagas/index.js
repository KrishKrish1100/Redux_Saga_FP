import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

function* bookingAsync(action) {

}
function* getGameAndBookingAsync() {
  try {
    const response = yield call(axios.get, '/api/gameAndSlot');
    console.log("Response: ",response);
    yield put({ type: "GAMEANDBOOKING_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "GAMEANDBOOKING_FAILURE", payload: error.message });
  }
}
function* postTodayTime(action) {

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
