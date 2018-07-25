const BASE_URL = "https://dog.ceo/api"
const BREEDS_LIST_URL = `${BASE_URL}/breeds/list/all`
const BY_BREED_URL = `${BASE_URL}/breed/`
const RANDOM_URL = `${BASE_URL}/breeds/image/random`



class Adapter {
  static getRandomPic() {
    return fetch(RANDOM_URL)
      .then(resp => resp.json())
      .then(json => json.message)
  }

  static getBreedsList() {
    return fetch(BREEDS_LIST_URL)
      .then(resp => resp.json())
      .then(json => json.message)
      .then(breeds => {
        for (let breed in breeds) {
          let newBreed = new Breed(breed, breeds[breed])
        }
      })
  }

  static getBreedPic(breedName) {
    return fetch(`${BY_BREED_URL}${breedName}/images/random`)
      .then(resp => resp.json())
      .then(json => json.message)
  }
}
