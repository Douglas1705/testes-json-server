export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    createdAt: string;
    email: string;
    password: string;
    role: string;
    social: {
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  
    constructor(user: User) {
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.username = user.username;
      this.createdAt = user.createdAt;
      this.email = user.email;
      this.password = user.password;
      this.role = user.role;
      this.social = user.social;
    }
  }
  