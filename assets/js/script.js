const form = document.getElementById('form')
const name = document.getElementById('name')
const email =document.getElementById('email')
const subject =document.getElementById('subject')
const message =document.getElementById('message')
const name_error = document.getElementById('name1_error')
const email_error = document.getElementById('email_error')
const subject_error = document.getElementById('subject_error')
const message_error = document.getElementById('message_error')

var email_check =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
form.addEventListener('submit', (e)=>{
    
    if(name.value==="" || name.value==null || name.value<=0 || name.value>0){
        e.preventDefault();
        name_error.innerHTML="name required";
    }
    else{
        name_error.innerHTML=" ";
    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="valid email is required";
    }
    else{
        email_error.innerHTML=" ";
    }
    if(subject.value==='' || subject.value ==null )
        {
        e.preventDefault();
        subject_error.innerHTML="subject is required";
        }
    else{
        subject_error.innerHTML=" ";
        }
    if(message.value==='' || message.value ==null )
    {
        e.preventDefault();
        message_error.innerHTML="message is required";
    }
    else{
        message_error.innerHTML=" ";
    }


   
})


