const allBreeds = []
let breedId = 0

class Breed {
  constructor(name, subBreeds) {
    this.id = ++breedId
    this.name = name
    this.subBreeds = subBreeds

    allBreeds.push(this)
  }
}
