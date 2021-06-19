const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    let id = anchor.getAttribute('href')
    document.querySelector(id + '').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const models = document.getElementsByClassName('model')

for (let i = 0; i < models.length; i++) {
  if (i > 2){
    models[i].style.display = 'none'
    models[i].style.opacity = '0'
  }
}

let page = 1

const leftButton = document.getElementsByClassName('leftButton')[0]
const rightButton = document.getElementsByClassName('rightButton')[0]
const slicklist = document.getElementsByClassName('hotmodelsSlicklist')[0]

leftButton.addEventListener('click', (e) => {
  page--
  switch (page) {
    case 1:
    for (let i = 3; i < 6; i++) {
      models[i].style.opacity = '0'
    }
    setTimeout(() => {
      for (let i = 3; i < 6; i++) {
        models[i].style.display = 'none'
      }
      leftButton.style.display = 'none'
      for (let i = 0; i < 3; i++) {
        models[i].style.display = 'block'
        models[i].style.opacity = '1'
      }
      slicklist.innerHTML = '<img src="images/p1.png" alt=""><img src="images/p0.png" alt=""><img src="images/p0.png" alt=""><img src="images/p0.png" alt="">'
    }, 200)
    break
    case 2:
    for (let i = 6; i < 9; i++) {
      models[i].style.opacity = '0'
    }
    setTimeout(() => {
      for (let i = 6; i < 9; i++) {
        models[i].style.display = 'none'
      }
      for (let i = 3; i < 6; i++) {
        models[i].style.display = 'block'
        models[i].style.opacity = '1'
      }
      slicklist.innerHTML = '<img src="images/p0.png" alt=""><img src="images/p1.png" alt=""><img src="images/p0.png" alt=""><img src="images/p0.png" alt="">'
    }, 200)
    break
    case 3:
    for (let i = 9; i < 12; i++) {
      models[i].style.opacity = '0'
    }
    setTimeout(() => {
      for (let i = 9; i < 12; i++) {
        models[i].style.display = 'none'
      }
      rightButton.style.display = 'inline'
      for (let i = 6; i < 9; i++) {
        models[i].style.display = 'block'
        models[i].style.opacity = '1'
      }
      slicklist.innerHTML = '<img src="images/p0.png" alt=""><img src="images/p0.png" alt=""><img src="images/p1.png" alt=""><img src="images/p0.png" alt="">'
    }, 200)
    break
  }
})

rightButton.addEventListener('click', (e) => {
  page++
  switch (page) {
    case 2:
      for (let i = 0; i < 3; i++) {
        models[i].style.opacity = '0'
      }
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          models[i].style.display = 'none'
        }
        leftButton.style.display = 'inline'
        for (let i = 3; i < 6; i++) {
          models[i].style.display = 'block'
          models[i].style.opacity = '1'
        }
        slicklist.innerHTML = '<img src="images/p0.png" alt=""><img src="images/p1.png" alt=""><img src="images/p0.png" alt=""><img src="images/p0.png" alt="">'
      }, 200)
    break
    case 3:
      for (let i = 3; i < 6; i++) {
        models[i].style.opacity = '0'
      }
      setTimeout(() => {
        for (let i = 3; i < 6; i++) {
          models[i].style.display = 'none'
        }
        for (let i = 6; i < 9; i++) {
          models[i].style.display = 'block'
          models[i].style.opacity = '1'
        }
        slicklist.innerHTML = '<img src="images/p0.png" alt=""><img src="images/p0.png" alt=""><img src="images/p1.png" alt=""><img src="images/p0.png" alt="">'
      }, 200)
    break
    case 4:
      for (let i = 6; i < 9; i++) {
        models[i].style.opacity = '0'
      }
      setTimeout(() => {
        for (let i = 6; i < 9; i++) {
          models[i].style.display = 'none'
        }
        rightButton.style.display = 'none'
        for (let i = 9; i < 12; i++) {
          models[i].style.display = 'block'
          models[i].style.opacity = '1'
        }
        slicklist.innerHTML = '<img src="images/p0.png" alt=""><img src="images/p0.png" alt=""><img src="images/p0.png" alt=""><img src="images/p1.png" alt="">'
      }, 200)
    break
  }
})

let devMainTab = document.getElementsByClassName('devInfo')[0]
let devProjectsTab = document.getElementsByClassName('devInfo')[1]
let devContactsTab = document.getElementsByClassName('devInfo')[2]

devProjectsTab.style.display = 'none'
devContactsTab.style.display = 'none'

let ourteamItem1 = document.getElementsByClassName("ourteamItem")[0]
let ourteamItem2 = document.getElementsByClassName("ourteamItem")[1]
let ourteamItem3 = document.getElementsByClassName("ourteamItem")[2]

ourteamItem1.addEventListener('click', () => {
  devMainTab.style.display = 'block'
  devProjectsTab.style.display = 'none'
  devContactsTab.style.display = 'none'
  ourteamItem1.className = 'ourteamItem active'
  ourteamItem2.className = 'ourteamItem'
  ourteamItem3.className = 'ourteamItem'
})

ourteamItem2.addEventListener('click', () => {
  devMainTab.style.display = 'none'
  devProjectsTab.style.display = 'block'
  devContactsTab.style.display = 'none'
  ourteamItem1.className = 'ourteamItem'
  ourteamItem2.className = 'ourteamItem active'
  ourteamItem3.className = 'ourteamItem'
})

ourteamItem3.addEventListener('click', () => {
  devMainTab.style.display = 'none'
  devProjectsTab.style.display = 'none'
  devContactsTab.style.display = 'block'
  ourteamItem1.className = 'ourteamItem'
  ourteamItem2.className = 'ourteamItem'
  ourteamItem3.className = 'ourteamItem active'
})

let sendError = [true, true, true]

for (let i = 0; i < 3; i++) {
  document.getElementsByClassName('inp')[i].addEventListener('change', (e) => {
    if (e.currentTarget.value != '') {
      document.getElementsByClassName('red')[i].innerHTML = ''
      sendError[i] = false
    } else {
      document.getElementsByClassName('red')[i].innerHTML = '*'
      sendError[i] = true
    }
  })
}

document.getElementsByClassName('contactusButton')[0].addEventListener('click', () => {
  if (sendError[0] || sendError[1] || sendError[2]) {
    alert('Введите все необходимые поля\nдля отправки сообщения')
  } else {
    let name = document.getElementsByClassName('inp')[0].value
    let email = document.getElementsByClassName('inp')[1].value
    let message = document.getElementsByClassName('inp')[2].value
    alert('Спасибо за сообщение!\n\n' + name + '\n' + message + '\n\n' + email)
  }
})
