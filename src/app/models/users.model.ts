export class Users {
    public email: string;
    public password: string;
    public firstname: string;
    public lastname: string;
    public birthday: string;
    public gender: string;

    constructor(email: string, password: string, firstname: string, lastname: string, birthday: string, gender: string){
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.gender = gender;
    }
}