class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`https://ih-crud-api.herokuapp.com/characters`)
    .then((response)=>{

      response.data.forEach((oneChar)=>{
        const newChar = `
        <div>
     <h5>name: ${oneChar.name}</h5>
     <p>occupation: ${oneChar.occupation}</p>
     <p>weapon: ${oneChar.weapon}</p>
     </div>
     `
     $('.character-info').append(newChar);

     });

    })
    .catch((err)=>{
      console.log(err)
    })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}