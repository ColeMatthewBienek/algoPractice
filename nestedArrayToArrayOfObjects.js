let input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];


function transformEmployeeData(employeeData) {
//
let transformedData = [];
let obj={};

for (let i = 0; i < employeeData.length; i++) {
    for (let j = 0; j < employeeData[i].length; j++){
       console.log('i', i, 'j', j)
       obj[employeeData[i][j][0]] = employeeData[i][j][1];
    }
transformedData.push(obj);
obj={};
}
console.log(transformedData);
return transformedData;

}

transformEmployeeData(input);