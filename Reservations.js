class Reservations {
    constructor(name ,phone,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;

    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail()
    {
        return this.email;
    }
    getphone()
    {
        return this.phone;
    }
}
module.exports = Reservations;