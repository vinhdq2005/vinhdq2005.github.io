

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
	new Splice( '#image-slider' ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		'cover'      : true,
		'heightRatio': 0.5,
	} ).mount();

    new Splide("#product-container", {
        perPage: 5,
        rewind: true,
      }).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide("#product-container", {
        perPage: 5,
        rewind: true,
      }).mount();
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

// cart

let openCarticon = document.querySelector(".cart-icon")
let closeCarticon = document.querySelector(".close-cart")
let cartNavbar = document.querySelector(".cart")
let cartContainer = document.querySelector(".cart-container")

function showCart() {
    cartNavbar.classList.add('open-cart')
}
function closeCart() {
    cartNavbar.classList.remove('open-cart')
}

openCarticon.addEventListener('click', showCart)
closeCarticon.addEventListener('click', closeCart)
cartContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// product content
let dataPopularfood = [
    {
        background: "https://product.hstatic.net/1000303672/product/191008_kho_ga_cay_la_chanh__125g__hu__mau_nap_nhom_-_110625_-_01_f207b52b2a97453d91caedeafe67c0ed.jpg",
        name: "Khô gà",
        price: "49.999đ",
        rate: "4.9"
    },
    {
        background: "https://salt.tikicdn.com/ts/product/3a/80/f2/307f31b665dd14ad84b837fe4c5c19a0.jpg",
        name: "Khô bò",
        price: "49.999đ",
        rate: "4.0"
    },
    {
        background: "https://vnn-imgs-f.vgcloud.vn/2021/04/28/14/che-buoi-2.jpg",
        name: "Chè bưởi",
        price: "19.999đ",
        rate: "4.5"
    },
    {
        background: "https://i.ytimg.com/vi/rGvRHF8h-wM/maxresdefault.jpg",
        name: "Chè sầu",
        price: "49.999đ",
        rate: "4.5"
    },
    {
        background: "https://cdn.tgdd.vn/Files/2020/03/23/1243844/lam-nem-chua-ran-chien-xu-chuan-vi-ha-noi-tai-nha-202003230644441198.jpg",
        name: "Nem chua rán",
        price: "5.000đ/cái",
        rate: "4.0"
    },
    {
        background: "https://vtv1.mediacdn.vn/zoom/550_339/2019/11/8/1512474034-837-bua-sang-chac-da-voi-com-chien-ca-hoi-mem-toi-bo-duong-mg8357-1512473926-width660height440-1573183256236739605317.jpg",
        name: "Cơm rang",
        price: "49.999đ",
        rate: "5.0"
    },
    {
        background: "https://ameovat.com/wp-content/uploads/2016/05/15.jpg",
        name: "Phở gà",
        price: "30.000đ",
        rate: "4.5"
    },
    {
        background: "https://maythucphamtoanphat.vn/uploads/images/nau-pho-ngon-bang-noi-nau-pho.jpg",
        name: "Phở bò",
        price: "30.000đ",
        rate: "4.5"
    },
    {
        background: "https://cokhiviendong.com/wp-content/uploads/2019/01/kinnh-nghi%E1%BB%87m-m%E1%BB%9F-qu%C3%A1n-g%C3%A0-r%C3%A1n-7.jpg",
        name: "Gà rán",
        price: "15.000đ/cái",
        rate: "4.0"
    },
    {
        background: "https://media.vov.vn/sites/default/files/styles/large/public/2020-10/bun_dau_mam_tom_1.jpg",
        name: "Bún đậu",
        price: "30.000đ",
        rate: "4.5"
    }
]

function renderData(data) {
    let cardProduct = document.querySelector("#product-box")
    
    cardProduct.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        
        let html = `<li class="splide__slide"><div>
        <div class="sale-product">
          <div class="image-sale-product" style="background: url('${data[i].background}') bottom center / cover no-repeat ;">
              <div class="product-quickview">
                  <p>Quick View</p>
              </div>
          </div>
          <div class="name">
              <p class="name-product">${data[i].name}</p>
              <p class="rating"><i class="fas fa-star"></i> ${data[i].rate}</p>
          </div>
          <div class="price">
              <p class="price-product">${data[i].price}</p>
              <button class="addtocartbtn">Add to cart</button>
          </div>
      </div>
    </div></li>`
        cardProduct.innerHTML += html
        
    }
}

renderData(dataPopularfood)


// view more

let viewMore = document.querySelector(".viewmore")
let openViewmore = document.querySelector(".product-quickview")
let closeViewmore = document.querySelector(".close-icon")
let viewMorecontainer = document.querySelector(".viewmore-container")

function showMore() {
    viewMore.classList.add('viewmore-open')
}

function closeMore() {
    viewMore.classList.remove('viewmore-open')
}

openViewmore.addEventListener('click', showMore)
closeViewmore.addEventListener('click', closeMore)
viewMore.addEventListener('click', closeMore)

viewMorecontainer.addEventListener('click', function(event) {
    event.stopPropagation()
})


// cart number (css input number)
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


