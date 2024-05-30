import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../redux/userSlice'


const Email = () => {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleChange = useDebouncedCallback((e) => {
        e.preventDefault()
        dispatch(editUser({ field: e.target.name, value: e.target.value }))
    }, 500)

    return (
        <div>
            <input type="email" name="email" defaultValue={user.email} placeholder='Email' onChange={e => handleChange(e)} />
            <input type="text" name="firstName" defaultValue={user.firstName} placeholder='firstName' onChange={e => handleChange(e)} />
            <input type="text" name="lastName" defaultValue={user.lastName} placeholder='firstName' onChange={e => handleChange(e)} />
        </div>
    )
}

export default Email