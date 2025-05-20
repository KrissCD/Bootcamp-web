//Definirati Enum role, vrijednosti, Admin,Editor,Viewer 0
//definira klasu User 0
//Javna svojstva:, Name: string, Role: role 0
//kreira primjer korisnika 0
//napratiti nekoliko instasni User s razlicitim ulogama 0
//spremiti ih u niz user: User[] 0
//implemenirati funkciju get Admins 0
//Potpis: (users: User[]) => User[] 0
//Prolazi kroz svaki User u nizu i vraca samo one cija je role === Role.Admin 0
//pozvati get Admins(users) i ispisati konzolu name svakog administratora 0

enum Role {
  Admin,
  Editor,
  Viewer
}

class User {
  name: string;
  role: Role;

  constructor(name: string, role: Role) {
    this.name = name;
    this.role = role;
  }
}

let user1 = new User("Tunde", Role.Admin);
let user2 = new User("Sara", Role.Editor);
let user3 = new User("Nika", Role.Viewer);
let user4 = new User("Marko", Role.Editor);
let user5 = new User("Jelena", Role.Admin);
let user6 = new User("Laure", Role.Admin);

let users: User[] = [user1, user2, user3, user4, user5,user6];

function getAdmins(users: User[]): User[] {
    return users.filter(user => user.role === Role.Admin);
}

const admins = getAdmins(users);
console.log("Admini:");
admins.forEach(admin => {
  console.log(`${admin.name} - ${Role[admin.role]}`);
});





