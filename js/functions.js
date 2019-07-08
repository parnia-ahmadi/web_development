var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

function showBulb() 
{
    document.getElementById('myImage').style.display='block';
}
function hideBulb()
{
    document.getElementById('myImage').style.display='none';
}

function func()
{
    person.firstName="ali";
    person.lastName="hassani";
    document.getElementById('p1').innerHTML = person.fullName();

    // if(5 === "5") {
    //     document.getElementById('p1').innerHTML = 1;
    // }
    // else {
    //     document.getElementById('p1').innerHTML = 2;
    // }
    
    // document.getElementById('p1').style="background-color:green;";
    // // document.write("helllllllllllllllo");
    // window.alert("hello")
    // console.log("helllooo");
}