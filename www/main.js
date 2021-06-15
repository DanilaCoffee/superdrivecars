const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
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
