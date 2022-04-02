let getData = async () => {
    let drawData = await fetch(
        'https://vnexpress.net/microservice/home'
    )
    let data1 = await drawData.json()
    let data = data1.data

    let news = data["1001002"].data
    let news_trending = data["1001005"].data
    let news_sport = data["1002565"].data
    let news_education = data["1003497"].data
    let navSport = document.querySelector(".sport")
    let navEdu = document.querySelector(".education")

    console.log(news);
    renderData(news)
    trendingData(news_trending)

    navSport.addEventListener("click", function () {
      renderData(news_sport)
      trendingData(news_sport)
    })
    navEdu.addEventListener("click", function () {
      renderData(news_education)
      trendingData(news_education)
    })
}

let renderData = (data) => {
    let homePage_left = document.querySelector(".content-left")
    let homePage_right = document.querySelector(".content-right")
    homePage_left.innerHTML = ""
    homePage_right.innerHTML = ""

    let html = `<div class="card" style="width: 35rem;" onclick="location.href = '${data[0].share_url}'">
    <img src="${data[0].thumbnail_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[0].title}</h5>
      <p class="card-text">${data[0].lead}</p>
    </div>
  </div>`

  homePage_left.innerHTML += html

  for (let i = 1; i < 4; i++) {
      let html = `<div class="card mb-3" style="max-width: 540px;" onclick="location.href = '${data[i].share_url}'">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${data[i].thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text"><small class="text-muted">${data[i].lead}</small></p>
          </div>
        </div>
      </div>
    </div>`

    homePage_right.innerHTML += html
  }

  
}

let trendingData = (data) => {
    let trendingPage = document.querySelector(".items")
    trendingPage.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        let html = `<div class="card mb-3" style="max-width: 540px;" onclick="location.href = '${data[i].share_url}'">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data[i].thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text"><small class="text-muted">${data[i].lead}</small></p>
            </div>
          </div>
        </div>
      </div>`

      trendingPage.innerHTML += html
    }

    
}
getData()

// let changePage = () => {
//     window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript")
// }