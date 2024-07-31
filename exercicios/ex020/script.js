function contar() {
    // Captura dos elementos e valores
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar...'
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido!')
        }

        if (i < f) {
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F603}`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F603}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}