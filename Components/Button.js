const Button = ({buttonText, dataCategory, setdataCategory}) => {
    return (
        <button
            className={buttonText === dataCategory ? "btnSelected" : null}
            onClick={()=>setdataCategory(buttonText)}
        >
        {buttonText}</button>
    );
}

export default Button;