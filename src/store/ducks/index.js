import { combineReducers } from "redux";
import geo from "./geo";
import weather from "./weather";
import dust from "./dust";

// import 기능별모듈.js파일 from '파일경로';

export default combineReducers({
  geo,
  weather,
  dust
});
