import axios from "axios";
import { dustURL } from "../../api";

// 액션 타입 정의
export const FETCH_START = "FETCH_START";
export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";
export const FETCH_DUST_SUCCESS = "FETCH_DUST_SUCCESS";

// 액션 생성함수 정의
export const fetchDust = () => async dispatch => {
  dispatch({ type: FETCH_START });
  try {
    const { data } = await axios.get(`${dustURL}`);
    console.log("data", data["ListAvgOfSeoulAirQualityService"].row[0]);
    dispatch({ type: FETCH_DUST_SUCCESS, load: data });
  } catch (error) {
    dispatch({
      type: FETCH_WEATHER_FAIL,
      load: "데이터를 가져 오지 못 했습니다"
    });
  }
};

// 초기상태 정의
const initialState = {
  loading: false,
  nitrogen: 0.02,
  ozone: 0.038,
  pm10: 27,
  pm25: 18
};

// 리듀서 작성
export default function dust(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_DUST_SUCCESS:
      return {
        ...state,
        loading: false,
        pm10: action.load["ListAvgOfSeoulAirQualityService"].row[0].PM10,
        pm25: action.load["ListAvgOfSeoulAirQualityService"].row[0].PM25,
        nitrogen:
          action.load["ListAvgOfSeoulAirQualityService"].row[0].NITROGEN,
        ozone: action.load["ListAvgOfSeoulAirQualityService"].row[0].OZONE
      };
    default:
      return state;
  }
}
