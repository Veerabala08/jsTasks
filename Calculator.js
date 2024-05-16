// Javascript calculator 

function getData(){
    console.log("\n******Calculator******")
    let first_num;
    let second_num;
     first_num =  parseInt(prompt("Enter the First Number "));
     second_num = parseInt(prompt("Enter the Second Number "));
    const operation = prompt("*****Choose an operation:******\n press 'a' for additon\n press 's' for subration\n press 'm' for multiplication\n press 'd' for division \n");
    return { operation, first_num, second_num }
} 

function getOpertions(operation, first_num, second_num){
    
    switch(operation){
        case "s":
            return first_num - second_num;
        case "a":
            return first_num + second_num;
        case "m":
            return first_num * second_num;
        case "d":
            return second_num == 0 ? "Cant divide a number by 0" : first_num/second_num;
    }
}

function runCal(){
    let exit = 1 ;
    // can do n number of calculation
    while(exit == 1){
    const {operation, first_num, second_num} = getData()
    const result = getOpertions(operation, first_num, second_num)
    console.log(`The result of the calculation  is ${result}\n`)
    exit = prompt("press 1  for another calculation :")
    }
}

runCal()