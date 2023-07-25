import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  addDoc,
} from "firebase/firestore";



const Form = ({darkmode}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [users, setUsers] = useState(false)
    const usersCollectionRef = collection(db, "users");
    
    console.log(firstName, lastName, email, comment)
      
    const createUser = async () => {
    await addDoc(usersCollectionRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        comment: comment,
    })
    .then(() => {
        alert("Your message has been submitted👍");
      })
    .catch((error) => {
        alert(error.message);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setComment("");
    };

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);
    return (
        <section className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <input
                type="text"
                placeholder="First Name"
                onChange={(event) => {setFirstName(event.target.value)}}
                name="firstName"
                value={firstName}
                className={`${!darkmode ? "text-white" : "text-gray-600"} w-[300px] xlg:w-[400px] h-[50px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent`}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(event) => {setLastName(event.target.value)}}
                name="lastName"
                value={lastName}
                className={`${!darkmode ? "text-white" : "text-gray-600"} w-[300px] xlg:w-[400px] h-[50px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent`}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(event) => {setEmail(event.target.value)}}
                name="email"
                value={email}
                className={`${!darkmode ? "text-white" : "text-gray-600"} w-[300px] xlg:w-[400px] h-[50px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent`}
            />
            <textarea 
                placeholder="Comments"
                onChange={(event) => {setComment(event.target.value)}}
                name="comments"
                value={comment}
                className={`${!darkmode ? "text-white" : "text-gray-600"} w-[300px] xlg:w-[400px] h-[100px] my-2 rounded-[2px] border-t-0 border-l-0 border-r-0 border-b-[2px] border-brown bg-transparent`}
            />
            <button onClick={createUser} className="w-[100px] mt-5 h-[50px] text-white submit rounded bg-orange-500">Submit</button>
        </div>
        <div className='mt-10'>
            <h1 className='text-gradient font-semibold text-lg'><i class="fa-regular fa-copyright"></i> All Rights Reserved. The Blank.eth</h1>
        </div>

        </section>
    )
}

export default Form;