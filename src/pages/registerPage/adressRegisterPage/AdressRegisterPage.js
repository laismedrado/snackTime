import React from "react";
import { Container, ContainerForm, ContainerSubtitle, ContainerBtn } from "./styles";
import * as services from "../../../services/apiRequestAxios";
import Header from "../../../components/header/Header";
import useForm from "../../../hooks/useForm";
import { getToken, setToken } from "../../../helpers/localStorage";
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router-dom";

export default function AdressRegisterPage(){
    const {form, onChange} = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""        
    });
    const navigate = useNavigate();

    const registerAdress = (e) =>{
        e.preventDefault();
        services.request
        .put(`/address`, form,{
            headers:{
                auth : getToken()
            }
        })
        .then(({data}) => {
            setToken(data.token)
            navigate("/HomePage")
        })
        .catch((err) => {
            alert("Ops, algo eu errado! Tente novamente.")
            console.log(err.response.data)
        });
    };

    return(
        <Container>
            <Header/>
            <ContainerForm onSubmit={registerAdress}>
                <ContainerSubtitle>
                    <p>Meu endereço</p>
                </ContainerSubtitle>
                <TextField
                    name="street"
                    value={form.street}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
                    label="Logradouro"
                    placeholder="Rua / Av."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}                
                />
                <TextField
                    name="number"
                    value={form.number}
                    onChange={onChange}
                    type="text"
                    required
                    label="Número"
                    placeholder="Número"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}                
                />
                <TextField
                    name="complement"
                    value={form.complement}
                    onChange={onChange}
                    type="text"
                    required
                    label="Complemento"
                    placeholder="Apto / Bloco"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}                
                />
                <TextField
                    name="neighbourhood"
                    value={form.neighbourhood}
                    onChange={onChange}
                    type="text"
                    required
                    label="Bairro"
                    placeholder="Bairro"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}                
                />
                <TextField
                    name="city"
                    value={form.city}
                    onChange={onChange}
                    type="text"
                    required
                    label="Cidade"
                    placeholder="Cidade"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}                
                />
                <TextField
                    name="state"
                    value={form.state}
                    onChange={onChange}
                    type="text"
                    required
                    label="Estado"
                    placeholder="Estado"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}                
                />
                <ContainerBtn>
                    <button>Salvar</button>
                </ContainerBtn>
            </ContainerForm>
        </Container>
    )
};