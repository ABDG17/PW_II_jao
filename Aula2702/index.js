const calculadora = require('./calculadora')
const inquirer = require('inquirer')
const avalia = require('./avalia')
const fs = require('fs')
const { media } = require('./calculadora')

inquirer.prompt([

    {name: 'nomeAluno',message: "Insira o Nome do Aluno"},

    {name: 't1',message: 'Nota do Primeiro Trabalho'},

    {name: 't2',message: "Nota do 2 Trabalho"},

    {name: 'p3',message: "Nota da 3 Prova"},

    {name: 'p4',message: "Nota da 4 Prova"}

]).then((anwsers) =>{
    console.log(`Sua Nota no Trabalho foi: ${anwsers.t1}`)
    console.log(`Sua Nota no Trabalho foi: ${anwsers.t2}`)
    console.log(`Sua Nota no Prova foi: ${anwsers.p3}`)
    console.log(`Sua Nota no Prova foi: ${anwsers.p4}`)
    let media = calculadora.media (anwsers.t1, anwsers.t2, anwsers.p3, anwsers.p4)

    console.log(`Sua Media foi: ${media}`)
    avalia.mensagem(media)

})
    .catch((erro) => {console.log('Xi deu ERRO')})