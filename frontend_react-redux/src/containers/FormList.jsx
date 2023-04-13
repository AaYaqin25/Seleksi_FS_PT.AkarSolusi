import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormItem from "../components/FormItem";
import { loadUser, removeUser, resendUser, updateUser } from "../actions/users";

export default function FormList({ handleFormAdd }) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);

    useEffect(() => {
        async function fetchUsers() {
            await dispatch(loadUser());
        }
        fetchUsers();
    }, [dispatch]);

    const resend = async (id, firstName, lastName, email) => {
        await dispatch(resendUser(id, firstName, lastName, email))
    }
    return (
        <div>
            <div className="card w-100">
                <div className="card-header">
                    <h5>Daftar User</h5>
                </div>
                <div className="card-body">
                    <button className="btn btn-dark" onClick={handleFormAdd}>
                        Tambah User
                    </button>
                </div>
                <div style={{ overflowY: "scroll", height: 200 }}>
                    <table className="table">
                        <thead>
                            <tr className="table-secondary">
                                <th>No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <FormItem
                                    key={item.id}
                                    no={index + 1}
                                    firstName={item.firstName}
                                    lastName={item.lastName}
                                    email={item.email}
                                    sent={item.sent}
                                    update={(firstName, lastName) => dispatch(updateUser(item.id, firstName, lastName))}
                                    remove={() => dispatch(removeUser(item.id))}
                                    resend={() => resend(item.id, item.firstName, item.lastName, item.email)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
