import DoorModel from "../model/door";

export function createDoors(quanitity: number, doorsWithGift: number): DoorModel[] {
    return Array.from({ length: quanitity }, (_, i) => {
        const number = i + 1
        const hasGift = number === doorsWithGift
        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], modifiedDoors: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const isTheModifiedDoor = currentDoor.number === modifiedDoors.number

        if(isTheModifiedDoor) {
            return modifiedDoors
        } else {
            return modifiedDoors.open ? currentDoor : currentDoor.unselect()
        }
    })
}