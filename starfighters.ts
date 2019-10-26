import { Containership, Spacecraft } from './base-ships'

export class MillennimFalcon extends Spacecraft implements Containership {
    
    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Faled to jump into hyperspace')
        }
    }
}
