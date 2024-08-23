
// object method

const ex ={
    name:"aminul",
    f1: function show(){
         return this.name.toUpperCase();
    }
}

document.write(ex.f1());

