
describe('Utils', () => {
    describe('Faturas', () => {
        test('Se o valor da fatura for menor que 2000', () => {

            var clientes = [
                {id:0,nome:"José",data:6,estado:"Paraná"},
                {id:1,nome:"Marcos",data:2,estado:"Paraná"},
                {id:2,nome:"Paulo",data:9,estado:"Paraná"},
                {id:3,nome:"Alex",data:5,estado:"Paraná"},
                {id:4,nome:"Carlos",data:1,estado:"Paraná"}
            ];

            var faturas = [
                {codigo:0,valor:1800,data:12,cliente_id:0},
                {codigo:1,valor:1000,data:3,cliente_id:1},
                {codigo:2,valor:2700,data:8,cliente_id:2},
                {codigo:3,valor:2400,data:4,cliente_id:3},
                {codigo:4,valor:2200,data:12,cliente_id:4}
            ];

            var resposta = faturas.filter(FiltroMaior2000);
            expect(resposta.length).toBe(3);
            
        }); 
    });    
});