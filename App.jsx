import React from 'react';

const Fun=()=> {
   var x = document.getElementById("navbar");
   if (x.className === "navbar") {
     x.className += " responsive";
   } else {
     x.className = "navbar";
   }
 }
const Submit=()=> {
   
   document.getElementById("form").submit();
   alert("Form sucessfully submitted")
}
const Reset=()=> {document.getElementById("form").reset();alert("Form succesfully reset");}
const App=()=>{

   return (
      <>     
<div class="navbar" id="navbar">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onClick={Fun}>
    <i class="fa fa-bars"></i>
  </a>
</div>
<div class="container">
		<form action="#" id="form" >
        <h2>LOGIN FORM </h2>
			
            <div class="input">
            <label for="name" >Enter your name:</label>
			<input type="text"  id="name" placeholder="Name" required />
            </div>
            <div class="input">
            <label for="dob">Enter your date of birth:</label>
            <input type="date"id="dob" placeholder="date-of-birth" required/>
            </div>
            <div class="input">
            <label for ="country">Enter your country:</label>
            <input type="country" id="country" placeholder="Country" required/>
            </div>
            <div class="input">
            <label for ="email">Enter your email:</label>
			<input type="email" id="email" placeholder="Email" required/>
            </div>
            <div class="input">
            <label for ="phone">Enter your phone number:</label>
            <input type="number" id="phone" placeholder="phone number" required/>
            </div>
            <div class="input">
            <label for ="password">Enter your password:</label>
			<input type="password"  id="password" placeholder="Password" required/>
            </div>
            <div id="button">
            <button onClick={Submit}>submit</button>
            <button onClick={Reset}>reset</button>
            </div>
			
		</form>
	</div>
	
	

      </>
   )
}
export default App;