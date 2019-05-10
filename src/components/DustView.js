import React, { Component } from "react";
import { getDate } from "../modules/index";
import s from "../scss/DustView.module.scss";

export default class DustView extends Component {
  render() {
    const { pm10, pm25, ozone, nitrogen } = this.props;
    const date = getDate(this.props.date);
    return (
      <section className={s.dust}>
        <div className={s.dust__date_heading}>
          오늘 {date.mm}월 {date.dd}일 {date.ww}
        </div>
        <div className={s.dust__list}>
          <div className={s.dust__list_item}>
            <label>미세먼지</label>
            <h4 className={s.figure}>{pm10}</h4>
          </div>
          <div className={s.dust__list_item}>
            <label>초미세먼지</label>
            <h4 className={s.figure}>{pm25}</h4>
          </div>
          <div className={s.dust__list_item}>
            <label>오존</label>
            <h4 className={s.figure}>{ozone}</h4>
          </div>
          <div className={s.dust__list_item}>
            <label>이산화질소</label>
            <h4 className={s.figure}>{nitrogen}</h4>
          </div>
        </div>
      </section>
    );
  }
}
