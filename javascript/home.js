import navbar from "../components/nav2.js";
document.getElementById("navbar").innerHTML = navbar()

let p=0

const display = (products) =>{
    products.map((product)=>{
      p += 1

      let cardimg = document.createElement("div")
      cardimg.innerHTML = `
          <div id="slider${p}" class="carousel slide" data-bs-ride="carousel">
                              <img src="${product.image}" data-bs-toggle="modal" data-bs-target="#p${p}" class="card-img-top poition-relative" alt="1...">                          
                              <div class="modal fade modal-fullscreen-xxl-down" id="p${p}" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true" data-bs-backdrop="static">
                              <div class="modal-dialog modal-dialog-top ">
                                  <div class="modal-content border-0">
                                      <div class="modal-header border-0">
                                          <button type="button" class="btn-close " data-bs-dismiss="modal"
                                              aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <div class=" row">
                                              <div id="slider${p}" class="carousel slide col-12" data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                  <div class="carousel-item active">
                                                    <img src="${product.image}" class="card-img-top poition-relative" alt="...">
                                                  </div>
                                                  
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#slider${p}" data-bs-slide="prev">
                                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                  <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#slider${p}" data-bs-slide="next">
                                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                  <span class="visually-hidden">Next</span>
                                                </button>
                                              </div>
                                              <div class="col-12">
                                                <p class="card-text text-uppercase fs-5 m-0 fw-bold">${product.title}</p>
                                                <p class="card-text text-uppercase fs-6 text-muted m-0 fw-bold">${product.description}</p>
                                                <div class="d-flex align-items-center">
                                                <p class="card-text text-uppercase fs-14 m-0 fw-bold">${product.rating.rate} <i class="bi bi-star-fill text-success pe-1"></i></p>
                                                <p class="card-text text-uppercase fs-14 m-0 fw-bold">|  ${product.rating.review}</p>
                                                </div>
                                                <div class="d-flex align-item-center">
                                                <p class="card-text  fs-5 text-center text-primary fw-bold m-0">${product.price}</p>
                                                </div>
                                                <p>Best Price: Rs. 863</p>
                                                <ui>
                                                  <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                                                  <li>Coupon code: AVPK100</li>
                                                  <li>Coupon Discount: Rs. 192 off (check cart for final savings)</li>
                                                  <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                                                </ui>
                                                View Eligible Products
                                                Get additional offer
                                                Buy this style and unlock additional ₹50 off on a selected catalogue.
                                                View Products
                                                15% Instant Discount on OneCard Credit Card.
                                                Min Spend ₹3,000. Max Discount Up to ₹1000.
                                                Terms & Condition</p>
                                                <div id="addcrt">
                                                <a href="checkout.html" class="btn btn-outline-primary  fw-semibold col-12 text-uppercase fw-semibold">add to cart</a>
                                                </div>
                                              </div>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                  </div>
          `
        let brand = document.createElement("h3")
        brand.innerHTML = product.brand;
        brand.classList.add('fs-6','text-primary','fw-semibold','text-uppercase')
        let title = document.createElement("h6")
        title.innerHTML = product.title;
        title.classList.add('fw-normal')
        let price = document.createElement("h5")
        price.innerHTML = product.price;
        price.classList.add('fw-normal','fs-5','text-danger')
        let cat = document.createElement("h5")
        cat.innerHTML = product.category;
        cat.classList.add('fw-normal','text-capitalize')
        let btn = document.createElement("button")
        btn.innerHTML = "add to cart";
        btn.classList.add('btn','border','text-white','text-capitalize','bg-primary','border','border-0')
        let p_box = document.createElement("div")
        p_box.setAttribute("class","p-box")
        p_box.classList.add('p-2','bg-white','text-center')
        p_box.append(cardimg,brand,cat,price,title,btn)
        let div = document.createElement("div")
        div.classList.add('col-xl-3','col-lg-3','col-md-6','col-sm-12','col-xs-12','p-2')
        div.append(p_box)
        document.getElementById("output").append(div)
    })
}


const display2 = (products) =>{
    document.getElementById("output").innerHTML = ""
    products.map((product)=>{
      p += 1

      let cardimg = document.createElement("div")
      cardimg.innerHTML = `
          <div id="slider${p}" class="carousel slide" data-bs-ride="carousel">
                              <img src="${product.image}" data-bs-toggle="modal" data-bs-target="#p${p}" class="card-img-top poition-relative" alt="1...">                          
                              <div class="modal fade modal-fullscreen-xxl-down" id="p${p}" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true" data-bs-backdrop="static">
                              <div class="modal-dialog modal-dialog-top ">
                                  <div class="modal-content border-0">
                                      <div class="modal-header border-0">
                                          <button type="button" class="btn-close " data-bs-dismiss="modal"
                                              aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <div class=" row">
                                              <div id="slider${p}" class="carousel slide col-12" data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                  <div class="carousel-item active">
                                                    <img src="${product.image}" class="card-img-top poition-relative" alt="...">
                                                  </div>
                                                  
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#slider${p}" data-bs-slide="prev">
                                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                  <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#slider${p}" data-bs-slide="next">
                                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                  <span class="visually-hidden">Next</span>
                                                </button>
                                              </div>
                                              <div class="col-12">
                                                <p class="card-text text-uppercase fs-5 m-0 fw-bold">${product.title}</p>
                                                <p class="card-text text-uppercase fs-6 text-muted m-0 fw-bold">${product.description}</p>
                                                <div class="d-flex align-items-center">
                                                <p class="card-text text-uppercase fs-14 m-0 fw-bold">${product.rating.rate} <i class="bi bi-star-fill text-success pe-1"></i></p>
                                                <p class="card-text text-uppercase fs-14 m-0 fw-bold">|  ${product.rating.review}</p>
                                                </div>
                                                <div class="d-flex align-item-center">
                                                <p class="card-text  fs-5 text-center text-primary fw-bold m-0">${product.price}</p>
                                                </div>
                                                <p>Best Price: Rs. 863</p>
                                                <ui>
                                                  <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                                                  <li>Coupon code: AVPK100</li>
                                                  <li>Coupon Discount: Rs. 192 off (check cart for final savings)</li>
                                                  <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                                                </ui>
                                                View Eligible Products
                                                Get additional offer
                                                Buy this style and unlock additional ₹50 off on a selected catalogue.
                                                View Products
                                                15% Instant Discount on OneCard Credit Card.
                                                Min Spend ₹3,000. Max Discount Up to ₹1000.
                                                Terms & Condition</p>
                                                <div id="addcrt">
                                                <a href="checkout.html" class="btn btn-outline-primary  fw-semibold col-12 text-uppercase fw-semibold">add to cart</a>
                                                </div>
                                              </div>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                  </div>
          `
        let brand = document.createElement("h3")
        brand.innerHTML = product.brand;
        brand.classList.add('fs-6','text-primary','fw-semibold','text-uppercase')
        let title = document.createElement("h6")
        title.innerHTML = product.title;
        title.classList.add('fw-normal')
        let price = document.createElement("h5")
        price.innerHTML = product.price;
        price.classList.add('fw-normal','fs-5','text-danger')
        let cat = document.createElement("h5")
        cat.innerHTML = product.category;
        cat.classList.add('fw-normal','text-capitalize')
        let btn = document.createElement("button")
        btn.innerHTML = "add to cart";
        btn.classList.add('btn','border','text-white','text-capitalize','bg-primary','border','border-0')
        btn.addEventListener("click", () => {
            if (localStorage.getItem("login")) {
              fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(product)
              })
            }
            else{
              alert("please first login then you can add to cart")
              setTimeout(
                window.location.href="../pages/login.html"
              ,1000)
            }
          })
        let p_box = document.createElement("div")
        p_box.setAttribute("class","p-box")
        p_box.classList.add('p-2','bg-white','text-center')
        p_box.append(cardimg,brand,cat,price,title,btn)
        let div = document.createElement("div")
        div.classList.add('col-xl-3','col-lg-3','col-md-6','col-sm-12','col-xs-12','p-2')
        div.append(p_box)
        document.getElementById("output").append(div)
    })
}

const get = () =>{
    fetch("http://localhost:3000/Home&kitchen")
    .then((res) => res.json())
    .then((data) =>display(data))
}

get();

fetch('http://localhost:3000/Home&kitchen')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("search").addEventListener("keypress", () => {
      let search = document.getElementById("search").value
      let results = data.filter(product =>product.title.toLowerCase().includes(search.toLowerCase())
      );
      if (results.length == 0) {
        document.getElementById("output").innerHTML = "prodcuts not found"
      }
      else {
        display(results)
      }
    })
  })


// category 


const getcat = (products) =>{
    fetch(`http://localhost:3000/Home&kitchen?category=${products}`)
    .then((res) => res.json())
    .then((data) =>{ 
        console.log(data)
        display2(data)})
}

let cat = ["all","kitchenware","home essentials","appliances","solar lights","fitness accessories"];

for(let i = 0; i < cat.length ; i++){
    let category = document.createElement("p");
    category.innerHTML = cat[i];
    category.classList.add("fs-5","text-danger","text-capitalize","py-2","border","border-1","border-danger");
    category.setAttribute("id",cat[i]);
    document.querySelector(".category").append(category)
}

for (let i = 0; i < cat.length; i++) {
    document
        .getElementById(cat[i])
        .addEventListener("click", () => getcat(cat[i]))
  }

  document.getElementById("all").addEventListener("click" , get)
  get();

