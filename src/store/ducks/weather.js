import axios from "axios";
import { weatherURL, weatherKEY } from "../../api";

// 액션 타입 정의
export const FETCH_START = "FETCH_START";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";

// 액션 생성함수 정의
export const fetchWeather = () => async dispatch => {
  dispatch({ type: FETCH_START });
  try {
    const { data } = await axios.get(
      `${weatherURL}?q=Seoul&appid=${weatherKEY}`
    );
    console.log(data);
    dispatch({ type: FETCH_WEATHER_SUCCESS, load: data });
  } catch (error) {
    dispatch({
      type: FETCH_WEATHER_FAIL,
      load: "데이터를 가져오지 못햇습니다."
    });
  }
};

// 초기상태 정의
const initialState = {
  loading: false,
  city: "Seoul",
  temp: "11.25",
  weather: "안개",
  error: null,
  icon: null
};

// 리듀서 작성
export default function weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.load["weather"][0].main,
        city: action.load.name,
        temp: action.load["main"].temp,
        icon: ""
      };
    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.load
      };
    default:
      return state;
  }
}
