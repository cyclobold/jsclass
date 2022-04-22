class Human{
    register(){
        console.log("This is the register inside Human class")
    }
}

class User extends Human{
    
    constructor(name, email){
        super();
        console.log("This constructor was called: ", name, email);
    }

    login(){
        console.log("Logs in the user");
    }
}


const person = new User('james', 'james@email.com');

document.querySelector("#register-form").addEventListener("submit", function(e){
    e.preventDefault();

    const fullname = this.fullname.value.trim();

    const email = this.email.value.trim();

    person.register(fullname, email);


})