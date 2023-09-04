import navbar from "../components/nav2.js";
document.getElementById("navbar").innerHTML = navbar();


const ui = (data) => {
  data.map((prodcut) => {
   let img=document.createElement("img")
   img.src=prodcut.image

    let title = document.createElement("p")
    title.innerHTML = prodcut.title
    title.classList.add("fw-semibold", "text-uppercase", "m-0")
    let price = document.createElement("p")
    price.innerHTML = prodcut.price
    price.classList.add("text-primary", "fs-5", "fw-semibold", "d-inline")
    let btn1 = document.createElement("button")
    btn1.innerHTML = "buy now"
    btn1.classList.add("d-block", "btn", "btn-outline-primary", "fw-semibold", "text-uppercase")
    btn1.addEventListener("click",()=>{
      alert("successfully purchased")
    })
    let btn2 = document.createElement("button")
    btn2.innerHTML = "Remove"
    btn2.classList.add("d-block", "btn", "btn-outline-primary", "fw-semibold", "text-uppercase", "mt-3")
    let div = document.createElement("div")
    btn2.addEventListener("click", () => {
      fetch(`http://localhost:3000/cart/${prodcut.id}`, {
        method: "DELETE"
      })
    })
    div.append(title)
    div.classList.add("col-3", "p-4")
    let div3 = document.createElement("div")
    div3.append(price)
    div3.classList.add("col-2", "p-4")
    let div4 = document.createElement("div")
    div4.append(btn1, btn2)
    div4.classList.add("col-3", "p-4")
    let div2 = document.createElement("div")
    div2.append(img, div, div3, div4)
    div2.classList.add("col-12", "row", "shadow", "p-0", "my-3")
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

fetch('http://localhost:3000/cart')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("search").addEventListener("keypress", () => {
      let search = document.getElementById("search").value
      let results = data.filter(product =>product.title.toLowerCase().includes(search.toLowerCase())
      );
      if (results.length == 0) {
        document.getElementById("cart").innerHTML = "prodcuts not found"
      }
      else {
        ui(results)
      }
    })
  })