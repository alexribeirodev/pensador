# Pensador ![build](https://travis-ci.com/SirMinux/pensador.svg?branch=master)

Módulo para interação com o site [Pensador.com](https://www.pensador.com/).

Observação: As mensagens retornadas são aleatórias, porém separadas por categorias pré definidas ou por um usuário/coleção específica.

## Installation

Usando npm:

```shell
$ npm i --save pensador
```

## Exemplo

```js
const pensador = require("pensador");

pensador.getFromCollection("<USER_COLLECTION>").then(result => {
  console.log(result);
  /*
    {
        "message": "E solidão é não precisar. Não precisar deixa um homem muito só, todo só.",
        "author": "Clarice Lispector"
    }
    */
});

pensador.getFromAmor().then(result => {
  console.log(result);
  /*
    {
        "message": "Quando uma pessoa quer estar com você, ela estará com você. Não existirá desculpa, drama, dor de cabeça, nada. Absolutamente nada.",
        "author": "Tati Bernardi"
    }
    */
});

pensador.getFromMotivacionais().then(result => {
  console.log(result);
  /*
    {
        "message": "O sucesso resulta de cem pequenas coisas feitas de forma um pouco melhor. O insucesso, de cem pequenas coisas feitas de forma um pouco pior.",
        "author": "Henry Kissinger"
    }
    */
});

pensador.getFromSoltas().then(result => {
  console.log(result);
  /*
    {
        "message": "E penso: sou feio, então, sou desagradável, é isso, é isso — é só isso, sou incapaz de inspirar qualquer erotismo em alguém. Fico me ferindo, mas também dou voltas e penso: não, não é nada disso, sou legal, sou mansinho, sou até bonitinho. E penso tantas e tantas outras coisas, mas o real não se modifica. E o real, parece meio grosso dito assim, mas no fundo é isso mesmo (…)",
        "author": "Caio Fernando Abreu"
    }
    */
});
```
