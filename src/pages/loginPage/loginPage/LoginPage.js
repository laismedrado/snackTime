import React, { useState } from "react";
import { ContainerForm, MainContainer, ContainerBtn, ContainerFooter, ButtonLogin } from "./styles";
import useForm from '../../../hooks/useForm'
import { base_URL } from "../../../constants/URL"
import axios from "axios"
import { setToken } from "../../../helpers/localStorage";
import { Link } from "react-router-dom"
import { InputAdornment, TextField } from "@material-ui/core";
import { ContainerSubtitle } from "../../registerPage/adressRegisterPage/styles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../../../components/header/HeaderLogo";


export default function LoginPage() {

    const { form, onChange, clear } = useForm({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const onSubmitForm = (e) => {
        e.preventDefault()

        axios.post(`${base_URL}login`, form)
            .then(({ data }) => {
                setToken(data.token)
                navigate("/HomePage")
            })
            .catch((err) => {
                alert("Ops, deu algo errado! Tente novamente!")
                console.log(err)
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <MainContainer>
            <HeaderLogo />
            <ContainerSubtitle>
                <p>Entrar</p>
            </ContainerSubtitle>
            <ContainerForm onSubmit={onSubmitForm}>
                <TextField
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                    id="InputEmail"
                    variant="outlined"
                    label="E-mail"
                    placeholder="email@email.com.br"
                    fullWidth
                    margin="normal"
                    style={{ margin: 8 }}
                />

                <TextField
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    required
                    id="InputSenha"
                    variant="outlined"
                    placeholder="*****"
                    fullWidth
                    label="Senha"
                    margin="normal"
                    style={{ margin: 8 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" onClick={handleShowPassword}>
                                {showPassword ? <VisibilityIcon cursor="pointer" /> : <VisibilityOffIcon cursor="pointer" />}
                            </InputAdornment>
                        )
                    }}
                />
                <ContainerBtn>
                    <ButtonLogin>Entrar</ButtonLogin>
                </ContainerBtn>
            </ContainerForm>
            <ContainerFooter>
                <p>Não possui cadastro? </p>
                <p><Link style={{
                    color: 'inherit',
                    textDecoration: 'inherit',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginLeft:'5px'
                }}
                    to="/Basicregister">
                     Clique aqui
                </Link>
                </p>
            </ContainerFooter>
        </MainContainer>
    )
};

