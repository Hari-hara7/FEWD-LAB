document.addEventListener('DOMContentLoaded',()=>{const form=document.getElementById('myForm');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const username=document.getElementById('username');
    
    const emailFeedback=document.getElementById('emailFeedback');
    const passwordFeedback=document.getElementById('passwordFeedback');
    const usernameFeedback=document.getElementById('usernameFeedback');
    
    email.addEventListener('input',()=>{
        if(email.validity.valid){
            emailFeedback.textContent='valid email!';
            emailFeedback.className='valid';
        } else {
            emailFeedback.textContent='please enter a valid email address';
            emailFeedback.className='error';
        }
    });
    
    password.addEventListener('input',()=>{
        if(password.value.length>=8){
            passwordFeedback.textContent='password is strong!';
            passwordFeedback.className='valid';
        } else {
            passwordFeedback.textContent='password must be atleast 8 charactrs long';
            passwordFeedback.className='error';
        }
    });
    
    
    username.addEventListener('input',()=>{
        if(username.value.length>=3){
            usernameFeedback.textContent='username looks great!';
            usernameFeedback.className='valid';
        } else {
            usernameFeedback.textContent='username must be atleast 3 charactrs long';
            usernameFeedback.className='error';
        }
    });
    
    form.addEventListener('submit',(Event)=>{
        if(!email.validity.valid||password.value.length<8||username.value.length<3) {
            Event.preventDefault();
                alert('please fill out the form corectly befor submitting')
        }
    });
    });