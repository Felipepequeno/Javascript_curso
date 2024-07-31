function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('{ERRO} Verificar e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <10) {
                // crianca
                img.setAttribute('src', 'bebe_m.png')
            } else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto_m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <10) {
                // crianca
                img.setAttribute('src', 'bebe_f.png')
            } else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'jovem_f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto_f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}