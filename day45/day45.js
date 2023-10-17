class mobile{
    constructor(brand){
        this.mobilebrand = brand;
    }
    print(){
        console.log(`i have ${this.mobilebrand} `);
       
    }
}
let p1 = new mobile('mobile');
p1.print();


class model extends mobile{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
   
    show(){
    console.log(`it is ${this.model}`);
}
}
let pk = new model('13 pro max')
pk.print();


class dog{
    constructor(color, speed){
        this._speed = speed;
        this._color = color;
    }
}
class husky extends dog{
    constructor(color, speed, owner){
        super(color, speed);
        this._owner = owner;
    }
    showinfo(){
    console.log("color:" + this._color + "owner:" + this._owner + "speed:" + this._speed);
}
}

let dog1 = {
    color:" white"
};
let husky1 = {
    owner: " husky "
};
husky._proto_ = dog1;
console.log(husky1.owner +"is a owner of"  + dog1.color+ "husky");
