import React from 'react'

export const ApiCard = ({company}) => {
  return (
    <>
    <tr key={company.id}>
                  <th scope={company._id}>{company._id}</th>
                  <td >
                    {(company.name)}</td>
                  <td>{(company.foundation)}</td>
                </tr>
    </>
  )
}
