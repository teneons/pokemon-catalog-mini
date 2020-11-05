
const pokemonRequest = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=42')    //get data
  .then(d => d.json())
  .then(pokiData => console.log(pokiData.results))
  .catch(() => {     //error
    
    const alertErr = document.createElement('div');
    alertErr.className = "alert alert-danger d-flex justify-content-center";
    alertErr.setAttribute("role", "alert");
    alertErr.textContent = "Something went wrong😬";

    return (
      document.getElementById('header').append(alertErr)
    )
  })
}

pokemonRequest()