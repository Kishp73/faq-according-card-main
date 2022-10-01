let paragraph = document.querySelectorAll('p.paragraph_style');
let buttoms = document.querySelectorAll('div.container');
let arrows = document.querySelectorAll('i.arrow');
let title_question = document.querySelectorAll('h2.question_style');

let display_paragraph = [false, false, false, false, false];
let save_position = 0;

function getposition(num){
    return parseInt(num) - 1;
}

for (let i of buttoms){

    i.addEventListener('click',()=>{

        if (display_paragraph[getposition(i.id)]){

            display_paragraph[getposition(i.id)] = false;

            title_question[getposition(i.id)].style.fontWeight = '400';
            arrows[getposition(i.id)].style.animation = 'return_arrow 0.3s forwards'
            paragraph[getposition(i.id)].style.animation = 'undisplay_paragraph 0.5s forwards';
            paragraph[getposition(i.id)].style.display = 'none';
            
        }else{
            
            display_paragraph[save_position] = false;
            title_question[save_position].style.fontWeight = '400';
            arrows[save_position].style.animation = 'return_arrow 0.3s forwards'
            paragraph[save_position].style.animation = 'undisplay_paragraph 0.5s forwards';
            paragraph[save_position].style.display = 'none';
            
            save_position = getposition(i.id);
            display_paragraph[getposition(i.id)] = true;

            title_question[getposition(i.id)].style.fontWeight = '700';
            arrows[getposition(i.id)].style.animation = 'invert_arrow 0.3s forwards'
            paragraph[getposition(i.id)].style.display = 'block';
            paragraph[getposition(i.id)].style.animation = 'display_paragraph 0.3s forwards';

        }

    })
}


