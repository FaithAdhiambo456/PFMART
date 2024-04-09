export class User{
    constructor(
        public fname:string,
        public lname: string,
        public email: string,
        public rlocation:string,                 //these are the properties we're going to have every instance of a user.
        public phone: number,
        public dob: string,
        public password: string
    ){

    }
}