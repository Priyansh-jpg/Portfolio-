class student{
    constructor(name,age,email){
    this.name=name;
    this.age=age;
    this.email=email;
     }
     getpersoninfo(){
        return
       ` name:${this.name}
        age:${this.age}
        email:${this.email}`
     }


}
module.exports = student;
