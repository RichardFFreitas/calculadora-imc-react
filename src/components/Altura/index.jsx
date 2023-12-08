const formAltura = (props) => {
    return (
        <div>
            <label>
                Altura
                <input type="text" value={props.altura} onChange={(e) => { props.setAltura(e.target.value) }} />
            </label>
        </div>
    )
}

export default formAltura;
