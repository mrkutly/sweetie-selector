const sweetiesContainerEl = document.querySelector('#sweeties-container')

getAndRenderSweetie()

window.addEventListener('scroll', throttle(handleScroll, 200))

function getAndRenderSweetie() {
  Adapter.getSweetie().then(sweetie => renderSweetie(sweetie.url))
}

function renderSweetie(url) {
  let template
  let fileType = url.slice(url.length - 4)

  if(fileType === '.mp4' || fileType === 'webm'){
    template = `<video controls src="${url}" width="1000" height="666" class="sweeties"></video>`
  } else {
    template = `<img src="${url}" class="sweeties"></img>`
  }
  sweetiesContainerEl.innerHTML += template
}

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    getAndRenderSweetie()
  }
}

function throttle(func, wait) {
  let time = Date.now()

  return function() {
    if((time + wait - Date.now()) < 0){
      func()
      time = Date.now()
    }
  }
}
