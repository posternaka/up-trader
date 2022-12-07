import React from 'react'

const ModalForMissing = ({ setValueInput }) => {
  return (
    <form className='form'>
        <div className='form__name'>
            <input type="text" className="user" placeholder="project name" onChange={(e) => setValueInput(e.target.value)} />
        </div>
    </form>
  )
}

export default ModalForMissing