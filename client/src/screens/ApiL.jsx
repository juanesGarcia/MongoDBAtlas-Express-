import React from 'react'
import { useState,useEffect } from 'react'
import * as Apis from "../screens/funApi"
import { ApiCard} from './ApiCard';
import './apiL.css'

export const ApiL = () => {
    const [Company, setCompany] = useState([]);
    console.log(Company);

    function createCompany(name,foundation){
        setCompany([...Company,{
          name: name,
          foundation:foundation
        }])}
    
    function deleteCompany(Companyid){
        setCompany(
            Company.filter(company=>company.id!==Companyid))
       
    }

    useEffect(() => {
        Apis.getCompany().then(setCompany);
      }, []);
    

    if(Company.lenght === 0) {
        return <h1>Array vacio</h1>
    }
  return (
    <>
  <h1 className="titulo ps-4 pt-5">
     
        lista de tareas
      </h1>
      <div className="m-4 ">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Compañia</th>
              <th scope="col">foundation</th>
            </tr>
          </thead>
          <tbody>
            {Company.map((company) => (
              <ApiCard key={company._id} company={company}></ApiCard>
            ))}
          </tbody>
        </table>
      </div>
      
  </>
  )
}