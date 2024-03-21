function cargarMatriz (){
    let array_completar = [];

    for(let i = 0; i < arguments.length; i++){
        array_completar.push(arguments[i]);
    }

    return array_completar
}

function visualizarMatriz (matriz){
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i]);
    }
}

export{cargarMatriz, visualizarMatriz}