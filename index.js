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

obj.setId('1');
Id =obj.getId();
console.log('Id:',Id);

obj.setName('kaaviya');
Name=obj.getName();
console.log('Name:',Name);

obj.setContact('464656');
Contact =obj.getContact();
console.log('Contact:',Contact);

obj.setPosition('employee');
Position =obj.getPosition();
console.log('Position:',Position);

obj.setDepartment('ece');
Department =obj.getDepartment();
console.log('Department:',Department);

obj.setSalary('3430000');
Salary=obj.getSalary();
console.log('Salary:',Salary);