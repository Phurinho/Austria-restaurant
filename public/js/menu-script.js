let hnext = document.querySelector('.hotdeal-next')
let hprev = document.querySelector('.hotdeal-prev')

hnext.addEventListener('click', function(){
    let hitems = document.querySelectorAll('.hotdeal-item')
    document.querySelector('.hotdeal-slide').appendChild(hitems[0])
})

hprev.addEventListener('click', function(){
    let hitems = document.querySelectorAll('.hotdeal-item')
    document.querySelector('.hotdeal-slide').prepend(hitems[hitems.length - 1]) // here the length of items = 6
})
