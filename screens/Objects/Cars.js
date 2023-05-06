function Auto(plateNumber, brand, state) {
    this.plateNumber = plateNumber
    this.brand = brand
    this.state = state
}

let cars = []

export function CrearAuto(plateNumber, brand){
    let newCar = new Auto(plateNumber, brand, true)
    if(cars.length === 0){
        cars.push(newCar)
        return true
    }else{
        let carFound = BuscarPlaca(newCar.plateNumber)
        if(carFound){
            return false
        }else{
            cars.push(newCar)
            return true
        }
    }
}

export function BuscarPlaca(plateNumber){
    let plateNumberFound = cars.find(car => car.plateNumber === plateNumber)
    if(plateNumberFound != undefined){
        return true
    }else{
        return false
    }
}

export function ListarCarros(){
    return cars
}