import SingleDataItem from "./SingleDataItem";

const ListReceiveData = ({apiData}) => {
    return (
        <ul>
            {apiData.map(userData =>
                <SingleDataItem userData={userData} key={userData.id} />
            )}
        </ul>
    );
}

export default ListReceiveData;