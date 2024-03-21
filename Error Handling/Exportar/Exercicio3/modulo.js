function separarCadena (cadena){
    try{
        if(cadena.length % 2 == 0){
            console.log(cadena.substring(0, cadena.length / 2))

            console.log(cadena.substring(cadena.length / 2, cadena.length))
        }else{
            console.log(cadena.substring(0, (cadena.length / 2) + 1))

            console.log(cadena.substring((cadena.length / 2) + 1, cadena.length) + "0")
        }
    }catch{

    }
}


export {separarCadena}