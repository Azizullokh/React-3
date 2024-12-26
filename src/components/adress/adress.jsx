import styles from "./adress.module.css"
import React from "react"

function Adress(props) {
    const {region , zip} = props.data
  return (
    <div className={styles.adress}>
      <ul>
        <div className={styles.li}>
            <li>Region:  {region}</li>
            <li>ZIP: {zip}</li>
        </div>
      </ul>
    </div>
  )
}
export default Adress
