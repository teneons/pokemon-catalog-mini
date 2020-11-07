
//request
async function mainPokemonRequest (urlReq) {
  try {
    const req = await fetch(`${urlReq}`)    //get data
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
const cardConstructor = (namePoke, imgId, urlReqPoke) => {
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
    titleH5.textContent = `${namePoke}`; //'Pokemon name'
  const btnInfo = document.createElement('button');
    btnInfo.setAttribute('href', `${urlReqPoke}`);
    btnInfo.className = 'btn btn-outline-danger';
    btnInfo.setAttribute('id', 'btnInfo');
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


const setGeneralData = (generalD) => {
  const generalData = generalD.results;

  generalData.forEach(element => {
    const id = element.url.match(/\/(\d+)\//)[1];   //id for img url

    cardConstructor(element.name, id, element.url)
  });
  
}

//1st load page
let stepCount = 4;
window.onload = mainPokemonRequest('https://pokeapi.co/api/v2/pokemon?limit=' + stepCount);

document.getElementById('btnLoadMore').onclick = ()=> {
  stepCount *= 2;
  mainPokemonRequest(`https://pokeapi.co/api/v2/pokemon?limit=${stepCount}`);
}


//modal window
const modalWind = document.getElementById('exampleModal');
modalWind.addEventListener('shown.bs.modal', () => {
  //getPokemonData(document.querySelector('btnInfo').getAttribute('href'))
  console.log(document.getElementById('btnInfo').getAttribute('href'))
})

