// menu bar

function ul(index) {
    console.log('click!' + index)
    
    var underlines = document.querySelectorAll(".underline");

    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
    }
}

// search bar

let searchBar = document.querySelector(".search-bar")
let searchIcon = document.querySelector(".search-icon")

function openSearchbar() {
    searchBar.classList.add("open-search-bar")
    searchIcon.classList.add("close-search-icon")
}

searchIcon.addEventListener('click', openSearchbar)

// slide
let imangeSlide = [
    {url: "https://static.wixstatic.com/media/11062b_91a611d9fc74418da54bb15a2e85481d~mv2.jpg/v1/fill/w_1349,h_900,al_c,q_85,usm_0.66_1.00_0.01/11062b_91a611d9fc74418da54bb15a2e85481d~mv2.jpg"},
    {url: "https://static.wixstatic.com/media/11062b_bebab66faf4440849fe8262659d862b6~mv2.jpg/v1/fill/w_1349,h_899,al_c,q_85,usm_0.66_1.00_0.01/11062b_bebab66faf4440849fe8262659d862b6~mv2.jpg"},
    {url: "https://static.wixstatic.com/media/11062b_04cb21581b0c4aa184ffe8950598665b~mv2.jpg/v1/fill/w_1349,h_899,al_c,q_85,usm_0.66_1.00_0.01/11062b_04cb21581b0c4aa184ffe8950598665b~mv2.jpg"},
    {url: ""},
    {url: ""}
]

// slide
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		'cover'      : true,
		'heightRatio': 0.5,
	} ).mount();
} );


// login page

let login = document.querySelector(".account")
let loginPage = document.querySelector("#login")
let loginContainer = document.querySelector(".login-container")

function showLogin() {
    loginPage.classList.add('open')
}

function hideLogin() {
    loginPage.classList.remove('open')
}


loginPage.addEventListener('click', hideLogin)
login.addEventListener('click', showLogin)

loginContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

