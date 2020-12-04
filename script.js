const clockSpan = document.getElementById("time")
const dateSpan = document.getElementById("date")

showTime = () =>{
    const today = new Date()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const secounds = today.getSeconds()

    const day = today.getDate()
    const month = today.getMonth() + 1

    clockSpan.innerHTML = `${hours}/${minutes}    `
    dateSpan.innerHTML = `${day}.${month}`
}
setInterval(showTime, 1000)



