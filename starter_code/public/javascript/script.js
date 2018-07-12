$('#fetch-all').click(function(){

    console.log('hi')
    // Emptys every time you click the button so it does replicate
    $('#chars-div').empty();

    axios.get('https://ih-crud-api.herokuapp.com/characters' )
    .then((response)=>{

        response.data.forEach((oneChar)=>{
            const newChar = `
            <div>
         <h5>name: ${oneChar.name}</h5>
         <p>occupation: ${oneChar.occupation}</p>
         <p>weapon: ${oneChar.weapon}</p>
         </div>
         `
         $('#chars-div').append(newChar);

         });
    
    })

});