import React from "react";

interface IState{}
interface IProps{}

let About:React.FC = () => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="col">
                    <p className="h3 text-success fw-bold">About Us</p>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse dolor nulla ipsam repudiandae corporis numquam. Laudantium repudiandae, molestias consectetur nostrum, perferendis blanditiis quam quo ex impedit reiciendis accusamus quidem.</p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">
                                App Name : <span className="fw-bold">React Router with TypeScript</span>
                            </li>
                            <li className="list-group-item">
                                Author : <span className="fw-bold">SRK</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};
export default About;