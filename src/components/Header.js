import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const user = useSelector((state) => state.user)

    return (
        <div>
            <header>
                <ul>
                    <li>Name: {user.firstName}</li>
                    <li>Name: {user.lastName}</li>
                    <li>Email: {user.email}</li>
                    <li>Username: {user.userName}</li>
                </ul>
            </header>
        </div>
    )
}

export default Header