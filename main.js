const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

const menuAbout = document.querySelector("#about");
const menuPortfolio = document.querySelector("#portfolio");

const Lab2Btn = document.querySelector(".Lab2__btn");
const Lab2List = document.querySelector(".Lab2__list");


const Lab1Btn = document.querySelector(".Lab1__btn");
const Lab1List = document.querySelector(".Lab1__list");


const portfolio_block = document.querySelector('.portfolio__list')
const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioList = document.querySelector(".wrapper");


const BackBtn = document.querySelector(".Back__btn");
const BackList = document.querySelector(".Back__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}
menuBtn.addEventListener("click", toggleMenuVisibility);

function toggleportfolioVisibility() {
    portfolioList.classList.add("hide");
    portfolio_block.classList.remove("hide")

}
portfolioBtn.addEventListener("click", toggleportfolioVisibility);



function toggleLab1Visibility(item) {
    item.classList.toggle("hide");
}
Lab1Btn.addEventListener("click", function() {
    toggleLab1Visibility(Lab1List)
});

Lab2Btn.addEventListener("click", function() {
    toggleLab1Visibility(Lab2List)
});



function toggleBackVisibility() {
    portfolio_block.classList.add("hide")
    portfolioList.classList.remove("hide")
}
BackBtn.addEventListener("click", toggleBackVisibility);

menuAbout.addEventListener("click", toggleBackVisibility);

menuPortfolio.addEventListener("click", toggleportfolioVisibility);
