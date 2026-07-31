import "./App.css";
import {useEffect, useState} from "react";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";

function App(){

const [users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>{
if(!res.ok){
throw new Error("Something went wrong");
}
return res.json();
})
.then(data=>{
setUsers(data);
setLoading(false);
})
.catch(err=>{
setError(err.message);
setLoading(false);
});

},[]);


let filteredUsers=users.filter(user=>
user.name.toLowerCase().includes(search.toLowerCase())
);

if(loading){
return <h2>Loading users...</h2>
}

if(error){
return <h2>{error}</h2>
}
return(
<div>

<h1>User Directory</h1>

<SearchBar search={search} setSearch={setSearch}/>

<div className="users">

{
filteredUsers.length > 0 ? (
filteredUsers.map(user=>(
<UserCard key={user.id} user={user}/>
))
) : (
<h2>No users found</h2>
)
}

</div>

</div>
)

}

export default App;