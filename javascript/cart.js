import navbar from "../components/nav2.js";
document.getElementById("navbar").innerHTML = navbar();

let p=0

const ui = (data) => {
  data.map((prodcut) => {
    p += 1

    let cardimg = document.createElement("div")
    cardimg.innerHTML = `
        <div id="slider${p}" class="carousel slide" data-bs-ride="carousel">
                            <img src="${prodcut.image}" data-bs-toggle="modal" data-bs-target="#p${p}" class="card-img-top poition-relative" alt="1...">                          
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

    let title = document.createElement("p")
    title.innerHTML = prodcut.title
    title.classList.add("fw-semibold", "text-uppercase", "m-0")
    let price = document.createElement("p")
    price.innerHTML = prodcut.price
    price.classList.add("text-primary", "fs-5", "fw-semibold", "d-inline")
    let btn1 = document.createElement("button")
    btn1.innerHTML = "buy now"
    btn1.classList.add("d-block", "btn", "btn-outline-primary", "fw-semibold", "text-uppercase")
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
    div2.append(cardimg, div, div3, div4)
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