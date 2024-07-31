const button = document.querySelectorAll('.box');
const body = document.querySelector("body");

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#FFB200'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = '#FF4191'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = '#EB5B00'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = '#E4003A'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = '#BC5A94'
        }
        if(color.target.id === 'box6'){
            body.style.backgroundColor = '#7C00FE'
        }
        if(color.target.id === 'box7'){
            body.style.backgroundColor = '#399918'
        }
        if(color.target.id === 'box8'){
            body.style.backgroundColor = '#FF0000'
        }
        if(color.target.id === 'box9'){
            body.style.backgroundColor = '#3C5B6F'
        }
        if(color.target.id === 'box10'){
            body.style.backgroundColor = '#7da70a'
        }
    })
})