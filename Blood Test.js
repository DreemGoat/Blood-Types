function canGiveBlood( a ,b ) {
    if (a === "A+" && b === "A+"){
        return true;
    } else if(a==="A+" && b ==="AB+"){
        return true;
    } else if(a ==="A+"&&b==="A-"){
        return false;
    } else if(a ==="A+"&&b==="B-"){
        return false;
    } else if(a ==="A+"&&b==="O-"){
        return false;
    } else if(a ==="A+"&&b==="O+"){
        return false;
    } else if(a ==="A+"&&b==="B+"){
        return false;
    } else if(a ==="A+"&&b==="AB-"){
        return false;
    } else if(a==="O+" && b === "A+"){
        return true;
    } else if(a==="O+" && b ==="AB+"){
        return true;
    } else if(a ==="O+"&&b==="A-"){
        return false;
    } else if(a ==="O+"&&b==="B-"){
        return false;
    } else if(a ==="O+"&&b==="O-"){
        return false;
    } else if(a ==="O+"&&b==="O+"){
        return true;
    } else if(a ==="O+"&&b==="B+"){
        return true;
    } else if(a ==="O+"&&b==="AB-"){
        return false;
    } else if(a==="B+" && b === "A+"){
        return false;
    } else if(a==="B+" && b ==="AB+"){
        return true;
    } else if(a ==="B+"&&b==="A-"){
        return false;
    } else if(a ==="B+"&&b==="B-"){
        return false;
    } else if(a ==="B+"&&b==="O-"){
        return false;
    } else if(a ==="B+"&&b==="O+"){
        return false;
    } else if(a ==="B+"&&b==="B+"){
        return true;
    } else if(a ==="B+"&&b==="AB-"){
        return false;
    } else if(a==="AB+" && b === "A+"){
        return false;
    } else if(a==="AB+" && b ==="AB+"){
        return true;
    } else if(a ==="AB+"&&b==="A-"){
        return false;
    } else if(a ==="AB+"&&b==="B-"){
        return false;
    } else if(a ==="AB+"&&b==="O-"){
        return false;
    } else if(a ==="AB+"&&b==="O+"){
        return false;
    } else if(a ==="AB+"&&b==="B+"){
        return false;
    } else if(a ==="AB+"&&b==="AB-"){
        return false;
    } else if(a==="AB-" && b === "A+"){
        return false;
    } else if(a==="AB-" && b ==="AB+"){
        return true;
    } else if(a ==="AB-"&&b==="A-"){
        return false;
    } else if(a ==="AB-"&&b==="B-"){
        return false;
    } else if(a ==="AB-"&&b==="O-"){
        return false;
    } else if(a ==="AB-"&&b==="O+"){
        return false;
    } else if(a ==="AB-"&&b==="B+"){
        return false;
    } else if(a ==="AB-"&&b==="AB-"){
        return true;
    }  else if(a==="AB-" && b === "A+"){
        return true;
    } else if(a==="AB-" && b ==="AB+"){
        return true;
    } else if(a ==="A-" && b =="A+"){
        return true;
    } else if (a ==="A-"&& b =="AB+"){
        return true;
    } else if(a ==="A-"&&b==="A-"){
        return true;
    } else if(a ==="A-"&&b==="B-"){
        return false;
    } else if(a ==="A-"&&b==="O-"){
        return false;
    } else if(a ==="A-"&&b==="O+"){
        return false;
    } else if(a ==="A-"&&b==="B+"){
        return false;
    } else if(a ==="A-"&&b==="AB-"){
        return true;
    } else if(a==="B-" && b === "A+"){
        return false;
    } else if(a==="B-" && b ==="AB+"){
        return true;
    } else if(a ==="B-"&&b==="A-"){
        return false;
    } else if(a ==="B-"&&b==="B-"){
        return true;
    } else if(a ==="B-"&&b==="O-"){
        return false;
    } else if(a ==="B-"&&b==="O+"){
        return false;
    } else if(a ==="B-"&&b==="B+"){
        return true;
    } else if(a ==="B-"&&b==="AB-"){
        return true;
    } else if(a==="O-" && b === "A+"){
        return true;
    } else if(a==="O-" && b ==="AB+"){
        return true;
    } else if(a ==="O-"&&b==="A-"){
        return true;
    } else if(a ==="O-"&&b==="B-"){
        return true;
    } else if(a ==="O-"&&b==="O-"){
        return true;
    } else if(a ==="O-"&&b==="O+"){
        return true;
    } else if(a ==="O-"&& b==="B+"){
        return true;
    } else if(a==="O-"&& b==="AB-"){
        return true;
    }
}
console.log(canGiveBlood("O+","A+"));
console.log(canGiveBlood("A-", "B-"));
console.log(canGiveBlood("A-", "AB+"));