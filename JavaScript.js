let bars = document.querySelector(".bars")

let navBar = document.querySelector(".navhalf")

let crossBar = document.querySelector(".crossbar")

bars.onclick = () =>{
    navBar.style.left = "0px"
}

crossBar.onclick = ()=>{
    navBar.style.left = "-1200px"
}