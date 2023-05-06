import { BuscarPlaca } from "./Cars"
import { BuscarUsername } from "./Users"

function Renta(rentNumber, username, plateNumber, rentDate) {
    this.rentNumber = rentNumber
    this.username = username
    this.plateNumber = plateNumber
    this.rentDate = rentDate
}

let rents = []

export function CrearRenta(rentNumber, username, plateNumber, rentDate){
    let newRent = new Renta(rentNumber, username, plateNumber, rentDate)

    if(rents.length === 0 && BuscarUsername(username) && BuscarPlaca(plateNumber)){
        rents.push(newRent)
        return true
    }else{
        let rentFound = BuscarRenta(newRent.rentNumber)
        if(rentFound){
            return false
        }else{
            if(BuscarUsername(username) && BuscarPlaca(plateNumber)){
                rents.push(newRent)
                return true
            }else{
                return false
            }
        }
    }
}

export function BuscarRenta(rentNumber){
    let rentNumberFound = rents.find(rent => rent.rentNumber === rentNumber)
    if(rentNumberFound != undefined){
        return true
    }else{
        return false
    }
}