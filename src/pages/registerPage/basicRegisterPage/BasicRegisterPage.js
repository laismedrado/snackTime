import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as services from "../../../services/apiRequestAxios";
import useForm from "../../../hooks/useForm";
import { setToken } from "../../../helpers/localStorage";
import { 
    Container, 
    ContainerForm, 
    ContainerBtn, 
    ContainerSubtitle, 
    Header, 
    ContainerFooter
} from "./styles";
import logo from "../../../assets/snack_logo_black.png";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderLogo from "../../../components/header/HeaderLogo";

export default function BasicRegisterPage(){
    const { form, onChange } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const register = (e) => {
        e.preventDefault();
        const {name, email, cpf, password} = form;
        const body = {
            name,
            email,
            cpf,
            password
        };
        form.password === form.confirmPassword &&
        services.request
        .post(`/signup`, body)
        .then(({data}) => {
            setToken(data.token)
            navigate("/Adressregister")
        })
        .catch(() => toast.error("Email ou CPF já cadastrados!"));
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    return(
        <Container>
            <ToastContainer theme={"colored"}/>
            <Header>
                <img src={logo}></img>
            </Header>
            <ContainerForm onSubmit={register}>
                <ContainerSubtitle>
                    <p style={{fontWeight:'bold'}}>Cadastrar</p>
                </ContainerSubtitle>
                <TextField
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    required
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    fullWidth
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <TextField
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
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
                    value={form.cpf}
                    onChange={onChange}
                    required
                    label="CPF"
                    placeholder="000.000.000-00"
                    fullWidth
                    margin="normal"
                    inputProps={{pattern: "^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"}}
                    title="Exemplo: 000.000.000-00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <TextField
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    required
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    inputProps={{ pattern: "^.{6,}" }}
                    title="A senha deve ter no mínimo 6 caracteres!"
                    style={{ margin: 8 }}
                    InputProps = {{
                        endAdornment:(
                            <InputAdornment 
                                position="end" 
                                onClick={handleShowPassword}
                            >
                                {
                                    showPassword ? 
                                    <VisibilityIcon cursor="pointer"/> : 
                                    <VisibilityOffIcon cursor="pointer"/>
                                }   
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    error={
                        form.password !== form.confirmPassword && true
                    }
                    id="outlined-error-helper-text"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    required
                    label="Confirmar"
                    placeholder="Confirme a senha anterior"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    inputProps={{ pattern: "^.{6,}" }}
                    title="A senha deve ter no mínimo 6 caracteres!"
                    style={{ margin: 8}}
                    helperText={
                        form.confirmPassword !== "" 
                        && form.password !== form.confirmPassword 
                        && <p style={{color:'red'}}>Deve ser a mesma que a anterior</p>
                    }
                    InputProps = {{
                        endAdornment:(
                            <InputAdornment 
                                position="end" 
                                onClick={handleShowPassword}
                            >
                                {
                                    showPassword ? 
                                    <VisibilityIcon cursor="pointer"/> : 
                                    <VisibilityOffIcon cursor="pointer"/>
                                }   
                            </InputAdornment>
                        )
                    }}
                    />
                <ContainerBtn>
                    <button>Criar</button>
                </ContainerBtn>
                <ContainerFooter>
                    <p>Já possui uma conta?</p>
                    <p>
                        <Link 
                            style={
                                { 
                                    color: 'inherit', 
                                    textDecoration: 'inherit',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }
                            } 
                            to="/login"
                        > 
                            Login
                        </Link>
                    </p>
                </ContainerFooter>
            </ContainerForm>
        </Container>
    )
};