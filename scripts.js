const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
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

    Section2.scrollIntoView({ block: 'end' } )
}

function MoveSection3() {
    let Section3 = document.querySelector('.Section3')

    Section3.scrollIntoView({ block: 'start' })
}

function MoveSection4() {
    let Section4 = document.querySelector('.Section4')

    Section4.scrollIntoView({ block: 'start', top: -100})
}


function MoveSection5() {
    let Section5 = document.querySelector('.Section5')

    Section5.scrollIntoView({ behavior: 'smooth' })
}



