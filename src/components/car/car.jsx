import React from "react";
import styles from "./car.module.css";

function Car(props) {
  const cars = props.data || []
  return (
    <div className={styles.car}>
      <ul className={styles.controlcars}>
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <li key={car} className={styles.aboutcars}>
              <a href="https://en.wikipedia.org/wiki/Car">Cars: {car}</a>
            </li>
          ))
        ) : (
          <li className={styles.aboutcarss}>No cars available</li>
        )}
      </ul>
    </div>
  );
}
export default Car;
