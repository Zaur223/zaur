const overlay = document.querySelector('.overlay');
const closeWindow = document.querySelector('.close_window');
const contact = document.querySelector('.header_contact');
const burger = document.querySelector('.burger');



document.querySelector('.attention').style.display = 'none';
overlay.style.display = 'none';
closeWindow.style.display = 'none';



const attenopener = function() {
    document.querySelector('.attention').style.display = 'flex';
    overlay.style.display = 'flex';
    closeWindow.style.display = 'flex'; 
}

const closer = function() {
    document.querySelector('.attention').style.display = 'none';
    overlay.style.display = 'none';
    closeWindow.style.display = 'none';

}


closeWindow.addEventListener('click', closer);
overlay.addEventListener('click', closer);
contact.addEventListener('click', attenopener);
burger.addEventListener('click', attenopener)

