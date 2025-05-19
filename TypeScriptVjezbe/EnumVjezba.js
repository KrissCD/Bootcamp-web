//Definirati Enum role, vrijednosti, Admin,Editor,Viewer 0
//definira klasu User 0
//Javna svojstva:, Name: string, Role: role 0
//kreira primjer korisnika 0
//napratiti nekoliko instasni User s razlicitim ulogama 0
//spremiti ih u niz user: User[] 0
//implemenirati funkciju get Admins
//Potpis: (users: User[]) => User[]
//Prolazi kroz svaki User u nizu i vraca samo one cija je role === Role.Admin
// pozvati get Admins(users) i ispisati konzolu name svakog administratora
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, role) {
        this.name = name;
        this.role = role;
    }
    return User;
}());
var user1 = new User("Ana", Role.Admin);
var user2 = new User("Marko", Role.Editor);
var user3 = new User("Lana", Role.Viewer);
var user4 = new User("Ivan", Role.Editor);
var user5 = new User("Petra", Role.Admin);
var users = [user1, user2, user3, user4, user5];
function getAdmins(users) {
    return users.filter(function (user) { return user.role === Role.Admin; });
}
var admins = getAdmins(users);
console.log("Admini:");
admins.forEach(function (admin) {
    console.log("".concat(admin.name, " - ").concat(Role[admin.role]));
});
