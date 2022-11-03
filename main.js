const elselect = document.querySelector("#select")
const elbread = document.querySelector("#bread")
let korzinkaarr =[]
let sum = 0
// function sumAdd() {
elselect.addEventListener("click", (e)=>{
    e.preventDefault()
    
    // if(elselect.value.length >0){
    //     console.log("fjh");
        let newobject = {
            name: elselect.value
        }
        korzinkaarr.push(newobject);
    elbread.textContent = elselect.value
    
})
// if (elbread.textContent !== "") {
//     sum++
// }
// }

let elRadius =document.querySelectorAll(".size_one")
let elbreads = document.querySelector("#bread_size")

// function sumAdd2() {
    elRadius.forEach( item =>{
        item.addEventListener("click",function(){
            elbreads.textContent =item.textContent
        })
    })
    let inn = document.querySelectorAll(".hold__input");
    let wrap_log = document.querySelector("#li-wrapper")

    inn.forEach(tag =>{
        tag.addEventListener("click",()=>{
            let li = document.createElement("li")   
        
               li.innerHTML = tag.dataset.extra
                wrap_log.append(li)
        })
    })
    // if ()
// }



const hold = document.querySelectorAll(".hold__inputt")
const elmouse = document.querySelector("#qushimcha__list")
// function sumAdd3() {
    hold.forEach(tag=>{
        tag.addEventListener("click",(e)=>{
             const li = document.createElement("li")
             li.innerHTML = tag.dataset.extra
           elmouse.appendChild(li)
        })
     })  
    //  sum++
// }
const card = document.querySelector(".card")
const btn = document.querySelector("#btn")

const work = document.querySelector(".work")
const work_btn = document.querySelector(".work_btn")
const intro_btn = document.querySelector(".intro_btn")

const wrapper_right =document.querySelector(".wrapper_right")
const intro =document.querySelector(".intro")

btn.addEventListener("click",()=>{
    console.log( );




   if (elbread.textContent !== "" && elbreads.textContent  !== "" && wrap_log.children.length && elmouse.children.length  !== "" &&elmouse.children.length !== "") {
    intro.style.display = "block"
    card.style.display = "none"
   } else {
    work.style.display ="block"
    card.style.display ="none"
   }
})


intro_btn.addEventListener("click",()=>{
    work.style.display = "none"
    card.style.display ="block"
    wrapper_right.style.top ="500px"
})
work_btn.addEventListener("click",()=>{
    intro.style.display = "none"
    card.style.display ="block"
    wrapper_right.style.top ="500px"
})
// function main() {
//     sumAdd()
//     sumAdd2()
//     sumAdd3()
//     console.log(sum);
// }
// // main()

  
