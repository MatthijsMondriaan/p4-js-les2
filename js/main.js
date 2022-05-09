
const container = document.querySelector(".container");

const MAX_ITEMS = 6;

const loops = data.length%MAX_ITEMS ? 
Math.floor(data.length/MAX_ITEMS)+1 :
Math.floor(data.length/MAX_ITEMS);

console.log('Loops is: ', loops);

let html = "";
for (let j = 0; j < loops; j++) {
    let offset = j*MAX_ITEMS;

    console.log('Offset is: ', offset);
    
    html += '<div class="row">';

    for (let i = 0; i < MAX_ITEMS; i++) {
        if(i+offset >= data.length) break;

        const object = data[i+offset];
        
        html += '<div class="item">'
        html += '<h4 class="title">'+object.title+'</h4>';
        html += '<p class="description">'+object.description+'</p>';
        html += '<img src="'+ object.image +'" alt="photo"></img>';
        html += '</div>';
    }

    html += '</div>';
}

console.log(html);

container.innerHTML += html;

