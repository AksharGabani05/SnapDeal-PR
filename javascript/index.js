import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar();

let p = ``;

const display = (pr) =>{
    pr.map((product) =>{
        p +=`
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div class="porduct bg-white rounded-2 p-3">
                        <img src=${product.image} alt="" class="product-img">
                        <span class="p-name">${product.title}</span>
                        <div class="d-flex justify-content-between py-2">
                            <div>
                                <div class="icons d-flex py-1">
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star bg border-0"></i>
                                </div>
                                <h5 class="text-uppercase text-secondary fw-semibold p-price">rs ${product.price}</h5>
                            </div>
                            <div>
                                <button class="btn border-1 border-dark text btn-secondary px-3 py-2 text-capitalize fs-6">buy
                                    now</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })
    document.getElementById("result").innerHTML = p;
    
}


fetch("http://localhost:3000/trending")
    .then((res) => res.json())
    .then((data) => display(data))