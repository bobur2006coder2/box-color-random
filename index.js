
function myfunc() {
    let random =()=>{
        let r=Math.random()*256
        let g=Math.random()*256
        let b=Math.random()*256
        return `rgb(${r},${g},${b})`
    }
    let box =document.querySelectorAll(".box")
   
    box.forEach((elem)=>{
        elem.addEventListener("mouseover",()=>{
            elem.style.backgroundColor=random();

        }

        )
        elem.addEventListener("mouseout",()=>{
            elem.style.backgroundColor=" rgb(148, 124, 124)";

        }
        
        )
    })
}

myfunc()

