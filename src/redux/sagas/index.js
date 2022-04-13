import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_HOTELS } from "../constants";
import { setHotels } from "../actions/actionCreater";
import { getHotels } from "../../api/index";

const getCity = (state) => state.changeCity;
const getDate = (state) => state.dateNow;
const getDay = (state) => state.changeDays;

//workerSaga
export function* handlLatestNews() {
  let city = yield select(getCity);
  let dateNew = yield select(getDate);
  let day = yield select(getDay);

  const { data } = yield call(getHotels, { city, dateNew, day });
  yield put(setHotels(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_HOTELS, handlLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
