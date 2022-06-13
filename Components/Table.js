import Row from "./Row";

const Table = ({apiData}) => {
    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    {apiData.map(theData => (
                        <Row key={theData.id} theData={theData}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;