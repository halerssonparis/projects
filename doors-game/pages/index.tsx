import styles from "../styles/Form.module.css"
import Card from "../components/Card";
import Link from "next/link"
import NumericEntry from "../components/NumericEntry";
import { useState } from "react";

export default function Form() {
  const [quantityDoors, setQuantityDoors] = useState(3)
  const [hasGift, setHasGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <h1>Monty Hall</h1>
      </div>
      <div>
        <Card>
          <NumericEntry text="Doors Quantity"
            value={quantityDoors}
            onChange={newQuantityDoors => setQuantityDoors(newQuantityDoors)} />
        </Card>
        <Card>
          <NumericEntry text="Doors with Gift"
            value={hasGift}
            onChange={newDoorsWithGift => setHasGift(newDoorsWithGift)} />
        </Card>
      </div>
      <div>
        <button className={styles.button}>
          <Link href={`/game/${quantityDoors}/${hasGift}`} passHref>
            <h2 className={styles.link}> Start </h2>
          </Link>
        </button>
      </div>
    </div>
  )
}
