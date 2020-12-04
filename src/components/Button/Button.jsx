import './Button.css';

const Button = (props) => {
    return (
        <button className="Button" onClick={() => props.onClickHandler("Хорошо")}>
            { props.text }
        </button>
    )
}

export default Button;