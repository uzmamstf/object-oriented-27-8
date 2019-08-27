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

function wendingMachine(money , numb) {
    let wendingItem = [
        {
            name: "Lays",
            price: 30
        },
        {
            name: "BP Spacer",
            price: 10
        }, {
            name: "Candy Biscuits",
            price: 30
        }
    ]
    let itemRequested = wendingIte[numb];
    if(money > itemRequested.price){
        return itemRequested;
    }


}