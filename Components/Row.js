import Cell from "./Cell";

const Row = ({theData}) => {
    return (
        <tr>
            {Object.entries(theData).map(([key, value]) => {
                return (
                   <Cell key={key} cellData={JSON.stringify(value)}/>
               )
           })} 
        </tr>
    );
}

export default Row;