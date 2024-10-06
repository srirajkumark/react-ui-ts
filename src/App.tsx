import React from 'react';
import './App.css';
import AuthUser from './components/AuthUser';


function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, incidunt possimus quas adipisci eum tenetur quis sint ut animi ullam voluptatibus facere vero aliquam, qui quibusdam dignissimos non voluptate velit!</p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book"></i>&nbsp;&nbsp;Read More
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <AuthUser/>
            </div>
          </div>
         
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
