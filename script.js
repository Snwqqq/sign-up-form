const img = document.querySelector('.left-img');
const select = document.querySelector('select');

function changeImg(){
    let numb = Math.round(Math.random()*2);

    if(numb!==0)
        {
    if(select.value==='orca'){
        img.src = `./pictures/orca${numb}.jpeg`;
    } 
    if(select.value==='bluewhale'){
        img.src=`./pictures/bluewhale${numb}.jpeg`;
    }
    if(select.value==='spermwhale'){
        img.src=`./pictures/spermwhale${numb}.jpeg`;
    }
       }
    else{
        if(select.value==='orca'){
            img.src = `./pictures/orca.jpeg`;
        } 
        if(select.value==='bluewhale'){
            img.src='./pictures/bluewhale.jpeg';
        }
        if(select.value==='spermwhale'){
            img.src='./pictures/spermwhale2.jpeg'
        }  
    }
}

changeImg();

document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Now you are whaling!'); // Show alert message
    location.reload();
});


select.addEventListener('input',()=>{
changeImg();
})  

