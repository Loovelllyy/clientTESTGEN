import React from "react";
import style from './style.module.css'

const WaitingPage = () => {
  return (
      <div className={style.body}>
        <h1 className={style.h1}>Нет доступных тестов</h1>
        <div className={`${style.light} ${style.x1}`} />
        <div className={`${style.light} ${style.x2}`}/>
        <div className={`${style.light} ${style.x3}`}/>
        <div className={`${style.light} ${style.x4}`}/>
        <div className={`${style.light} ${style.x5}`} />
        <div className={`${style.light} ${style.x6}`} />
        <div className={`${style.light} ${style.x7}`} />
        <div className={`${style.light} ${style.x8}`} />
        <div className={`${style.light} ${style.x9}`} />
      </div>
  )
}

export default WaitingPage;