import PropsType from 'prop-types'


function Item({marca, ano_lancamento}){

    return(

        <>
            <li>{marca} - {ano_lancamento} </li>
        </>
    )


}

Item.PropsType={
    marca: PropsType.string.isRequired,
    ano_lancamento: PropsType.number.isRequired

}

Item.defaultProps ={
    marca: "Empty",
    ano_lancamento:0
}

export default Item