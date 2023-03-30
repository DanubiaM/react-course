function Button({valor}){

    function eventClick(){
        console.log(`You click me, ${valor} x`)
    }


    return (
        <button onClick={eventClick}>
            Click here
        </button>
    )

}

export  default Button