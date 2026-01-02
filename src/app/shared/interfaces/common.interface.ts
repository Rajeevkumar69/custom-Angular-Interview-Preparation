export interface User {
     id: number;
     firstName: string;
     lastName: string;
     age: number;
     email: string,
     phone: string,
     role: string,
     university: string
     username: string
}

export interface MenuItem {
     label: string;
     route: string;
     icon: string;
}