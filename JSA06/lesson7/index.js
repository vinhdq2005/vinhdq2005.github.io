let weatherForm = document.getElementById('weather-form')

weatherForm.onsubmit = (e) => {
    e.preventDefault()
    let location = weatherForm.location.value

    console.log(location);
}