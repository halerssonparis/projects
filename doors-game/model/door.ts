export default class DoorModel {
    #number: number
    #hasGift: boolean
    #selected: boolean
    #openned: boolean

    constructor(number: number, hasGift = false, selected = false, openned = false) {
        this.#number = number
        this.#hasGift = hasGift
        this.#selected = selected
        this.#openned = openned
    }

    get number() {
        return this.#number
    }

    get hasGift() {
        return this.#hasGift
    }

    get selected() {
        return this.#selected
    }

    get openned() {
        return this.#openned
    }

    get closed() {
        return !this.openned
    }

    unselect() {
        const selected = false
        return new DoorModel(this.number, this.hasGift, selected, this.openned)
    }

    changeSelected() {
        const selected = !this.selected
        return new DoorModel(this.number, this.hasGift, selected, this.openned)
    }

    open() {
        const openned = true
        return new DoorModel(this.number, this.hasGift, this.selected, openned)
    }
}