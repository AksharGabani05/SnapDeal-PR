import navbar from "../components/nav2.js";
document.getElementById("navbar").innerHTML = navbar();


const ui = (data) => {
    data.map((prodcut) => {
     
        let img = document.createElement("img")
        img.src = prodcut.image
        img.classList.add("col-3","p-2",'img-fluid')
        let title = document.createElement("p")
        title.innerHTML = prodcut.title
        title.classList.add("fs-4","fw-semibold","text-uppercase","m-0")
        let price = document.createElement("p")
        price.innerHTML = prodcut.price
        price.classList.add("text-primary","fs-5","fw-semibold","d-inline")
        let btn = document.createElement("button")
        btn.innerHTML = "buy now"
        btn.classList.add("d-block","btn","btn-outline-primary","fw-semibold","text-uppercase","col-3")
        let div = document.createElement("div")
        div.append(title, price, btn)
        div.classList.add("col-9","p-4")
        let div2 = document.createElement("div")
        div2.append(img,div)
        div2.classList.add("col-12","row","shadow","p-0","my-3")
        document.getElementById("cart").append(div2)
      }
    )
  };
  
  let get = async () => {
    let res = await fetch("http://localhost:3000/cart");
    let data = await res.json();
    ui(data);
    console.log(data)
  };
  
  get();