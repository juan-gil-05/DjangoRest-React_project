import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to="/tasks"> <h1>Tasks</h1> </Link>
            <Link to="/tasks-create"> Create tasks </Link>
        </div>
    )
}

export default Navigation