
const container = document.querySelector(".container");


let html = '<div class="row">';

for (let i = 0; i < 3; i++) {
    const object = data[i];
    
    html += '<div class="item">'+object.title+'</div>';
}

html + '</div>';

container.innerHTML += html;

