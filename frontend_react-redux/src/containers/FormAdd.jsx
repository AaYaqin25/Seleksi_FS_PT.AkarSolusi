import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addUser } from "../actions/users";

export default function FormAdd() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(user.email.includes('@gmail.com')) {
                await dispatch(addUser(user.firstName, user.lastName, user.email))
                setUser({ firstName: '', lastName: '', email: '' })
                navigate("/", { replace: true });
            } else {
                setError('Email must contain @gmail.com')
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card w-50">
                <div className="card-header">
                    <h5>Form Add</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <div className="col-auto">
                                <label htmlFor="firstname" className="col-form-label">
                                    FirstName
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="form-control"
                                    placeholder="firstname"
                                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                    value={user.firstName}
                                />
                            </div>

                            <div className="col-auto">
                                <label htmlFor="lastname" className="col-form-label">
                                    LastName
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="form-control"
                                    placeholder="lastname"
                                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                    value={user.lastName}
                                />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="email" className="col-form-label">
                                    Email
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="email"
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    value={user.email}
                                />
                                {error && <div className="text-danger">{error}</div>}
                            </div>
                            <br />
                            <div className="form-group">
                                <button id="btnsave" type="submit" className="btn btn-primary">save</button>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => navigate('/', { replace: true })}>
                                    cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}