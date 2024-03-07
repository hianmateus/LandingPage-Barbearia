const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

function MoveSection2() {
    let Section2 = document.querySelector('.Section2')

    Section2.scrollIntoView({ block: 'end' })
}

function MoveSection3() {
    let Section3 = document.querySelector('.Section3')

    Section3.scrollIntoView({ block: 'start' })
}

function MoveSection4() {
    let Section4 = document.querySelector('.Section4')

    Section4.scrollIntoView({ block: 'start', top: -100 })
}


function MoveSection5() {
    let Section5 = document.querySelector('.Section5')

    Section5.scrollIntoView({ behavior: 'smooth' })
}

/*ABRINDO E FECHANDO BOX*/

function OpenBox() {
    const BoxAG = document.querySelector('.Agendar')
    const elementos = BoxAG.querySelectorAll('*')

    BoxAG.classList.add('showbox')
    elementos.forEach(function (elemento) {
        elemento.style.transition = "none"
        elemento.style.opacity = "1"
        elemento.style.transform = 'translateX(' + 0 + 'px)'
    })

}

function CloseBox() {
    const BoxAG = document.querySelector('.Agendar')
    const elementos = BoxAG.querySelectorAll('*')

    BoxAG.classList.remove('showbox')
    elementos.forEach(function (elemento) {
        elemento.style.opacity = "0"
        elemento.style.transform = 'translateX(' + -2000 + 'px)'
    })

}

function OpenCheck() {
    const BocCheck = document.querySelector('.AgenderConluido')

    BocCheck.classList.add('showbox')
}
function CloseCheck() {
    const BocCheck = document.querySelector('.AgenderConluido')

    BocCheck.classList.remove('showbox')
}

/*SELECIONANDO HORARIO*/

const navbar = document.querySelector('.AGhorarios')
const allLi = document.querySelectorAll('.horario')

allLi.forEach((li, index) => {

    li.addEventListener('click', e => {
        navbar.querySelector('.active').classList.remove('active')
        li.classList.add('active')

        if (index === 0) {
            Horario = ""
            Horario = "09:00"
        } if (index === 1) {
            Horario = ""
            Horario = "10:00"
        } if (index === 2) {
            Horario = ""
            Horario = "11:00"
        } if (index === 3) {
            Horario = ""
            Horario = "12:00"
        }

    })

})

/*AGENDANDO DIA*/

const HRAgendado = []
let Name = document.querySelector('#nome')
let Data = document.querySelector('#data')
let Select = document.querySelector('.selectLocate')
let Horario = ""

function Agendar() {

    if (Name.value === "" || Data.value === ""
    || Select.value === "" || Horario === "" ) {
        alert("Preencha as informações")
    } else {
        HRAgendado.push(
            {
                Nome: Name.value,
                Dia: Data.value,
                Unidade: Select.value,
                Horario: Horario
            }
        )

        Name.value = ''
        Data.value = ''
        Horario = ''

        console.log(HRAgendado)

        CloseBox()
        OpenCheck()
    }



}
