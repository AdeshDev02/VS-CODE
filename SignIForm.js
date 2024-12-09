var sub = document.getElementById('sub');
var user = document.getElementById('user');
var psswd = document.getElementById('psswd')
var fgp = document.getElementById('fgp')
var sin = document.getElementById('sin')
var box = document.getElementById('box')
var stat = document.getElementById('stat')
var form = document.querySelector('.form')

sub.addEventListener('click', function () {
    if (user.value == '') {
        alert('empty')
    } else {
        // alert('proceed')
    }
    if (psswd.value == '') {
        alert('put psswd')    
    } else {
        alert('ready for the next page')
    }
})
fgp.addEventListener('click', function () {
    alert('next page')
})
sin.addEventListener('click', function () {
     box.style.display = "block" 
    form.style.display = "none"
})

function ab() {
    if (stat.value == "Lagos") {
        lga.style.display = "block"
        lgaa.style.display = "none"

    } else if(stat.value == "Ogun") {
        lga.style.display = "none"
        lgaa.style.display = "block"
    }
}