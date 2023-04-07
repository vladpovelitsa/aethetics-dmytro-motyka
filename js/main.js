//--------pаньше-------------------взаимодействие с  DOM

// let elem = document.getElementById('wrapper')
// let elem2 = document.getElementsByTagName('section')
// let elem3 = document.getElementsByClassName('')

//--------сейчас-------------------


// let elem5 = document.querySelectorAll('section')
// let elem6 = document.querySelectorAll(".first-view > h4")
// console.log(elem4)


//-------------------------------------
 // item.innerText += 'btn'
    // item.style.color = 'red'
    // console.log(item)
//-------------------------------------

// alert('Текст на кнопке: ' + item.innerText)
// console.log(item.getAttribute('class'))

//---------------------------------------
//---------------------------------------
//---------------------------------------
//--------------POPUP------------------------POPUP---------------------

let btns = document.querySelectorAll('span')
btns.forEach(function(item){
    item.onclick = function(event){       
     event.preventDefault();
     document.querySelector('.popup').classList.add('open')
    }
})

//------Закрытие popup при нажатии на крестик (кнопка Детальніше)---------------


// let closeModel = document.querySelector('.close_btn')
// closeModel.onclick = function(){
//     document.querySelector('.popup.open').classList.remove('open')  
// }

//------Закрытие popup при нажатии на поле и крестик (кнопка Детальніше)---------------

let closeModel = document.querySelector('.popup')
closeModel.onclick = function(){
    document.querySelector('.popup.open').classList.remove('open')  
}




//-------popup target (открытие окна (кнопка Показати ще))----------------------------------------------

// document.addEventListener('click', function(event){
//     if (event.target.classList.contains('modal_open')){
        
//         if(document.querySelector('#'+ event.target.getAttribute('data-modal'))){
//             document.querySelector('#'+ event.target.getAttribute('data-modal')).classList.add('open')
//         }else{
//               alert('undefined model')
//              }
          
//     }


//-------popup target (закрытие окна (кнопка Показати ще))----------------------------------------------

//     if (event.target.classList.contains('close_btn')){
//         event.target.closest('.open').classList.remove('open')
//     }
// })

//-------popup (закрытие окна клавиша (esc) (кнопка Показати ще))----------------------------------------------

// document.addEventListener('keydown', function(event){
//     if(event.code.toLowerCase() === 'escape'){
//         document.querySelector('.popup.open').classList.remove('open')  
//     }

//-------popup (закрытие/открытие окна клавиша (Q) (кнопка Показати ще))----------------------------------------------

//     if(event.code.toLowerCase() === 'keyq'){
//         document.querySelector('.popup').classList.toggle('open')  
//     }
// })





