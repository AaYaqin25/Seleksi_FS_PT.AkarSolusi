import React, { Fragment, useCallback, useState, useRef, useEffect } from "react";
import ModalDelete from "./ModalDelete";

export default function FormItem({ no, firstName, lastName, email, sent, update, remove, resend }) {
    const scrollRef = useRef(null)
    const [user, setUser] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
    const [edit, setEdit] = useState(false);
    const [modal, setModal] = useState(false)

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behaivor: 'smooth' })
    }, [user])

    const handleSubmitUpdate = useCallback(() => {
        update(user.firstName, user.lastName)
        setEdit(false)
    }, [user.firstName, user.lastName, update])

    return (
        <tr ref={scrollRef}>
            <td>{no}</td>
            {edit ?
                <Fragment>
                    <td>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            className="form-control"
                            placeholder="firstname"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    firstName: e.target.value,
                                })
                            }
                            value={user.firstName}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            className="form-control"
                            placeholder="lastname"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    lastName: e.target.value,
                                })
                            }
                            value={user.lastName}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="email"
                            value={user.email ? user.email : ""}
                            disabled
                        />
                    </td>
                </Fragment>
                :
                <Fragment>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                </Fragment>
            }
            {
                sent ?
                    edit ?
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmitUpdate}>
                                save
                            </button>
                            <button type="button" className="btn btn-info" onClick={() => setEdit(false)}>
                                cancel
                            </button>
                        </td>
                        :
                        <td>
                            <button
                                id="btnsave"
                                type="button"
                                className="btn btn-success"
                                onClick={() => setEdit(true)}>
                                edit
                            </button>
                            <button type="button" className="btn btn-danger" onClick={() => setModal(true)}>
                                delete
                            </button>
                            <ModalDelete modal={modal} setModal={setModal} remove={remove} user={user} />
                        </td>
                    :
                    <td>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={resend}>
                            resend
                        </button>
                    </td>
            }
        </tr>
    );
}