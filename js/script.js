
const clockSpan = document.getElementById("time")
const dateSpan = document.getElementById("date")

showTime = () =>{
    const today = new Date()
    const hours = today.getHours()
    const minutes = today.getMinutes()

    const day = today.getDate()
    const month = today.getMonth() + 1

    clockSpan.innerHTML = `${hours}:${minutes}`
    dateSpan.innerHTML = `${day}.${month}`
}
setInterval(showTime, 1000)

const photo1 = document.querySelector('.central-photo1')
const photo2 = document.querySelector('.central-photo2')
const photo3 = document.querySelector('.central-photo3')

const photoArray = [photo1, photo2, photo3]

const selectedPhoto = photoArray[Math.floor(Math.random() * photoArray.length)];

selectedPhoto.style.visibility = "visible";




