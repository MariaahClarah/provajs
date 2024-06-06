let NomeDaPessoa = document.getElementById("maria")
let texto = document.getElementById("textoEnvio")

function Enviar()
{
    texto.innerHTML =  "olá, " + NomeDaPessoa.value + " tudo bem?"
}

let valor5 = document.getElementById("valor5")
let divisao = document.getElementById("resultadodadivisao")

function dividir()
{
    divisao.innerHTML = parseInt(valor5.value) / 100
}

console.clear()
var c =1;
while(c<= 100)
    {
        console.log (c)
        c = c +1;
    }

console.clear()
var a =0;
while(a<= 50)
    {
        console.log (a)
        a = a +5;
    }    

console.clear()
var b = 100;
while(b>= 0)
    {
        console.log (b)
        b = b -10;
    }    