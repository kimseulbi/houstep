import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/ducks";
import thunk from "redux-thunk";

export const configureStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //노드에서 단위 테스트 또는 구성 요소를 실행 중인지 확인하기 위해 윈도우 검사를 수행x
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
