let element;
/* ### Aula 1 
    getElementById() 
    Seleciono o elemento pelo ID do elemento
*/
// element = document.getElementById('title')
// console.log(element)

/* ### Aula 2
    getElementByClassName() 
    Seleciono o elemento pela classe do elemento
*/
// element = document.getElementsByClassName('class1')
// console.log(element)

/* ### Aula 3
    getElementByTagName() 
    Seleciono o elemento pela TAG do elemento
*/
// element = document.getElementsByTagName('h1')
// console.log(element)

/* ### Aula 4
    querySelector()
    Seleciono o elemento pelo seletor CSS. Ele pega o primeiro elemento que encontrar na página
*/
// element = document.querySelector('meta')
// console.log(element)

/* ### Aula 5
    querySelectorAll()
    Seleciona uma coleção de nós (NodeList) trazendo todos os elementos que tenham o seletor buscado
*/
// element = document.querySelectorAll('meta')
// console.log(element)

/*
    QUAL USA?

    // getElementById() (element)
    // getElementByClassName() (HTMLCollection)
    // getElementByTagName() (HTMLCollection)
    // querySelector() (element)
    // querySelectorAll() (NodeList) - foreach

    * Dar preferência aos querySelector
*/

/*  ### MANIPULANDO CONTEÚDOS
    textContent
*/
// element = document.querySelector('h1')
// element.textContent += ' Olá DEVs!'
// console.log(element.textContent)

/*  ### MANIPULANDO CONTEÚDOS
    innerHTML
*/
// element = document.querySelector('h1')
// element.innerHTML = 'Olá DEVs! <small>!!!</small>' // Adiciona HTML diretamente no elemento

/*  ### MANIPULANDO CONTEÚDOS
    value
*/
// element = document.querySelector('input')
// element.value('Texto desejado aqui') // popula o input

/*  ### MANIPULANDO CONTEÚDOS
    Atributos
*/
// const header = document .querySelector('header')
// header.setAttribute('id', 'header')

// const headerId = document.querySelector('#header')

// console.log(headerId) // Mostra o elemento
// console.log(headerId.getAttribute('class')) // Mostra a classe
// header.removeAttribute('id') // Remove o atributo

/* 
    ### ALTERANDO ESTILOS
*/

// element = document.querySelector('body')

// element.style.backgroundColor = "#fff" // Atribui propriedade ao elemento
// console.log(element.style.backgroundColor) // Pesquisa a propriedade do elemento

// classList - retorna uma lista de classes

// element = document.querySelector('body')

// element.classList.add() // adiciona uma ou mais classes
// element.classList.remove() // remove uma ou mais classes
// element.classList.toggle() // pesquisa a classe. se existir ele exclui e se não tem ele adiciona

// console.log(element.classList)

/*
    ### NAVEGANDO ENTRE OS ELEMENTOS PAIS
    # parentNode parentElement
*/

// let body = document.querySelector('body')
// console.log(body.parentNode)
// console.log(body.parentElement)

/*
    ### NAVEGANDO ENTRE OS ELEMENTOS FILHOS
    # childNode children
*/

// const el = document.querySelector('body')

// console.log(el.childNodes) // pega todos o selementos em forma de nodeList
// console.log(el.children) // retorna um HTMLCollection

// firstChild firstElementChild
// console.log(el.firstChild)

// lastChild lastElementChild
// console.log(el.firstElementChild)

/*
    ### NAVEGANDO ENTRE OS ELEMENTOS IRMÃOS (SIBLING)
*/

// const el = document.querySelector('script')
// // nextSibling nextElementSibling
// console.log(el.nextSibling)
// console.log(el.nextElementSibling)

// // previousSibling previousElementSibling
// console.log(el.previousSibling)
// console.log(el.previousElementSibling)

/*
    CRIANDO E ADICIONANDO ELEMENTOS NO HTML
*/

// // createElement
// const div = document.createElement('div')
// div.innerText = 'Olá Devs'

// // append prepend
// const body = document.querySelector('body')
// body.append(div) // adiciona apos
// body.prepend(div) // adiciona antes

/*
    ADICIONANDO ELEMENTOS
*/

// const div = document.querySelector('body')
// div.innerText = 'Olá DEVs!'

// // insertBefore
// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)

