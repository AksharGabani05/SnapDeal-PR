const navbar = ()=>{
    return `
    <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container d-flex justify-content-between">
                <a class="navbar-brand" href="../index.html">
                    <img src="../img/sdLatestLogo.svg" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon font-white"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="col-md-6 mx-auto">
                        <form class="d-flex " role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
                            <button class="btn border border-white text-white" type="submit" id"search">Search</button>
                        </form>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="border-end px-3"><a href="../pages/cart.html" class="text-white text-capitalize fs-6 px-2"><i class="bi bi-cart2 fs-4 px-2"></i>cart</a></div>
                        <div class="px-3"><a href="../pages/signup.html" class="text-white text-capitalize fs-6"> <i class="bi bi-person-circle fs-4 px-2"> </i>sing-up</i></a></div>  
                    </div>
                </div>
            </div>
        </nav>
    `
}

export default navbar