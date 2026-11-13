
const today_date = document.getElementById("today_date");
const user_dob = document.getElementById("user_dob");
const result_age = document.getElementById("result_age");
const submit = document.getElementById("sub");


 function date_now(){

   const  now = new Date();
   const day = now.getDate().toString().padStart(2, 0)
   const month = (now.getMonth()+1).toString().padStart(2, 0)
   const year = now.getFullYear().toString()

     const today_date = `${day}/ ${month}/ ${year}`
     return(today_date)
 

}



today_date.textContent = ` Today's Date is ${date_now()}`



 function calcuate_age(){
    const user_dob = document.getElementById("user_dob");
    const birth = new Date(user_dob.value);
    const today_date = new Date ();

    let age = today_date.getFullYear() - birth.getFullYear(); 
   
   const monthDiff = today_date.getMonth() - birth.getMonth();
    
   if (monthDiff < 0 || (monthDiff === 0 && today_date.getDate() < birth.getDate())) {
        age--;
       
    }
        return age
 }


submit.onclick = () =>{

         const  age = calcuate_age(user_dob.value);
         const birth = new Date(user_dob.value);
         const today = new Date();
    
    if (age < 18) {
        result_age.textContent = 'You are below 18!';
    } 

    else if (age >= 18 && 
            birth.getDate()=== today.getDate() &&
            birth.getMonth() === today.getMonth()  ){

        result_age.textContent = 'Happy Birtday and Wel Come to the Venue '

    }
     else  {
        result_age.textContent = "Wel Come to the Venue";
    } 

    
 
   

}




