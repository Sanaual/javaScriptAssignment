function feetToMile(feet){
    if(feet < 0){
        var mile = "Invalid Input";
        return mile;
    }
    else{
        var mile = feet/5280;
        return mile;
    }

}

// this function is for wood calculator
function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        return "Invalid Input"
    }
    else{
        var woodForChair = chair*1;
        var woodForTable = table*3;
        var woodForBed = bed * 5;
        var totalWood = (woodForChair + woodForTable + woodForBed);
        return totalWood;
    }
}

// this is function for Brick Calculation
function brickCalculator(floor){
   var floor10 = 10*15*1000;
    var floor20 = 10*12*1000;

    if(floor < 0){
        return "Invalid Input"
    }

    else if(floor > 0 && floor <= 10){
        return floor * 15 * 1000;
    }
    else if(floor > 10 && floor <= 20 ){
    
        var remainder20 = floor % 10;
        var totalBrick20 = (remainder20 * 12 * 1000) + floor10;
        return totalBrick20;
    }
    else if(floor >= 21){
        var floor30 = floor10 + floor20;
        var remainder30 = floor % 20;
        var totalBrick30 = (remainder30 * 10 * 1000) + floor30;
        return totalBrick30;
    }

}

// this function is for tiny friend
function tinyFriend(name){
    var minName = name[0].length;

    for(var i = 0; i <name.length; i++){
        var element = name[i]
        if(element.length <= minName){
        
            var tinyFriendName = element;
        }
        
    }
    return tinyFriendName;
}

// feetToMile 
var roadMile = feetToMile(15000);
console.log(roadMile);

// wood calculator 
var furniture = woodCalculator(5, 3, 2);
console.log(furniture);

//Brick Calculator
var brick = brickCalculator(30);
console.log(brick);

//tiny friend
var friendsName = ['apel', 'komola', 'Anarosh', 'Ana', 'Jambura', 'Malta', 'Piera', 'Dalim']
var tiny = tinyFriend(friendsName);
console.log(tiny);