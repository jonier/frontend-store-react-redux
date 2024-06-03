import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const user = useSelector((state) => state.user)


    //await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div>
            <header>
                <ul>
                    <li>Name: {user.firstName}</li>
                    <li>Name: {user.lastName}</li>
                    <li>Email: {user.email}</li>
                    <li>Username1: {user.userName}</li>
                </ul>
            </header>
        </div>
    )
}

export default Header