
/* let btn = document.querySelector('#btn')

let sidebar = document.querySelector('.sidebar')
let btnToggle = document.querySelector('#btn-toggle'); // Outside icon

function toggleSidebar()
{
    sidebar.classList.toggle('active');
}

btn.onclick = toggleSidebar; 
btnToggle.onclick = toggleSidebar; 
 */
/* document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
});*/
/* document.getElementById('menu-toggle').addEventListener('click', function() {
    const search = document.querySelector('.search');
    const icons = document.querySelector('.navigation .icons');

    search.classList.toggle('menu-active');
    icons.classList.toggle('menu-active');
}); */

 document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.navigation ');
    
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}); 



document.getElementById('btn').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('closed');


});