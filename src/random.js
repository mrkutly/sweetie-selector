const sweetiesContainerEl = document.querySelector('#sweeties-container')

getAndRenderSweetie()

window.addEventListener('scroll', handleScroll)

function getAndRenderSweetie() {
  Adapter.getSweetie().then(sweetie => renderSweetie(sweetie.url))
}

function renderSweetie(url) {
  let template
  let fileType = url.slice(url.length - 3)

  if(fileType === 'mp4'){
    debugger
    template = `<video controls muted src="${url}" width="600" height="400" class="sweeties"></video>`
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
