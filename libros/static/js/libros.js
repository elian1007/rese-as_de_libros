const API_URL = 'http://127.0.0.1:8000/api/mediarandom/';

function getMediaTemplate(media) {

    tempstr = `<h3>  
    <p>${media.name}</p> 
    <p>${media.genre}</p> 
    <p>${media.author}</p> 
    <h5>${media.summary}</h5>
    <button  class="play-btn" id="" onclick="markAsViewed('${media.id}')">${media.views}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
    </svg>
    </button>        
    <p>★ ${media.average}</p>
    <select  id="selectAverage" name="select">
    <option value="">Calificar por estrellas </option>
    <option value=1>★</option>
    <option value=2>★★</option>
    <option value=3>★★★</option>
    <option value=4>★★★★</option>
    <option value=5>★★★★★</option>
    </select></label> <button id="btn-vot" onclick="markAsRating('${media.id}')" >Enviar</button> 
    <h5> Comentarios : ${media.review}</h5>
  <form method="post">
    <input type="text" placeholder="comentario" review" name="nombre" required>
    <br>
    <input type="submit" value="Enviar" >
</form>
  </h3>`
    return tempstr
}

function getMediaTemplateOrder(media) {
    template = tempstr = `<h4  
    <p>  ${media.name}</p> 
    <p> ${media.genre}</p> 
    <p>  ${media.author}</p> 
    <button  class="play-btn" id="" onclick="markAsViewed('${media.id}')">${media.views}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
    </svg>
    </button> 
    <p>Promedio: ${media.average}</p>
    <select  id="selectAverage" name="select">
    <option value="">Calificar por estrellas </option>
    <option value=1>★</option>
    <option value=2>★★</option>
    <option value=3>★★★</option>
    <option value=4>★★★★</option>
    <option value=5>★★★★★</option>
  </select></label> <button id="btn-vot" onclick="markAsRating('${media.id}')" >VOTAR</button> 
  <h5> Comentarios : ${media.review}</h5>
  <form method="post">
    <input type="text" placeholder="comentario" review" name="nombre" required>
    <br>
    <input type="submit" value="Enviar" >
</form>
</h4>`
    return template
}

function getMediaTemplateFilter(media) {
    template = tempstr = `<h4  
    <p>  ${media.name}</p> 
    <p> ${media.genre}</p> 
    <p>  ${media.author}</p> 
    <button  class="play-btn" id="" onclick="markAsViewed('${media.id}')">${media.views}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
    </svg>
    </button> 
    <p>Promedio: ${media.average}</p>
    <select  id="selectAverage" name="select">
    <option value="">Calificar por estrellas </option>
    <option value=1>★</option>
    <option value=2>★★</option>
    <option value=3>★★★</option>
    <option value=4>★★★★</option>
    <option value=5>★★★★★</option>
  </select></label> <button id="btn-vot" onclick="markAsRating('${media.id}')" >VOTAR</button> 
  <h5> Comentarios : ${media.review}</h5>
  <form method="post">
    <input type="text" placeholder="comentario" review" name="nombre" required>
    <br>
    <input type="submit" value="Enviar" >
</form>
</h4>`
return template

}
const HTMLResponse = document.querySelector("#app")
const tpl = document.createDocumentFragment()

fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((media) => getMediaTemplate(media))
        HTMLResponse.innerHTML = `<p>${tpl}</p>`
    })

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    location.reload();
})



const MEDIA_URL = 'http://127.0.0.1:8000/api/mediaorder?';
const HTMLResponse2 = document.querySelector("#app2")
const select = document.querySelector("#select")
const tpl2 = document.createDocumentFragment()

showMedias()

function eventSelect() {
    showMedias(select.value)
}

function showMedias(orderingField) {
    fetch(`${MEDIA_URL}` + new URLSearchParams({
            ordering: orderingField,
        }))
        .then((response) => response.json())
        .then((users) => {
            const tpl = users.map((media) => getMediaTemplateOrder(media))
            HTMLResponse2.innerHTML = `<p>${tpl}</p>`
        })
}



const FILTER_URL = 'http://127.0.0.1:8000/api/mediafilter?';
const HTMLResponseFilter = document.querySelector("#appFilter")
const inputName = document.querySelector("#name")
const inputGenre = document.querySelector("#genre")
const inputRate = document.querySelector("#rate")

const buttonFiltre = document.querySelector("#buttonFilter")
const tplFilter = document.createDocumentFragment()

showMediasFilter("", "", "")

function eventFilter() {
    showMediasFilter(inputName.value, inputGenre.value, inputRate.value)
}

function showMediasFilter(name, genre, type) {
    fetch(`${FILTER_URL}` + new URLSearchParams({
            name: name,
            genre: genre,
            type: type
        }))
        .then((response) => response.json())
        .then((users) => {
            const tpl = users.map((media) => getMediaTemplateFilter(media))
            HTMLResponseFilter.innerHTML = `<p>${tpl}</p>`
        })
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csfr = document.getElementsByName("csrfmiddlewaretoken");
async function markAsViewed(mediaIdSelected) {
    console.log(mediaIdSelected)
    location.reload();
    const params = new URLSearchParams();
    params.append('mediaId', mediaIdSelected);
    let csrftoken = getCookie('csrftoken');
    let response = fetch("http://127.0.0.1:8000/api/mediaview/", {
        method: 'POST',
        body: params,
        headers: { "X-CSRFToken": csrftoken },
    });
    const res = (await response).ok
    if (!res) {
        alert("Usted ya marco como vista")
    }
}



const csfr1 = document.getElementsByName("csrfmiddlewaretoken");
async function markAsRating(mediaIdSelected) {
    const selectAverage = document.getElementById("selectAverage").value
    console.log(mediaIdSelected)
    location.reload();

    const params1 = new URLSearchParams();
    params1.append('rate', selectAverage);
    params1.append('mediaId', mediaIdSelected);
    let csrftoken = getCookie('csrftoken');
    let response = fetch("http://127.0.0.1:8000/api/mediarating/", {
        method: 'POST',
        body: params1,
        headers: { "X-CSRFToken": csrftoken },
    })
    const res = (await response).ok
    if (!res) {
        alert("Gracias por votar")
        selectAverage.style.display = 'initial';

    }

}