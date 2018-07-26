class Adapter {
  static getSweetie() {
    return fetch("https://random.dog/woof.json")
      .then(resp => resp.json())
  }
}
