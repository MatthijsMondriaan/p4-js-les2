

const container = document.querySelector(".container");


let html = "";


html += '<div class="row">';    

for (let i = 0 ; i<3; i++) {
    const object = data[i];
    html += '<div class="item">'
    html += '<h4 class="title">'+object.title+'</h4>';
    html += '<p class="description">'+object.description+'</p>';
    html += '<img src="'+ object.image +'" alt="photo"></img>';
    html += '</div>';     
}

html += '</div>';


container.innerHTML += html;
