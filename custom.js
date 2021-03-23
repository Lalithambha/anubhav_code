var request;
 
window.onload = function() {​​​​​​​​
var div1 = document.getElementById("Employee") ;
var div2 = document.getElementById("Employer") ;
var div3 = document.getElementById("Contractor") ;
div1.hidden = true ;  
div2.hidden = true ; 
div3.hidden = true ; 
var dropDown = document.getElementById("drop-down") ;
dropDown.addEventListener('change')
 
}​​​​​​​​
function showForm() {​​​​​​​​
var div1 = document.getElementById("Employee") ;
var div2 = document.getElementById("Employer") ;
var div3 = document.getElementById("Contractor") ;
var dropDown = document.getElementById("drop-down") ;

if (dropDown.value === ""){​​​​​​​​
div1.hidden = true ;  
div2.hidden = true ; 
div3.hidden = true ;  
    }​​​​​​​​
 
if (dropDown.value === "Employer"){​​​​​​​​
div1.hidden = true ;  
div2.hidden = false ; 
div3.hidden = true ;  
    }​​​​​​​​
if (dropDown.value === "Employee"){​​​​​​​​
div1.hidden = false ;  
div2.hidden = true ; 
div3.hidden = true ;  
    }​​​​​​​​
if (dropDown.value === "Contractor"){​​​​​​​​
div1.hidden = true ;  
div2.hidden = true ; 
div3.hidden = false ;  
    }​​​​​​​
 
}​​​​​​​​
 /*
function getData() {​​​​​​​​
request = new XMLHttpRequest();
//request.open('GET' , 'http://dummy.restapiexample.com/api/v1/employees',true ) ;
request.setRequestHeader('app-id','6058cebd07cd4d33830513b1');  // authentication 

 
request.onload = function() {​​​​​​​​         // overload the functions 
if( request.status === 200 ){​​​​​​​​
alert(request.responseText);
        }​​​​​​​​
else {​​​​​​​​
alert(request.responseText) ;
        }​​​​​​​​
 
    }​​​​​​​​
request.onprogress = function() {​​​​​​​​
 
    }​​​​​​​​

request.onreadystatechange = function () {​​​​​​​​
console.log("Status of Http request:" + request.readyState);
 
    }​​​​​​​​
 
request.send() ;
//console.log("Sync") ;
//request.onreadystatechange = processData ;
 
}​​​​​​​​  
function postData() {​​​​​​​​
request = new XMLHttpRequest();
//request.open('POST' , 'http://dummy.restapiexample.com/api/v1/create',true ) ;
request.setRequestHeader('app-id','6058cebd07cd4d33830513b1');
request.setRequestHeader('Content-Type','application/json');
var dataObject = '{​​​​​​​​"name":"Anubhav","salary":"90","age":"24"}​​​​​​​​' ; 

 
request.onload = function() {​​​​​​​​
if( request.status === 200 ){​​​​​​​​
alert(request.responseText);
        }​​​​​​​​
else {​​​​​​​​
alert(request.responseText) ;
        }​​​​​​​​
 
    }​​​​​​​​
request.onprogress = function() {​​​​​​​​
 
    }​​​​​​​​

request.onreadystatechange = function () {​​​​​​​​
console.log("Status of Http request:" + request.readyState);
 
    }​​​​​​​​
 
request.send(dataObject) ;
//request.onreadystatechange = processData ;
 
}​​​​​​​​  
function displayData() {​​​​​​​​
// Fill this function Task 1 



 
}​​​​​​​​
/*
function processData() {​​​​​​​​
    if( request.readyState === XMLHttpRequest.DONE){​​​​​​​​
        if( request.status === 200 ){​​​​​​​​
            alert(request.responseText);
        }​​​​​​​​
        else {​​​​​​​​
            alert(request.responseText) ;
        }​​​​​​​​
 
    }​​​​​​​​

 
}​​​​​​​​
*/

