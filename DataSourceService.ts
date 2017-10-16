import{Injectable} from '@angular/core';
class Employees{
    ename: String;
    dept: String;
    job: String;
    sal: number
}
@Injectable() 
export class EmployeesService{
employees: Employees[] =[
    {ename: 'Hema',dept: 'IT',job: 'Architect',sal: 4000},
    {ename:'Kesavan',dept:'PWD',job:'Engineer',sal:700},
    {ename:'Swathi',dept:'ECE',job:'Lecturer',sal:70000}
];

constructor(){};

getEmployees(){
    return this.employees;
}
}