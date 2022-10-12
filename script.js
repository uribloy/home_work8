function user (userName){
this.userName=userName,
this.ifollow=[],
this.myfollowers=[],

this.ifollowing=function(members){
this.ifollow.push(members);
members.myfollowers.push(this);
},

this.sendMsg=function(message){
    this.myfollowers.forEach((myuser) => {
    myuser.getMsg(`hi ` +myuser.userName+ `, ` +this.userName+  ` sent you the message: `+message)
});
},

this.getMsg=function(themsg){
console.log(themsg)
}
}

let user1=new user("avi");
let user2=new user("ben");
let user3=new user("chen");
let user4=new user("dan");

user1.ifollowing(user2);
user1.ifollowing(user3);
user1.ifollowing(user4);

user3.ifollowing(user1);
user3.ifollowing(user4);

user4.ifollowing(user2);
user4.ifollowing(user3);

user1.sendMsg('wellcome to my page');
user2.sendMsg('tanks for following');
user3.sendMsg('Good luck');
user4.sendMsg('Have a nice day');


console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);