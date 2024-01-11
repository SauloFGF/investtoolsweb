import React, { ChangeEvent, useState } from "react";
import * as jss from "./jss"
import InputUi from "../../components/inputs";
import ButtonUi from "../../components/button";


const Home = () => {
    // teste funcioanlidade form
    const [body, setBody] = useState({valorInicial: "", valorMensal: "", taxaDeJuros: "", periodo: ""})
    const handleChange  = (e : ChangeEvent<HTMLInputElement> | undefined) => {
        const { name,  } = e!.target.value.trim;
        setBody((prevFormData) => ({ ...prevFormData, name}))
    }

    const handleSubmit = (event: any) => {
        console.log(event)
        event.preventDefault();
        alert(`Name: ${body.valorInicial}, Email: ${body.valorMensal}, Message: ${body.taxaDeJuros}, period: ${body.periodo}`
        );
    }

    return(<jss.area>
        <form onSubmit={handleSubmit}>
        <jss.displayArea>
            <InputUi label={"Valor inicial"} name={"valorInicial"} width={300} minWidth={"100px"} maxWidth={"300px"} onChange={handleChange}/>
            <InputUi label={"Valor mensal"} name={"valorMensal"} width={300} minWidth={"100px"} maxWidth={"300px"} onChange={handleChange}/>
            <InputUi label={"Taxa de juros"} name={"taxaDeJuros"} width={300} minWidth={"100px"} maxWidth={"300px"} onChange={handleChange}/>
            <InputUi label={"Período"} name={"periodo"} width={300} minWidth={"100px"} maxWidth={"300px"} onChange={handleChange}/>
            <ButtonUi content="Calcular"/>
        </jss.displayArea>
        </form>
    </jss.area>)
}


export default Home;