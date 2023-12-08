const formCalcular = (props) => {
    const calc = () => {
        props.setResultado(props.peso / (props.altura * props.altura))
    }
    return (
        <div >
            <button onClick={calc}>Calcular</button>
        </div>
    )
}

export default formCalcular;