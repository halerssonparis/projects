import styles from "../styles/Door.module.css"
import Gift from './Gift'
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.openned ? styles.selected : ''

    const changeSelected = e => props.onChange(door.changeSelected())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.knob}
                    onClick={open}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={changeSelected}>
            <div className={`${styles.structure} ${selected}`}>
                {door.closed ?
                    renderDoor() : 
                    door.hasGift ? <Gift /> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}