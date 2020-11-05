
async function generalPokemonsReq () {
  try {
    const req = await fetch('https://pokeapi.co/api/v2/pokemon?limit=42')    //get data
    const jsonData = await req.json();
    return await setGeneralData(jsonData);

  } catch(e) {     //error
    
    //create html message
    const alertErr = document.createElement('div');
    alertErr.className = 'alert alert-danger d-flex justify-content-center';
    alertErr.setAttribute('role', 'alert');
    alertErr.textContent = 'Something went wrong😬';

    return document.getElementById('header').append(alertErr);
  }
}


const cardConstructor = () => {
  const mainCardContainer = document.createElement('div');
    mainCardContainer.className = 'col-sm-6 col-md-5 col-lg-4 col-xl-3 p-2';
  const card = document.createElement('div');
    card.className = 'card border border-danger text-center';
  const img = document.createElement('img');
    img.src = 'https://pokeres.bastionbot.org/images/pokemon/5.png';
    img.className = 'card-img-top';
    img.alt = 'Pokemon img'
  const cardBody = document.createElement('div');
    cardBody.className = 'card-body'
  const titleH5 = document.createElement('h5');
    titleH5.className = 'card-title';
    titleH5.textContent = 'Pokemon name';
  const btnInfo = document.createElement('button');
    btnInfo.setAttribute('href', '#');
    btnInfo.className = 'btn btn-outline-danger';
    btnInfo.setAttribute('data-toggle', 'modal');
    btnInfo.setAttribute('data-target', '#exampleModal');
    btnInfo.textContent = 'Info';

  document.querySelector('.cardsContainer').append(mainCardContainer);
  mainCardContainer.append(card);
  card.append(img);
  img.after(cardBody);
  cardBody.prepend(titleH5);
  titleH5.after(btnInfo);
}

cardConstructor()

const setGeneralData = (generalD) => {
  document.querySelector('.card-title').innerHTML = generalD.results[0].name;
}


 window.onload = generalPokemonsReq();