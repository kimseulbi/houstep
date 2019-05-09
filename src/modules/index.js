import sun from "../scss/images/icon-sun.png";
import rain from "../scss/images/icon-rain.png";
import mist from "../scss/images/icon-mist.png";
import cloud from "../scss/images/icon-cloud.png";
import snow from "../scss/images/icon-snow.png";

// 날짜
export const getDate = () => {
  const today = new Date();
  let ww = today.getDay(); // 요일
  let dd = today.getDate(); // 날짜
  let mm = today.getMonth() + 1; //달
  switch (ww) {
    case 0:
      ww = "일요일";
      break;
    case 1:
      ww = "월요일";
      break;
    case 2:
      ww = "화요일";
      break;
    case 3:
      ww = "수요일";
      break;
    case 4:
      ww = "목요일";
      break;
    case 5:
      ww = "금요일";
      break;
    case 6:
      ww = "토요일";
      break;
  }
  return {
    mm,
    dd,
    ww
  };
};

// 아이콘
export const getIcon = weather => {
  let icon;
  switch (weather) {
    case "Clear":
      icon = sun;
      break;
    case "Rain" || "Drizzle":
      icon = rain;
      break;
    case "Haze" || "Mist":
      icon = mist;
      break;
    case "Clouds":
      icon = cloud;
      break;
    case "Snow":
      icon = snow;
      break;
  }
  return icon;
};

// 날씨
export const getWeather = weather => {
  let changWeather;
  switch (weather) {
    case "Clear":
      changWeather = "맑음";
      break;
    case "Rain" || "Drizzle":
      changWeather = "비";
      break;
    case "Haze" || "Mist":
      changWeather = "안개";
      break;
    case "Clouds":
      changWeather = "구름";
      break;
    case "Snow":
      changWeather = "눈";
      break;
  }
  return changWeather;
};

//켈빈을 섭씨로 변환
export const getTemp = temp => `${(temp - 273.15).toFixed(2)}°C`;

// 지역 한글로 변경
export const getCity = city => {
  let changCity;
  switch (city) {
    case "Seoul":
      changCity = "서울";
      break;
  }
  return changCity;
};
