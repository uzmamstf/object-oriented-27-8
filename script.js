// let person={
//     name: "uzma",
//     city: "karachi",
//     eat : function(meal){
//         console.log(meal);
//     },
//     greet: function(){
//         console.log("Hi " + this.name) 
//     }

// }




// function constructHuman(humanName, humanAge, humanGender, hobby ) {
//     return {
//         "name": humanName,
//         "age": humanAge,
//         "gender": humanGender,
//         hobby: function(){
//             console.log(greet)
//         }
//     }

// }


// function car(modelNo, color, noPlate, manufacturedDate, registrationNo, vehicleType) {
//     let carObj = {
//         "name": modelNo,
//         "color": color,
//         "plateNumber": noPlate,
//         "manufacturingDate": manufacturedDate,
//         "GR": registrationNo,
//         "type": vehicleType,
//         "speciality": ["More reliable", "High speed efficiency", "High capacity"]
//     }

//     return carObj;
// }
// let box = car();

// function wendingMachine(money , numb) {
//     let wendingItem = [
//         {
//             name: "Lays",
//             price: 30
//         },
//         {
//             name: "BP Spacer",
//             price: 10
//         }, {
//             name: "Candy Biscuits",
//             price: 30
//         }
//     ]
//     let itemRequested = wendingIte[numb];
//     if(money > itemRequested.price){
//         return itemRequested;
//     }


// }
// function juiceCompany(juiceName , juicePrice , juiceFlavor){
//     return{
//         name: juiceName,
//         price : juicePrice,
//         flavor : juiceFlavor,
//         benefits : function(){
//             console.log(`${this.name} gives instant energy`);
//         }
//     }
    

// }
// function computersCompany(computerName , computerPrice ,systemOS){
//     return{
//         name: computerName 
//         price : computerPrice 
//        system : ,systemOS
//         benefits : function(){
//             console.log(`${this.name} computer is amazing`);
//         }
//     }
    

// }
//  let catchBox = computersCompany();


// 31-8-2019 ES6
// no need to remember .. still old version + factory

// constructor
function IdCard(stdName,stdGender,stdAge , benefits){
    this.name = stdName;
    this.gender = stdGender;
    this.age = stdAge;
    
}
// no differnce in use..b/c of less space occupied by this
IdCard.prototype.benefits = function(){
                console.log(`${this.name} computer is amazing`);
           };