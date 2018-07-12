const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){

    $('.character-info').empty();

      axios.get(`https://ih-crud-api.herokuapp.com/characters`)
      .then((response)=>{
  
        response.data.forEach((oneChar)=>{
          const newChar = `
          <div>
       <h5>Character name: ${oneChar.name}</h5>
       <p>Character occupation: ${oneChar.occupation}</p>
       <p>Character weapon: ${oneChar.weapon}</p>
       <hr>
       </div>
       `
       $('.character-info').append(newChar);
  
       });
  
      })
      .catch((err)=>{
        console.log(err)
      })

      
  }
        
  document.getElementById('fetch-one').onclick = function(){
         
    
    $('.character-info').empty();

    const theId       = $('#character-id').val();

      axios.get(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
      .then((oneChar)=>{
  // console.log(response)
     
          const newChar = `
          <div>
       <h5>Character name: ${oneChar.data.name}</h5>
       <p>Character occupation: ${oneChar.data.occupation}</p>
       <p>Character weapon: ${oneChar.data.weapon}</p>
       <hr>
       </div>
       `
       $('.character-info').append(newChar);
  
       })

     .catch((err)=>{
        console.log(err)
      });




  }
        
  document.getElementById('delete-one').onclick = function(){
              
  }
        
  document.getElementById('edit-character-form').onsubmit = function(){
                  
  }
        
  document.getElementById('new-character-form').onsubmit = function(){
                      
  }
})