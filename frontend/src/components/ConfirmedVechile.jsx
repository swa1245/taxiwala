import React from 'react'

const ConfirmedVechile = () => {
  return (
    <div>
      <h5 onClick={() => setVechiclepanel(false)} className="mb-4">
        <span className="text-sm font-semibold">leave now</span>{" "}
        <i className="ri-arrow-down-fill text-sm"></i>
      </h5>
      <h2 className="text-xl font-semibold mb-3">confirm ur ride</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWeN3hcqn-G2idpfomts-GZ5JWzcIhFKpyCmnMU9cz8wOiAwNCNRFsl5C-nkHGEYCPos&usqp=CAU" alt="" />
    </div>
  )
}

export default ConfirmedVechile
