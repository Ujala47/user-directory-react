function UserCard({user}){

return(
<div className="card">

<h2>{user.name}</h2>

<p>Email: {user.email}</p>

<p>Phone: {user.phone}</p>

<p>City: {user.address.city}</p>

</div>
)

}

export default UserCard;