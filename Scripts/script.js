'use strick'

//Button click effet

const spinObjectName = document.querySelector('#spin_name');
const spinObjectColor = document.querySelector('#spin_color')

const addSpinName = () =>{
   spinObjectName.classList.toggle('spin');
   spinObjectName.textContent = 'Click!';
   setTimeout(function(){
    spinObjectName.classList.remove('spin');
    spinObjectName.textContent = '';
   }, 1500);
}

const addSpinColor = () =>{
    spinObjectColor.classList.toggle('spin');
    spinObjectColor.textContent = 'Click!';
    setTimeout(function(){
     spinObjectColor.classList.remove('spin');
     spinObjectColor.textContent = '';
    }, 1500);
 }
 
 // Name and Color functions selection

const btnName = document.querySelector('#window_prompt_name');
const nameWritePlace = document.querySelector('#document_write_name_place');
const btnColor = document.querySelector('#window_prompt_color');
const writeColorPlace = document.querySelector('#document_write_color_place');

btnName.addEventListener('click', function(){
setTimeout(function(){
    let name = window.prompt('Podaj Imie:');
    if (window.confirm(`Prawidłowe imię: ${name} ?`) == true){
        nameWritePlace.textContent = name;
    } else{
        window.alert(`Nieprawidłowe`);
    }
}, 1500);
});

const addClass = function(color){
    writeColorPlace.classList.add(color);
};

btnColor.addEventListener('click', function(){
    writeColorPlace.classList.remove(writeColorPlace.classList.item(0));
    writeColorPlace.textContent = '';
setTimeout(function(){
    let color = window.prompt
    (`Podaj jeden z kolorow:
    - Cyjan
    - Niebieski
    - Zielony
    - Czerwony
    - Fuksja
    - Żółty`);
    writeColorPlace.textContent = color;
    switch(color){
        case 'Cyjan':
            addClass('aqua');
            break;
        case 'Niebieski':
            addClass('blue');
            break;
        case 'Zielony':
            addClass('green');
            break;
        case 'Czerwony':
            addClass('red');
            break;
        case 'Fuksja':
            addClass('fuchsia');
            break;
        case 'Żółty':
            addClass('yellow');
            break;
        default:
            window.alert('Nieprawidłowy kolor')
    }
}, 1500);
});