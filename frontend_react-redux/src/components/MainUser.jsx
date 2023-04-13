import React, { useState } from "react";
import '../styling/all.css'
import FormAdd from "../containers/FormAdd";
import { useNavigate } from 'react-router-dom'
import FormList from "../containers/FormList";

export default function MainUser() {
    const [add, setAdd] = useState(false);
    const navigate = useNavigate();

    const handleFormAdd = () => {
        setAdd(true)
        navigate('/FormAdd', { replace: true })
    }

    return (
        <div className="container-fluid">
            {
                add ?
                    <FormAdd />
                    :
                    <FormList handleFormAdd={handleFormAdd} />
            }
        </div>
    )
}