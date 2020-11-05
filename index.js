
async function generalPokemonsReq () {
  try {
    const req = await fetch('https://pokeapi.co/api/v2/pokemon?limit=42')    //get data
    const jsonData = await req.json();
    return await setGeneralData(jsonData);

  } catch(e) {     //error
    
    //create html message
    const alertErr = document.createElement('div');
    alertErr.className = "alert alert-danger d-flex justify-content-center";
    alertErr.setAttribute("role", "alert");
    alertErr.textContent = "Something went wrong😬";

    return document.getElementById('header').append(alertErr);
  }
}

//let generalData = generalPokemonsReq()

const setGeneralData = (generalD) => {
  document.querySelector('.card-title').innerHTML = generalD.results[0].name;
  document.querySelector
}

 window.onload = generalPokemonsReq();