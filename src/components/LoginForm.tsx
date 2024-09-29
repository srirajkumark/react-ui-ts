import React from "react";

interface IState{}
interface IProps{}

let LoginForm:React.FC = () => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="User Name" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default LoginForm;