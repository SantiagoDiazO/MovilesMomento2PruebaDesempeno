function Usuario(username, name, password) {
    this.username = username
    this.name = name
    this.password = password
}

let users = []

export function CrearUsuario(username, name, password){
    let newUser = new Usuario(username, name, password)
    if(users.length === 0){
        users.push(newUser)
        return true
    }else{
        let userFound = BuscarUsername(newUser.username)
        if(userFound){
            return false
        }else{
            users.push(newUser)
            return true
        }
    }
}

export function BuscarUsername(username){
    let usernameFound = users.find(user => user.username === username)
    if(usernameFound != undefined){
        return true
    }else{
        return false
    }
}

export function BuscarName(name){
    let userFound = users.find(user => user.name === name)
    if(userFound != undefined){
        return true
    }else{
        return false
    }
}

export function BuscarPassword(username, password){
    let usernameAndPasswordFound = users.find(user => user.username === username && user.password === password)
    if(usernameAndPasswordFound != undefined){
        return true
    }else{
        return false
    }
}