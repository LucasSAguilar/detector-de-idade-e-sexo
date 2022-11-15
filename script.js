function verificar() {

var nascimento = Number(document.getElementById('txtAno').value)
var data = new Date()
var ano = data.getFullYear()
var info = document.getElementById('info')
var img = document.getElementById ('foto')

if (nascimento == '' || nascimento > ano) {window.alert ('Hmmm, acredito que você não inseriu seu ano de nascimento!')}
else {
    
    var sex = document.getElementsByName('sexBtt')
    var idade = ano - nascimento
    

    var sexo = ''
    
    if (sex[0].checked) {sexo = ('homem')
    if (idade < 20) {img.src = 'img/JH.png';}
    else if (idade < 60) {img.src = 'img/AH.png'}
    else {img.src = 'img/VH.png'}
}
    else if (sex[1].checked) {sexo = ('mulher')
    if (idade <= 20) {img.src = 'img/JM.png'}
    else if (idade <= 60) {img.src = 'img/AM.png'}
    else {img.src = 'img/VM.png'}
}
    else {window.alert('Ops, parece que você não selecionou um sexo! =D')}
    if (sex[0].checked || sex[1].checked ){
        info.innerHTML = 'Você é ' + sexo + ' com ' + idade + ' anos.'
        info.style.textAlign = 'center'
}}


}