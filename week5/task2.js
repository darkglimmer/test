function Person(name, age)
{
  this.introduce=introduce;
  function introduce(){
    document.write("I am " + name + ", I am " + age + " years old!"+"<br>");
  }
}
    var jerry = new Person("Jerry", 2);
    jerry.introduce();
    var tom = new Person("Tom", 12);
    tom.introduce();   
