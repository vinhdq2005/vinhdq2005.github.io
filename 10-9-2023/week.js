let form_inp_num = document.getElementById('form-date')
form_inp_num.onsubmit = (e) => {
    e.preventDefault()
    currentDate = new Date();
    startWeek = new Date(currentDate.getFullYear(), 0, 1);
    endWeek = new Date(currentDate.getFullYear(), 0, 1);
    let inp = form_inp_num.inpNum.value
    var days = inp*7
    startWeek.setDate(startWeek.getDate() + days - 6)
    endWeek.setDate(endWeek.getDate() + days)

    let result_start = document.getElementById("start")
    let result_end = document.getElementById("end")

    startDate = startWeek.getDate()
    startMonth = startWeek.getMonth() + 1
    startYear = startWeek.getFullYear()

    endDate = endWeek.getDate()
    endMonth = endWeek.getMonth() + 1
    endYear = endWeek.getFullYear()

    result_start.innerHTML = [startDate, startMonth, startYear].join('/')
    result_end.innerHTML = [endDate, endMonth, endYear].join('/')
}


