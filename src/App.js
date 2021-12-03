import React, {useState, useEffect}  from "react";
import axios from "axios"
import {Card, ListGroup} from "react-bootstrap"
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [loadUser, setLoadUser] = useState(true)

  const getUsers = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUsers(res.data)
      setLoadUser(false)
      
    })
    .catch((err)=>console.log(err))
  }
  

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <div style={{display:"flex", flexWrap:"wrap", backgroundColor:"silver", padding:"10px 20px",margin:"17px"}}>
      {loadUser ? (<h1>.......loading</h1>):(users.map((user)=>(
        <div style={{padding:"10px 20px"}} >
        <Card style={{ width: '18rem' }} key={user.id}>
        <Card.Header> {user.name} </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{user.username}</ListGroup.Item>
          <ListGroup.Item> {user.phone} </ListGroup.Item>
          <ListGroup.Item> {user.email} </ListGroup.Item>
        </ListGroup>
      </Card>
      </div>
      )))}
    </div>
  );
}

export default App;
