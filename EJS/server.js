const express = require('express');//vai criar um servidor para mostrar tudo que estamos contruindo no navegador
const app = express(); //instanciando express

//a ferramenta que a gnt vai usar para renderizar html(view enfine) será o ejs
app.set("view engine", "ejs");//metodo do express
app.get("/", function(reg, res){//colocando rota. ex: jaqueline.com.br
    const items = [
        {

            tittle: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"

        },
        {
            tittle: "E",
            message: "js usa JavaScript para renderizar HTML"

        }, 
        {
            tittle: "M",
            message: "uito fácil"
        },
        {
            tittle: "A",
            message: "morzinho"
        },
        {
            tittle: "I",
            message: "nstall EJS"
        },
        {
            tittle: "S",
            message: "intaxe simples"
        },

    ];
    res.render("pages/index", {
        qualitys: items,
    });//resposta é renderizar o index. n precisa de "ejs" pq falou ali em cima que 
});

app.get("/sobre", function(reg, res){//colocando rota. ex: jaqueline.com.br
    res.render("pages/about");//resposta é renderizar o index. n precisa de "ejs" pq falou ali em cima que 
})

app.listen(8080);//função do express que fica ouvind uma porta(8080). quando chamar essa porta vai executar todo este arquivo
console.log("rodando")