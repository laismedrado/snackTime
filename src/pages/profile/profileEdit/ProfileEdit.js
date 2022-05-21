import React, { useEffect } from "react";
import Header from "../../../components/header/Header";
import TextField from '@material-ui/core/TextField';
import { Container, ContainerForm, ContainerBtn } from "./styles";
import useForm from "../../../hooks/useForm";
import * as services from "../../../services/apiRequestAxios";
import { getToken } from "../../../helpers/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfileEdit(){
    const { form, onChange, setForm } = useForm({});

    const profileUser = () =>{
        services.request
        .get(`/profile`,{
            headers:{
                auth: getToken()
            }
        })
        .then(({data}) => setForm(data.user))
        .catch(err => console.log(err));
    };

    const editProfile = (e) =>{
        e.preventDefault();
        services.request
        .put(`profile`, form,{
            headers : {
                auth : getToken()
            }
        })
        .then(() => toast.success("Perfil atualizado!"))
        .catch(() => toast.error("Email ou CPF já cadastrados!"));
    };

    useEffect(()=>{
        profileUser();
    },[]);

    return(
        <Container>
            <ToastContainer autoClose="2000" theme={"colored"}/>
            <Header pageName={"Editar"}/>
            <ContainerForm onSubmit={editProfile}>
            <TextField
                    name="name"
                    value={form?.name || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <TextField
                    name="email"
                    value={form?.email || ''}
                    onChange={onChange}
                    type="email"
                    required
                    id="outlined-full-width"
                    label="E-mail"
                    placeholder="email@email.com"
                    fullWidth
                    margin="normal"
                    inputProps={{pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"}}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <TextField
                    name="cpf"
                    value={form?.cpf || ''}
                    onChange={onChange}
                    required
                    id="outlined-full-width"
                    label="CPF"
                    placeholder="000.000.000-00"
                    fullWidth
                    margin="normal"
                    inputProps={{pattern: "^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"}}
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
    );
};