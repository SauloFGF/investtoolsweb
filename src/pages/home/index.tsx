import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import * as jss from "./jss"
import InputUi from "../../components/inputs";
import ButtonUi from "../../components/button";
import useHoookApiController from "../../hooks/api";


const Home = () => {
    // teste funcioanlidade form
    const [body, setBody] = useState({ valorInicial: "", valorMensal: "", taxaDeJuros: "", periodo: "" });
    const apiController = useHoookApiController()

    useEffect(() => {
        console.log(body); // Isso refletirá o estado atualizado
    }, [body]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBody(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault(); // Evitar a atualização da página
    
            // Mapeando os valores do formulário para a estrutura desejada
            const requestBody = {
                valorInicial: parseFloat(body.valorInicial), // Certifique-se de converter para número conforme necessário
                aporte: [
                    {
                        valor: parseFloat(body.valorMensal), // Valor mensal do formulário
                        mes: parseFloat(body.periodo), // Período do formulário
                    },
                ],
                periodo: {
                    valor: parseFloat(body.periodo), // Período do formulário
                    tipoPeriodo: 1, // Você pode ajustar conforme necessário
                },
                taxaJuros: {
                    valor: parseFloat(body.taxaDeJuros), // Taxa de juros do formulário
                    tipoPeriodo: 1, // Você pode ajustar conforme necessário
                },
            };
    
            // Convertendo o objeto para uma string JSON
            const jsonString = JSON.stringify(requestBody);
    
            // Enviando a requisição
            const response = await apiController.post({
                url: '/v1/Investimento',
                payload: jsonString,
                headers: {
                    'Content-Type': 'application/json', // Certifique-se de definir o cabeçalho 'Content-Type' corretamente
                },
            });
    
            console.log(response);
    
            return response;
        },
        [apiController, body]
    );
    
    


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


