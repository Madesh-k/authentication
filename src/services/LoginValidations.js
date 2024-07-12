import Validations from "./Validations";

export default class LoginValidations{
    constructor (username, password,confirmpassword) {
        this.username = username;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }

    checkValidations(){
        
        let errors = [];
         
        //Username  Validations
        if(!Validations.checkName(this.username)){
           errors['username'] = 'Invalid Username';
        }

        //password Validations
        if(!Validations.checkName(this.password,8)){
            errors['password'] = 'Password should atleast contain 8 characters ';
         }

        //confirmation password
        if(!Validations.checkPassword(this.confirmpassword,this.password)){
            errors['confirmpassword'] = 'Password Doesnot Match ';
         }

        return errors;
    }
}