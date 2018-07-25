Adapter.getBreedsList().then(list => renderBreedList(allBreeds))
document.addEventListener('click', handleNewPic)
const breedSelect = document.querySelector('#breed-select')
breedSelect.addEventListener('submit', handleNewBreedCard)

const breedCardContainer = document.querySelector('#breed-card-container')
const breedList = document.querySelector('#breed-list')

function handleNewBreedCard(e) {
  e.preventDefault()
  let breedName = e.target.querySelector('#breed-choice').value
  let breed = allBreeds.find(breed => breed.name === breedName)
  renderBreed(breed)
}

function handleNewPic(e) {
  if (e.target.className === 'new-pic'){
    let card = e.target.parentElement
    let imgTag = card.querySelector('img')
    let breedName = e.target.previousElementSibling.innerText
    Adapter.getBreedPic(breedName).then(picUrl => imgTag.setAttribute('src', picUrl))
  }
}

function renderBreed(breed) {
  makeBreedTemplate(breed)

  let card = document.querySelector(`.card[data-id="${breed.id}"]`)
  renderCard(breed.name, card)
}

function renderBreedList(breeds) {
  let template = breeds.map(breed => makeBreedListTemplate(breed)).join("")
  breedList.innerHTML += template
}

function makeBreedListTemplate(breed) {
  return `<option value="${breed.name}"></option>`
}

function makeBreedTemplate(breed) {
  let template = `<div class="card" data-id="${breed.id}"></div>`
  breedCardContainer.innerHTML = template
}

function renderCard(breedName, breedCard) {
  Adapter.getBreedPic(breedName)
    .then(picUrl => {
      breedCard.innerHTML += `
          <img src=${picUrl} alt=${breedName} class="card-image"><p class="breed-name">${breedName}</p>
          <button class="new-pic">Get a new sweetie</button></img>`

    })
}
