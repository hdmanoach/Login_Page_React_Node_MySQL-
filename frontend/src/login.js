import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary vh-100">
            <div className="p-3 bg-white w-25 ">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" placeholder="Enter Email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
