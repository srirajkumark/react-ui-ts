import { IUser } from "../models/IUser";

export class UserService {

    private static users : IUser[] = [
        {
            sno : 'AAA101',
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
            company : 'Infotech'
        },
        {
            sno : 'AAA102',
            name : 'John',
            age : 35,
            designation : 'Sr. Software Engineer',
            company : 'Infotech'
        },
        {
            sno : 'AAA103',
            name : 'Willson',
            age : 45,
            designation : 'Tech Lead',
            company : 'Infotech'
        },
        {
            sno : 'AAA104',
            name : 'Laura',
            age : 55,
            designation : 'Manager',
            company : 'Infotech'
        }
    ];

    public static getAllUsers(){
        return this.users
    }
}