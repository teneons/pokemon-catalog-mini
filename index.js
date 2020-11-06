
//request
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

//card
const cardConstructor = (namePoki, imgId, urlReqPoki) => {
  const mainCardContainer = document.createElement('div');
    mainCardContainer.className = 'col-sm-6 col-md-5 col-lg-4 col-xl-3 p-2';
  const card = document.createElement('div');
    card.className = 'card border border-danger text-center';
  const img = document.createElement('img');
    img.src = `https://pokeres.bastionbot.org/images/pokemon/${imgId}.png`;
    img.className = 'card-img-top';
    img.alt = 'Pokemon img'
  const cardBody = document.createElement('div');
    cardBody.className = 'card-body'
  const titleH5 = document.createElement('h5');
    titleH5.className = 'card-title';
    titleH5.textContent = `${namePoki}`; //'Pokemon name'
  const btnInfo = document.createElement('button');
    btnInfo.setAttribute('href', '#');
    btnInfo.className = 'btn btn-outline-danger btnInfo';
    btnInfo.setAttribute('data-toggle', 'modal');
    btnInfo.setAttribute('data-target', '#exampleModal');
    btnInfo.textContent = 'Info';
    btnInfo.setAttribute('href', `${urlReqPoki}`);

  document.querySelector('.cardsContainer').append(mainCardContainer);
  mainCardContainer.append(card);
  card.append(img);
  img.after(cardBody);
  cardBody.prepend(titleH5);
  titleH5.after(btnInfo);
}


const setGeneralData = (generalD) => {
  const generalData = generalD.results;

  generalData.forEach(element => {
    const id = element.url.match(/\/(\d+)\//)[1];   //id for img url

    cardConstructor(element.name, id, element.url)
  });
  
}

//1st load page
window.onload = generalPokemonsReq();

//modal window
const modalWind = document.getElementById('exampleModal');
modalWind.addEventListener('shown.bs.modal', () => {
  console.log(42)
})