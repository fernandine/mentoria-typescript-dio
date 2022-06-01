const Employee = {
    code: 222,
    name: 'Jack'
};

const Employee2: {code: number, name: string} = {
    code: 223,
    name: 'Paul'
}

interface Employee { 
    code: number,
    name: string
};

const EmployeeObj = {} as Employee;
EmployeeObj.code = 222;
EmployeeObj.name = 'Jack';

const EmployeeObj2: Employee = {
    code: 222,
    name: 'Jack'
}