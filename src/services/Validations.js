export default class Validations{
    static checkName(username){
        if (username == "") {
            return false;
          }
          return true;
    }
    static minLength(password, minLength){
        if(password.length < minLength){
            return false;
        }
        return true;
    }    
    static checkPassword(confirmpassword,password){
        if(confirmpassword != password){
            return false;
        }
        return true;
    }
}