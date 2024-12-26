import styles from "./user.module.css";
import React from "react";

function User(props) {
  const { firstName, lastName, phone, email, image } = props.data;
  return (
    <div className={styles.userinfo}>
      <div className={styles.img}>
        <img src={image} alt="User image" />
      </div>
      <div className={styles.fullname}>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
      </div>
      <div className={styles.infos}>
        <h3 className={styles.phone}>
          Telephone: <span>{phone}</span>
        </h3>
        <h3 className={styles.email}>
          Email: <span>{email}</span>
        </h3>
      </div>
    </div>
  );
}
export default User;
