import React from "react";
import styles from "./userlist.module.css";
import User from "../user/user";
import Adress from "../adress/adress";
import Car from "../car/car";

import data from "./assets/data.json";

function Userlist() {
  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((user, index) => {
          return (
            <div className={styles.general} key={index}>
              <User data={user}></User>
              <div className={styles.carSaddress}>
                <Car data={user.cars}></Car>
                <Adress data={user.address}></Adress>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Userlist;
