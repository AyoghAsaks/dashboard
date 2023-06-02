import React from 'react'
import './Card.css';
import { useQuery } from 'react-query';
import { getLines } from '../services/lineApi'; //This is for the lines
import TableLayout from './TableLayout';
//import TableLayout from '../pages/TableLayout';

const Cards = () => {
  
  /*-------------------------------BEGINNING OF LINES CODE--------------------------------------------*/

   //Destructure "getLines"
   const { isLoading, isError, error, data: lines } = useQuery(
    "lines", getLines,
    {
        refetchInterval: 14000,
        refetchIntervalInBackground: true
    });
  
  let content 

  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isError){
    content = <p>{error.message}</p>
  }else {
    //content = JSON.stringify(coins)
    content = lines 
  }

  //console.log(content)

  return (
    <div className="card-group" style={{height: '100vh'}}>
        {/*-- Card 1 (front/back) --*/}
        <div className="card card-flip text-white table-lg" style={{border: '3px solid #282c34', backgroundColor: '#2E2EFF'}}>
                <div className="card-front text-white">
                    <TableLayout {...content[0]} />
                </div>
                <div className="card-back text-white">
                    <TableLayout {...content[1]} />
                </div>
        </div>
        {/*-- Card 2 (front/back) --*/}
        <div className="card card-flip text-white table-lg" style={{border: '3px solid #282c34', backgroundColor: '#2E2EFF'}}>
                <div className="card-front text-white">
                <TableLayout {...content[2]} />  
                </div>
                <div className="card-back text-white">
                    <TableLayout {...content[3]} />
                </div>
        </div>
        {/*-- Card 3 (front/back) --*/}
        <div className="card card-flip text-white table-lg" style={{border: '3px solid #282c34', backgroundColor: '#2E2EFF'}}>
                <div className="card-front ">
                    <TableLayout {...content[4]} />
                </div>
                <div className="card-back">
                    <TableLayout {...content[5]} />
                </div>
        </div>
    </div>
  )
}

export default Cards;