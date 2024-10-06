import React, { Fragment, useState } from "react";

interface IState{
    isLoggedIn : boolean;
}
interface IProps{}

let AuthUser:React.FC = () => {
    let [state, setState] = useState<IState>({
        isLoggedIn : false
    });

    let login = (): void => {
        setState({isLoggedIn : true});
    };

    let logout = (): void => {
        setState({isLoggedIn : false});
    };


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        {
                            state.isLoggedIn ? <Fragment>
                                <div>
                                    <p className="h3 text-success">Welcome User!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis neque odio laborum alias, dignissimos ratione voluptatum ipsam est praesentium. Quasi, reprehenderit qui libero debitis accusantium sapiente veniam cupiditate in?</p>
                                </div>
                            </Fragment> : <Fragment>
                                <div>
                                    <p className="h3 text-primary">Thank You!</p>
                                    <p>Quas Quasi, reprehenderit qui libero debitis accusantium sapiente veniam cupiditate in? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique laudantium nesciunt, quibusdam praesentium aliquid aspernatur. Lorem, ipsum dolor.</p>
                                </div>
                            </Fragment>
                        }
                    </div>

                    <div className="row">
                        <div className="col">
                            {
                                state.isLoggedIn ?
                                    <button className="btn btn-warning m-1" onClick={logout}>Logout</button>
                                    :
                                    <button className="btn btn-success m-1" onClick={login}>Login</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default AuthUser;