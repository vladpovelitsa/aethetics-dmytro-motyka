//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//--------------FORM------------------------FORM-----------------------




let form = document.querySelector('.form')
    // console.log(form);

    form.onsubmit = function(event){
       event.preventDefault();
    //    console.log(form.elements);

    let data = {};

    // console.log(typeof form.elements);
    let inputs = Array.from(form.elements)
    let haveError = true;
    let errorText = 'Десь сталась помилка';

    inputs.forEach(function (item) { 
        // console.log(item.tagName);       
        if(item.value && item.tagName.toLowerCase()!=="button"){
            data[item.name] = item.value 
            // console.log(data);
        }
      })
    


        if(!data.userName){
          errorText = 'Введіть Ваше ім`я'
        }else if(data.userName.length <3){
          errorText = 'Введіть коректне ім`я'
        }



        if(!haveError){
            form.style.display = 'none'
            let thanks = document.createElement('div')
            thanks.classList.add('form-submitted')       
            thanks.innerHTML = '<h2>Ми Вам передзвонемо</h2>'
            form.parentNode.appendChild(thanks) 
         }else {        
            let error = document.createElement('p')
            error.classList.add('error-info')
            error.innerText = errorText

            // console.log()

            form.insertBefore(error, inputs.find(function(item){

              return item.tagName.toLowerCase() === 'btn' && item.getAttribute('type') === 'submit'
            }))    
                
        }       
  }



//----------------------------------------------------------------------------
//---Патерн pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"------- 
//----------------------------------------------------------------------------



document.addEventListener('input',function (event) {
   let input = event.target;
   if(input.tagName.toLowerCase() === 'input' && input.getAttribute('type') === 'tel'){
    if(input.value.length === 1 && input.value !== '+'){
        input.value = '+' + input.value
    }
    if(input.value.length === 4){
        input.value = input.value + " (" 
   }
   if(input.value.length === 8){
     input.value = input.value + ") "
   }
   if(input.value.length === 13){
    input.value = input.value + "-"
   }
   if(input.value.length === 16){
    input.value = input.value + "-"
   }
   if(input.value.length > 19){
    input.value = input.value.slice(0,19)
   }
}
})