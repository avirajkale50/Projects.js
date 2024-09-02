const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')

buttons.forEach((button)=>{
    // console.log(button)
    button.addEventListener('click',(e)=>{
        //returning the pointer event
        console.log(e)
        //return the element of the event
        console.log(e.target)
        //this way we can also apply the fuctionality of changing color of the background
        //the way i applied it

        // body.style.backgroundColor = e.target.id;


        //the chai or code applied it
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
            h1.style.color = e.target.id;
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
            h1.style.color = "#000";
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
            h1.style.color = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
            h1.style.color = e.target.id;
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
            h1.style.color = e.target.id;
        }
        

    })
})