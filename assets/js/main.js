// Modal

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
    // ham hien thi modal mua ve (them class open vao modal )
function showBuyTickets() {
    modal.classList.add('open')

}
// ham an modal mua ve (go bo class open khoi modal)
function hideBuyTickets() {
    modal.classList.remove('open')

}

// lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
// nghe hanh vi click  vao button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// Bars
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
//Đóng mở mobile menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;

    }
}

// Tự động đóng khi chọn phần tử trong  menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


// Slider Animations
var index = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slider-background");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) { index = 1 }
    x[index - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}