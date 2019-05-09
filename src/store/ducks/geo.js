// 액션 타입 정의
export const GET_GEOLOCATION = "GET_GEOLOCATION";
export const GEOLOCATION_DENIED = "GEOLOCATION_DENIED";

// 액션 생성함수 정의
export const getGeolocation = () => async dispatch => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(
    position => {
      dispatch({
        type: GET_GEOLOCATION,
        load: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    },
    error => {
      if (error.code === 1) {
        dispatch({ type: GEOLOCATION_DENIED, load: false });
      }
    }
  );
};

// 초기상태 정의
const initialState = {
  location: {
    lat: 35,
    lng: 126
  }
};

// 리듀서 작성
export default function geo(state = initialState, action) {
  switch (action.type) {
    case GET_GEOLOCATION:
      return {
        ...state,
        ...action.load
      };
    default:
      return state;
  }
}
