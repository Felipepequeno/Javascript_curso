function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12) {
        //manhã
        img.src = 'manha.png'
        document.body.style.background = '#e4bec0'
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fe6e01'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#142c47'
    }
}
