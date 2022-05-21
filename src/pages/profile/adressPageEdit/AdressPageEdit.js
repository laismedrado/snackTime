import React, { useEffect } from "react";
import { Container, ContainerForm, ContainerBtn } from "./style";
import * as services from "../../../services/apiRequestAxios";
import TextField from '@material-ui/core/TextField';
import Header from "../../../components/header/Header";
import useForm from "../../../hooks/useForm";
import { getToken } from "../../../helpers/localStorage";

export default function AdressPageEdit(){

    const { form, onChange, setForm } = useForm({});

    const getAdress = () =>{
        services.request
        .get(`/profile/address`,{
            headers:{
                auth: getToken()
            }
        })
        .then(({data}) => {
            setForm(data.address)
        })
        .catch((err) => {
            alert("Ops, algo deu errado! Tente novamente.")
            console.log(err)

        })
    };
    useEffect(()=>{
        getAdress()
    },[]);
    
    const editAdress = () =>{
        services.request
        .put(`address`, form,{
            headers : {
                auth : getToken()
            }
        })
        .then(alert("Endereço atualizado!"))
        .catch(err => alert(err.reponse.data))
    }

        
    return(
        <Container>
            <Header
                pageName={"Endereço"}
            />
            <ContainerForm onSubmit={editAdress}>
                <TextField
                    name="street"
                    value={form.street || ''}
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
                    value={form.number || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
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
                    value={form.complement || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
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
                    value={form.neighbourhood || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
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
                    value={form.city || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
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
                    value={form.state || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
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

}