const Users = ({userData}) => {
    return (
        <div className="usersGrid">
            <p> {JSON.stringify(userData.id)}</p>
            <p> {JSON.stringify(userData.name)}</p>
            <p> {JSON.stringify(userData.username)} </p>
            <p> {JSON.stringify(userData.email)} </p>
            <p> {JSON.stringify(userData.address)} </p>
            <p> {JSON.stringify(userData.phone)} </p>
            <p> {JSON.stringify(userData.website)} </p>
            <p> {JSON.stringify(userData.company)} </p>
        </div>
    );
}

export default Users;