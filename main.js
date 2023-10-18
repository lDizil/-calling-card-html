const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

const menuAbout = document.querySelector("#about");
const menuPortfolio = document.querySelector("#portfolio");




function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}
menuBtn.addEventListener("click", toggleMenuVisibility);


const portfolio_block = document.querySelector('.portfolio__list')


const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioList = document.querySelector(".wrapper");

function toggleportfolioVisibility() {
    portfolioList.classList.toggle("hide");
    portfolio_block.classList.remove("hide")

}
portfolioBtn.addEventListener("click", toggleportfolioVisibility);



const Lab1Btn = document.querySelector(".Lab1__btn");
const Lab1List = document.querySelector(".Lab1__list");

function toggleLab1Visibility() {
    Lab1List.classList.toggle("hide");
}
Lab1Btn.addEventListener("click", toggleLab1Visibility);


const Lab2Btn = document.querySelector(".Lab2__btn");
const Lab2List = document.querySelector(".Lab2__list");

function toggleLab2Visibility() {
    Lab2List.classList.toggle("hide");
}
Lab2Btn.addEventListener("click", toggleLab2Visibility);

const BackBtn = document.querySelector(".Back__btn");
const BackList = document.querySelector(".Back__list");

function toggleBackVisibility() {
    // Back.classList.toggle("hide");
    portfolio_block.classList.add("hide")
    portfolioList.classList.remove("hide")
}
BackBtn.addEventListener("click", toggleBackVisibility);

menuAbout.addEventListener("click", toggleBackVisibility);

menuPortfolio.addEventListener("click", toggleportfolioVisibility);
