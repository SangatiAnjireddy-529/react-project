import React from "react";
import {data, moreData} from './Props2Comment'
import './Props2.css'

console.log(moreData)

const Comment = () => {
   return (
    <main className="container">
        <ul className="comment-container">
        {data.map((eachComment) =>{
            const {email,name,id,body} = eachComment;
            return (
                <li key ={id}className="comments">
                <div className="comment-header">
                    <h3 className="email" >{email}</h3>
                    <h3 className="name">{name}</h3>
                    <p className="body">{body}</p>

                </div>
                </li>
            )
        })}
        {/* <li className="comments">
        <div className="comment-header">
        <h3 className="email">anjireddy@gmail.com</h3>
        <h3 className="name">some name random names</h3>
        </div>
        <p className="meassage">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
        </li> */}
        </ul>
    </main>
   )
} 

export default Comment;