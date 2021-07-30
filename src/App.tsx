import React from "react";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg"
import robot from "./mock/robots.json";
import Robot from "./components/Robot/Robot";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>机器人在线商城</h1>
      </div>
      <div className={styles.robotList}>
        {robot.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
