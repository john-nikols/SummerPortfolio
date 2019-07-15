let myDog = {
    coatType: 'fluffy', 
    breed: 'Husky',
    color: 'white',
    size: 'medium',
    bark: function bark() {
        console.log('Woof...');
    },
    describeYourself: function describeYourself(){
        console.log("Hello, I am a " + this.breed);
    }

}


console.log(myDog.coatType);
myDog.bark();
console.log(myDog);
