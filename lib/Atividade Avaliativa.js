
const FiltroMaior2000 = (value) => {
    if(value.valor > 2000){
        return value;
    }
}

const FiltroMaior2000Menor2500eDataMenor =  (value) => {

    var data = new Date();

   if(value.valor >= 2000 && value.valor <=2500){
        console.log("entrou" + value);
        if(value.data_ano >= data.getFullYear()){

            if(value.data_mes >= data.getMonth()){  // mes começa em 0
                return value;
            }
        }
    }
    else{
        console.log("n entrou" + value);
        return value;
    }

}

module.exports = {FiltroMaior2000,FiltroMenor2500eDataMenor};