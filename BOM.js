// to go somewhere on the same website
window.location.href = "index.html";



// to move to a new URL
window.location.href = "https://google.com";





// to reload the page 
window.location.reload();





// ye aik tab peeche le jayega
window.history.back();







// ye aik tab aage le jayega
window.history.forward();






// agar direct hee kisi page per peeche jaana ho, Ya aage
window.history.go(-3); //3 pages peeche from the current page
window.history.go(3); //3 pages aage from the current page





// outerHeight

window.outerHeight;







// outerWidth

window.outerWidth;







// Hamari poori screen ki height
window.innerHeight;





// Hamari poori screen ki width
window.innerWidth;





// open(), It works same like the href property

window.open("https://google.com", "Sadaan Khan", "resizable")






// close(), window.close() ke zarye sirf usshi tab ko close kiya jaa sakhta hain, Jisse window.open() ka use karke open kiya gaya ho.

window.open("htpps://www.youtube.com", "Sadaan Khan", "resizable");
window.close(); //   ^
                //   |




// resizeTo() and moveTo()

window.open("https://www.youtube.com", "Youtube", "resizable");
window.resizeTo(500, 300);
window.moveTo(500, 200);






// scroll(), Kisi particular point per smoothly automatically scroll karwaane ke liye 

window.scroll({
 
    top: 100,
    behavior: "smooth" 

})





// print(), Use to print somethig or download something

window.print()