var module = angular.module("todoApp", []);
module.controller('TodoController', function(){
  this.showList = true;
  this.listElement = '';
  this.toDoList = ['Learn Angular 1', 'Try out exercises', 'Visit Java Brains site', 'Learn more Angular'];
  this.editButtonText = 'Edit';
  this.editButton = function(){
    if(this.editButtonText === 'Edit')
    {
      this.editButtonText = 'Done';
      this.showList = false;
    }
    else
    {
      this.editButtonText = 'Edit';
      this.showList = true;
    }

  };
  this.addToList = function(){
    if(this.listElement.length>0)
    {
    this.toDoList.push(this.listElement);
    this.listElement='';
  }
};
  this.deleteListElement = function(element){
    this.toDoList = this.toDoList.filter(function(each){
      return each !== element;
    });
  }
});
