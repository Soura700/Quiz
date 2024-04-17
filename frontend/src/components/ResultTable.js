// import React, { useEffect, useState } from 'react'
// import { getServerData } from '../helper/helper'
// import { useAsyncError } from 'react-router-dom'
// import Questions from './Questions';
// import axios from 'axios';

// export default function ResultTable() {

//     const [data, setData] = useState([])
//     const [question,setQuestion] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [incorrectIndices, setIncorrectIndices] = useState([]);

//     useEffect(() => {
//         // getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
//             getServerData(`http://localhost:8080/api/result`, (res) => {
//             setData(res)
//             setAnswers(res.result)
//         })
//     })

//     useEffect(() => {

//        async function getQuestions(){
//             const res = await axios.get("http://localhost:8080/api/questions");
//             setQuestion(res.data[0].answers);
//         }
//         getQuestions();
//     },[])

//   return (
//     <div>
//         <table>
//             <thead className='table-header'>
//                 <tr className='table-row'>
//                     <td>Name</td>
//                     <td>Attemps</td>
//                     <td>Earn Points</td>
//                     <td>Result</td>
//                     <td>Correct Answers</td> {/* Add column for correct answers */}
//                 </tr>
//             </thead>
//             <tbody>
//                 { !data ?? <div>No Data Found </div>}
//                 {
//                     data.map((v, i) => (
//                         <tr className='table-body' key={i}>
//                             <td>{v?.username || ''}</td>
//                             <td>{v?.attempts || 0}</td>
//                             <td>{v?.points || 0}</td>
//                             <td>{v?.achived || ""}</td>
//                         </tr>
//                     ))
//                 }

//             </tbody>
//             {/* <tbody>
//                     {incorrectIndices.map((index) => (
//                         <tr className='table-body' key={index}>
//                             <td>{`Question ${index + 1}`}</td>
//                         </tr>
//                     ))}
//                 </tbody> */}
//         </table>
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
import { useAsyncError } from "react-router-dom";
import Questions from "./Questions";
import axios from "axios";

export default function ResultTable({ totalPoints }) {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [incorrectIndices, setIncorrectIndices] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  

  useEffect(() => {
    // getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
    getServerData(`http://localhost:8080/api/result`, (res) => {
      setData(res);
      setAnswers(res.result);
    });
  });

  useEffect(() => {
    async function getQuestions() {
      const res = await axios.get("http://localhost:8080/api/questions");
      setQuestion(res.data[0].answers);
      setCorrectAnswers(res.data[0].answers);
    }
    getQuestions();
  });

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
            <td>Incorrect Answers</td>
            <td>No. Incorrect Answers</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No Data Found </div>}
          {data.map((v, i) => (
            <tr className="table-body" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
              <td>{v?.achived || ""}</td>

              <td>
                {totalPoints - v?.points ? (
                  <>
                    <span style={{ color: "red" }}>Yes</span>
                  </>
                ) : (
                  <span style={{ color: "green" }}>No</span>
                )}
              </td>
              <td>
                {totalPoints - v?.points ? (
                  <>
                    <span style={{ color: "red" }}>{v?.points / 10 || 0}</span>
                  </>
                ) : (
                  <span style={{ color: "green" }}>No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
