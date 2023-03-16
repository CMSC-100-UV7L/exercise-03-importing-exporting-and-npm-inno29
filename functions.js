import { v4 as uuidv4 } from 'uuid';  //import packages
import validator from 'validator';
import { appendFileSync } from 'fs';

function generateUniqueID(firstName, lastName){    //function for generating id
    let char = firstName[0];                              //extracts first letter of string 
    let id =  char.toLowerCase()+ lastName.toLowerCase() + uuidv4().slice(0,8); //turns the letters to lower case and uses the the uuidv4 function. Slie is used to truncate the aplhanumeric id 
    return id;
}

function addAccount(array){ //function for adding account
    let flag = 0;
    let flag2 = 0;         //flags for validating input parameters
    let flag3 = 0;
    let flag4 = 0;

    if(array.length != 4){
        console.log("ERROR MISSING FIELD");                  //conditionals for validation
        return false;
    }

    for (let i in array){
        if (i.length == 0){
            flag2 = 1;
        }
    }

    if(array[3] < 18){
        flag3 = 1;
    }

    if(!(validator.isEmail(array[2]))){ //usage of validator dunction
        flag4 = 1;
    }
    if(flag == 0 && flag2 == 0 && flag3 == 0 && flag4 ==0){                 //usage of appendFileSync function
        let filename = "users.txt";
        let string = `${array[0]},${array[1]},${array[2]},${array[3]},${generateUniqueID(array[0], array[1])}\n`; //interpolation to print out the needed values
        console.log(string);
        appendFileSync(filename, string);
        return true;
    }
    else{
        console.log("invalid user info");
        return false;
    }
}

export  { generateUniqueID , addAccount }; //statement for exporting the needed functions using e6 module
