function checkCreds()
{
    // This is checking the information //
    alert("checking information");
   
    // This checks the name
    var FirstName = document.getElementById("FirstName").value;

    var LastName = document.getElementById("LastName").value;
    
  
    // This checks the password
    var Password = document.getElementById("Password").value;
  
    // This checks your badge number
    var BadgeID = document.getElementById("BadgeID").value;
  
    // This checks if the name and password are correct
    var eventinfo = FirstName + " " + LastName +  " " + Password;
   
    // This is for if all information is correct
    alert(`${FirstName} ${LastName} ${Password} ${BadgeID}`);
    
    // This means your name has to be a certain amount of numbers
    if(FirstName.length > 30 || FirstName.length <2)
{
    // This checks to make sure the name and password meet the criteria
    document.getElementById("loginStatus").innerHTML = "invalid length on Name+Password";

}   
if(LastName.length > 30 || LastName.length <2)
{
    // This checks to make sure the name and password meet the criteria
    document.getElementById("loginStatus").innerHTML = "invalid length on Name+Password";

}  
// This checks how long your password is
else
if (Password >20 || Password <2) 

// This checks to make sure your password is the right amount of letters or numbers
document.getElementById("loginStatus").innerHTML = "invalid number of participants";
   
// This checks to make sure your name is the right amount of letters
   
{
   if(BadgeID.length <=10 || BadgeID.length >=2)
    {
        document.getElementById("loginstatus").innerHTML = BadgeID;
        alert(" congrats - you are logged on");
    }
    
   // This is the second page
   location.href ='uat space program.html';
    }
    

}




