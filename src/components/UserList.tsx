import React, { useState } from "react";
import { IUser } from "../models/IUser";

interface IState{
    users : IUser[]
}
interface IProps{}

let UserList:React.FC = () => {
    let [state, setState] = useState<IState>({
        users : [
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
        ]
    });

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">User List</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover shadow-lg">
                            <thead className="table-dark">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Designation</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.length > 0 && 
                                    state.users.map(user => {
                                        return (
                                            <tr key={user.sno}>
                                                <td>{user.sno}</td>
                                                <td>{user.name}</td>
                                                <td>{user.age} years</td>
                                                <td>{user.designation}</td>
                                                <td>{user.company}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default UserList;