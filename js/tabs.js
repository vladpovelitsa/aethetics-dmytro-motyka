function Tabs(target) {
    this.target = document.querySelector(target);
    this.initTabs = () => {
        this.createButtonsWrap()
        Array.from(this.target.children).forEach((item, index) => {
            if(!item.classList.contains('tabs__toggler-wrap')) {
                item.classList.add('tabs__item');
                if(index === 0) {
                    item.classList.add('--open');
                }
                item.setAttribute('data-tabId', index)
                this.target.querySelector('.tabs__toggler-wrap').appendChild(this.createButton(item.getAttribute('data-tab_title'), index))
            }

        })
    }
    this.createButton = (title, index) => {
        let btn = document.createElement('button')
        btn.classList.add('tabs__toggler')
        btn.innerText = title ? title : 'tab #' + (index+1)
        btn.addEventListener('click', () => {
            this.target.querySelectorAll('.tabs__item').forEach(item => {
                item.classList.remove('--open')
            })
            this.target.querySelector(`.tabs__item[data-tabId="${index}"]`).classList.add('--open')
        })
        return btn
    }
    this.createButtonsWrap = () => {
        let div = document.createElement('div')
        div.classList.add('tabs__toggler-wrap')
        this.target.appendChild(div)
    }
}
let tabs1 = new Tabs('#tabs1')
let tabs2 = new Tabs('#tabs2')
tabs1.initTabs()
tabs2.initTabs()
new Tabs('#tabs3').initTabs()




// Создать ООП-табы
// на странице
    // aethetics/cabinet.html и
    // aethetics/product_card.html
// 1. Заголовки табов должны быть динамическими по количеству табов
// 2. Контент табов может быть любой