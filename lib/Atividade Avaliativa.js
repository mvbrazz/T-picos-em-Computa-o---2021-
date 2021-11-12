
const FiltroMaior2000 = (value) => {
    if(value.valor > 2000){
        return value;
    }
}

function FiltroMenor2500eDataMenor(value){

    var data = new Date();
    /*console.log(value.Cliente);
        console.log(value.Cliente.nome);
    */
    //var dataAtual = new Date();
   // var dataFatura = new Date("99/10/23");
   // var birthday = new Date(1999,10,23);
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