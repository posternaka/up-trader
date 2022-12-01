import React from 'react'

const index = () => {
    const arr = ['how', 'you', 'can', 'help'];

    return (
        <div className='card_project'>
            
                {arr.map(it => (
                        <div className='card_project__item'>
                            <h1>{it}</h1>
                            <p>project</p>
                        </div>
                    )
                )}
            
        </div>
    )
}

export default index