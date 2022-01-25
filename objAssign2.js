let names ={
    firstName: 'Cole',
    lastName: 'Bienek'
}

function wholeName (obj){
    obj.fullName = `${obj.firstName} ${obj.lastName}`; 

}

wholeName(names);
console.log(names);
