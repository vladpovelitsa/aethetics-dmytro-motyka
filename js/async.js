// -------------------Пример setTimeout---------------------------------

// setTimeout(function () {
//     alert('hello i timeout')
// }, 5000)


setTimeout(function () {
    let info = document.querySelector('.info')
    info.classList.add('info_open')
    info.innerText = '"AESTHETICS" Найкраща Професійна Косметика "AESTHETICS" Найкраща Професійна Косметика "AESTHETICS" Найкраща Професійна Косметика "AESTHETICS" Найкраща Професійна Косметика "AESTHETICS" Найкраща Професійна Косметика';

setTimeout(function () {
    let info = document.querySelector('.info')
    info.classList.remove('info_open')
    info.innerText = '';    
    }, 5000)  
}, 2000)



// -------------------Пример setTimeout-----------------------------------

// setInterval(function () {
//     alert('test')
// }, 2000)


let numbersToAnimate = document.querySelectorAll('.services_number')
 document .addEventListener('scroll', function(){
    numbersToAnimate.forEach(function(item){
        if(item.getBoundingClientRect().top <=window.innerHeight / 2){
            startAnimate(item)   
        }
    })
 })
 function startAnimate(item) {
    let start = 0;
    let max = parseInt(item.getAttribute('data-max'))
    if(item.getAttribute('data-animated') === 'false'){
        item.setAttribute('data-animated', 'true')
        let interval = setInterval(function(){
            if(max >=start) {
                item.innerText = start
                start++
            }else {
                clearInterval(interval)
              }
        }, 10)
    }
 }
