function tabuada(){
    var num = document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número.')

    } else {
        let n =  Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10 ){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}