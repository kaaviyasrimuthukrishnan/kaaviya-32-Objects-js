const obj={
  Id:1,
  Name:'kaaviya',
  Contact:1232434,
  Position:'employee',
  Department:'ece',
  Salary:54000,
  getId:function()
  {
return this.Id;
  },
  setId:function(Id)
  {
    this.Id=Id
  },

   getName:function()
  {
return this.Name;
  },
  setName:function(Name)
  {
    this.Name=Name;
  },

   getContact:function()
  {
return this.Contact;
  },
  setContact:function(Contact)
  {
    this.Contact=Contact;
  },

   getPosition:function()
  {
return this.Position;
  },
  setPosition:function(Position)
  {
    this.Position=Position;
  },

  getDepartment:function()
  {
return this.Department;
  },
  setDepartment:function(Department)
  {
    this.Department=Department;
  },

  getSalary:function()
  {
return this.Salary;
  },
  setSalary:function(Salary)
  {
    this.Salary=Salary;
  },
};
let Id=obj.getId();
console.log('Id:',Id);
obj.setId('2');
Id =obj.getId();
console.log('Id:',Id);

let Name=obj.getName();
console.log('Name:',Name);
obj.setName('kaaviyasri');
Name=obj.getName();
console.log('Name:',Name);

let Contact=obj.getContact();
console.log('Contact:',Contact);
obj.setContact('464656');
Contact =obj.getContact();
console.log('Contact:',Contact);

let Position=obj.getPosition();
console.log('Position:',Position);
obj.setPosition('employee');
Position =obj.getPosition();
console.log('Position:',Position);

let Department=obj.getDepartment();
console.log('Department:',Department);
obj.setDepartment('ece');
Department =obj.getDepartment();
console.log('Department:',Department);

let Salary=obj.getSalary();
console.log('Salary:',Salary);
obj.setSalary('3430000');
Salary=obj.getSalary();
console.log('Salary:',Salary);