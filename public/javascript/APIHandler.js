class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return this.BASE_URL.get('/characters')
  }

  getOneRegister (characterId) {
    return this.BASE_URL.get(`/characters/${characterId}`)
  }

  createOneRegister ({ name: string, occupation: string, cartoon: boolean, weapon: string }) {
    return this.BASE_URL.post('/characters', { name: string, occupation: string, cartoon: boolean, weapon: string })
  }

  updateOneRegister (characterId, { name: string, occupation: string, cartoon: boolean, weapon: string }) {
    return this.BASE_URL.put(`/characters/${characterId}`, { name: string, occupation: string, cartoon: boolean, weapon: string })
  }

  deleteOneRegister (characterId) {
    return this.BASE_URL.delete(`/characters/${characterId}`)
  }
}




module.exports = APIHandler;


