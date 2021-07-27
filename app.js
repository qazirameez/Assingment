//1
var itemsArray = [
   { name: "juice", price: 50, quantity: 3 },
   { name: "cookie", price: 30, quantity: 9 },
   { name: "shirt", price: 880, quantity: 1 },
   { name: "pen", price: 100, quantity: 2 }
];

function total() {
   for (var i = 0; i < itemsArray.length; i++) {
      var total = itemsArray[i].price * itemsArray[i].quantity
      console.log(total);
   };
}
total()


//2
var user = {
   name: "qazi",
   email: "...@gmail.com",
   password: "9090",
   age: 22,
   gender: "mail",
   city: "karachi",
   country: "pakistan"
}
console.log(user);

if ("age" in user && "country" in user == true) {
   console.log("age and country property exist in user object");
} else {
   console.log("age and country property not exist in user object");
}

if ("firstName" in user && "lastName" in user == true) {
   console.log("firstName and lastName property exist in user object");
} else {
   console.log("firstName and lastName property not exist in user object");
}





//3
function Students(name, id) {
   this.name = name;
   this.id = id;
}

var student1 = new Students("basit", 1122);
var student2 = new Students("shahid", 1123)
var student3 = new Students("sheraz", 1124)

console.log(student1, student2, student3);


//4
function User(Name, gender, address, education, profession) {
   this.Name = Name;
   this.gender = gender;
   this.address = address;
   this.education = education;
   this.profession = profession;
}

function getData() {
   var namee = document.getElementById("name").value
   var address = document.getElementById("address").value
   var profession = document.getElementById("profession").value

   var user1 = new User(namee, "mail", address, "Matric", profession)
   console.log(user1);

}


