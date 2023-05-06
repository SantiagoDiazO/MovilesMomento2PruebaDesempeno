function Renta(rentNumber, username, plateNumber, rentDate) {
    this.rentNumber = rentNumber
    this.username = username
    this.plateNumber = plateNumber
    this.rentDate = rentDate
}

let rents = []

export function CrearRenta(rentNumber, username, plateNumber, rentDate){
    let newRent = new Renta(rentNumber, username, plateNumber, rentDate)
    if(rents.length === 0){
        rents.push(newRent)
        console.log(rents)
        return true
    }else{
        let rentFound = BuscarRenta(newRent.rentNumber)
        if(rentFound){
            return false
        }else{
            rents.push(newRent)
            console.log(rents)
            return true
        }
    }
}

export function BuscarRenta(rentNumber){
    let rentNumberFound = rents.find(rent => rent.rentNumber === rentNumber)
    return rentNumberFound
}