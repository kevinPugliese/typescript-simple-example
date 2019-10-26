import { Spacecraft, Containership } from './base-ships'
import { MillennimFalcon } from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="))

let falcon = new MillennimFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'yes' : 'no'}`)
