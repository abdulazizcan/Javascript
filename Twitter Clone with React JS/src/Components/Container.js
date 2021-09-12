import React, { Children } from 'react'

const container = ({children}) => {
    return (
        <div className="flex min-h-screen mx-auto max-w-7xl border">
            {children}
        </div>
    )
}

export default container
