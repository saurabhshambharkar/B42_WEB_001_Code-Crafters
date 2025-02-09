let currenHerotIndex = 0;
let currenHeroSaletIndex = 0;
let currentGiftProductsIndex=0
let festiveGiftProductsIndex=0
let topGiftProductsIndex=0
function changeHeroSlide(direction) {
    const slides = document.querySelector('.hero-slides');
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    currenHerotIndex += direction;
    if (currenHerotIndex < 0){
        currenHerotIndex = totalSlides - 1;
    }
    else if (currenHerotIndex >= totalSlides){
        currenHerotIndex = 0;
    }

    slides.style.transform = `translateX(-${currenHerotIndex * 100}%)`;
}
function changeHeroSaleSlide(direction) {
    const slides = document.querySelector('.hero-sale-slides');
    const totalSlides = document.querySelectorAll('.hero-sale-slide').length;
    currenHeroSaletIndex += direction;
    if (currenHeroSaletIndex < 0){
        currenHeroSaletIndex = totalSlides - 1;
    }
    else if (currenHeroSaletIndex >= totalSlides){
        currenHeroSaletIndex = 0;
    }

    slides.style.transform = `translateX(-${currenHeroSaletIndex * 100}%)`;
}
function changeBestGiftSlide(direction){
    const slides = document.querySelector('.best-selling-gifts-slides');
    const totalSlides = 2;
    currentGiftProductsIndex += direction;
    if (currentGiftProductsIndex < 0){
        currentGiftProductsIndex = totalSlides - 1;
    }
    else if (currentGiftProductsIndex >= totalSlides){
        currentGiftProductsIndex = 0;
    }

    slides.style.transform = `translateX(-${currentGiftProductsIndex * 100}%)`
}
function changeFestivePartySlide(direction){
    const slides = document.querySelector('.festive-party-slides ');
    const totalSlides = 2;
    festiveGiftProductsIndex += direction;
    if (festiveGiftProductsIndex < 0){
        festiveGiftProductsIndex = totalSlides - 1;
    }
    else if (festiveGiftProductsIndex >= totalSlides){
        festiveGiftProductsIndex = 0;
    }

    slides.style.transform = `translateX(-${festiveGiftProductsIndex * 100}%)`
}
function changeTopGiftSlide(direction){
    const slides = document.querySelector('.top-gift-sets');
    const totalSlides = 2;
    topGiftProductsIndex += direction;
    if (topGiftProductsIndex < 0){
        topGiftProductsIndex = totalSlides - 1;
    }
    else if (topGiftProductsIndex >= totalSlides){
        topGiftProductsIndex = 0;
    }

    slides.style.transform = `translateX(-${topGiftProductsIndex * 100}%)`
}
let hamburger=document.querySelector(".hamburger")
let cross=document.querySelector(".side-menu-cross")
let sideMenu=document.querySelector(".side-menu")
hamburger.addEventListener("click",()=>{
    CloseAndOpenSideMenu(true)
})
cross.addEventListener("click",()=>{
    CloseAndOpenSideMenu(false)
})
// side-menu Functionality
function CloseAndOpenSideMenu(bool){
   if(bool) sideMenu.classList.remove("hidden")
   else sideMenu.classList.add("hidden")
}

let typed1= new Typed('.dynamic-text',{
    strings:[
        "Exclusive Offers on Shoes",
        "Shop the Latest Trends",
        "Your Perfect Outfit Awaits",
        "Style Meets Comfort",
        "Discover Your Next Favorite Bag",
        "Luxury Fashion, Affordable Prices",
        "Gifts for Every Occasion",
        "Shop Now, Pay Later",
        "Trending Electronics & Gadgets",
        "Find Your Dream Dress Today",
        "Personalized Jewelry Just for You",
        "Essential Items for Home & Office",
        "Must-Have Accessories",
        "Upgrade Your Wardrobe",
        "Discover the Future of Tech",
        "Hot Deals on Winter Apparel",
        "Unleash Your Inner Fashionista",
        "Beauty and Skincare Essentials",
        "Gifts for Her",
        "Exclusive Sale – Limited Time Only",
        "Shop Sustainable Fashion",
        "Shop by Category – Find What You Love",
        "New Arrivals – Be the First to See",
        "Timeless Watches for Every Style",
        "The Perfect Pair of Shoes is Waiting",
        "Upgrade Your Home Decor",
        "Best-Selling Products",
        "Affordable Luxury",
        "Top Picks for Tech Enthusiasts",
        "Shop Eco-Friendly Products",
        "Revolutionary Gadgets for Everyday Life",
        "Top-Quality Essentials for Busy Lives",
        "Fashion for Every Season",
        "Express Your Style with Customizable Products",
        "Shop with Confidence – Easy Returns",
        "The Ultimate Shopping Experience"
      ],
    typeSpeed:10,
    backSpeed:10,
    cursorChar:"",
    loop:true
})