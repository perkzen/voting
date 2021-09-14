import React from 'react';

export const StyleProvider = ({children}: any) => {
    const styles = {
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, #10cf84, #00c9b1, #00c0d4, #00b4e9, #03a4eb)',
        color: 'white'
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}