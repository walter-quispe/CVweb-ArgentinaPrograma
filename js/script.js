let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML= `Ocultar`
    }else{
        hideText_btn.innerHTML= `Leer más`
    }
};

const switchLabel = document.querySelector('#switch-label');
const headerId = document.querySelector('#headerId');
const justLine = document.querySelector('#justLineId');
const columna2 = document.querySelector('#columna2js');
const columna31 = document.querySelector('#columna31js');

switchLabel.addEventListener('click', changeColor);

function changeColor(){
    document.body.classList.toggle('dark');
    headerId.classList.toggle('dark1');
    justLine.classList.toggle('colorChange');
    columna2.classList.toggle('columna2Dark');
    columna31.classList.toggle('columna31Dark');
};
