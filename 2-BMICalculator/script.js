//Project 2
/*
1.In this project we are dealing with the form and understanding how to fetch value form it and also how to inject value in the html
2.first fetch the value from form
3.prevent its defalut behaviour so it not send data by get or post
4.fetch the value
5.handle some exception
6.calculate bmi modify the html
*/

const form = document.querySelector('form');
//event listener is --submit
form.addEventListener('submit',function(e){
    e.preventDefault();//preventing default behaviour

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if(height === "" || isNaN(height) || height < 0){
        result.innerHTML = "Enter the valid value of height";
    }else if(height === "" || isNaN(height) || height < 0){
        result.innerHTML = "Enter the valid value of height";
    }else{
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `Put some weight buddy , your BMI is : ${bmi}`;
        }else if(bmi<24.9){
            result.innerHTML = `Great ratio buddy,your BMI is : ${bmi}`;
        }else{
            result.innerHTML = `Let's find a gym for you , your BMI is : ${bmi}`;
        }
        
    }
})