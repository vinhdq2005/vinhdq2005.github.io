// menu bar

function ul(index) {
    console.log('click!' + index)
    
    var underlines = document.querySelectorAll(".underline");

    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
    }
}

// slide
let imangeSlide = [
    {url: "https://static.wixstatic.com/media/11062b_91a611d9fc74418da54bb15a2e85481d~mv2.jpg/v1/fill/w_1349,h_900,al_c,q_85,usm_0.66_1.00_0.01/11062b_91a611d9fc74418da54bb15a2e85481d~mv2.jpg"},
    {url: "https://static.wixstatic.com/media/11062b_bebab66faf4440849fe8262659d862b6~mv2.jpg/v1/fill/w_1349,h_899,al_c,q_85,usm_0.66_1.00_0.01/11062b_bebab66faf4440849fe8262659d862b6~mv2.jpg"},
    {url: "https://static.wixstatic.com/media/11062b_04cb21581b0c4aa184ffe8950598665b~mv2.jpg/v1/fill/w_1349,h_899,al_c,q_85,usm_0.66_1.00_0.01/11062b_04cb21581b0c4aa184ffe8950598665b~mv2.jpg"},
    {url: ""},
    {url: ""}
]


let slider = document.querySelector("#slider") 
let changeSlidebtns = document.querySelectorAll(".button-changeslide")


function colorBtn() {
    changeSlidebtns.style.background = "white"
}

function changeSlide() {
    slider.style.backgroundImage = url(imageSlide[0].url)
}

for (const changeSlidebtn of changeSlidebtns) {
    changeSlidebtn.addEventListener('click', changeSlide)
}




