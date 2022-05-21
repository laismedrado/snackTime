import React, { useState, useContext } from 'react'
import { Card, InfoCard, Price, ImageContainer, Quantity, Description } from './styles'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { FormControl, MenuItem, Select } from "@material-ui/core"
import GlobalStateContext from "../../global/GlobalStateContext";
import Button from "@material-ui/core/Button";

export const RestaurantCard = (props) => {

    const { cart, setCart, addToCart, onAdd } = useContext(GlobalStateContext);


    //váriavel com o estado do botão
    const [open, setOpen] = useState(false)

    //função que muda o estado para true e abre
    const handleClickOpen = () => {
        setOpen(true)
    }
    
    //função que muda o estado para false e fecha
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card>
            <ImageContainer>
                <img src={props.photo} alt="foto do lanche" />
            </ImageContainer>
            <InfoCard>
                <Quantity>
                    <h2>{props.name}</h2>
                    <button>2</button>
                </Quantity>
                
                <div>{props.description}</div>
                <Price>
                    <h6>R$ {props.price}0</h6>   
                    <button onClick={handleClickOpen}>Adicionar</button> 

                    {/* configurações da caixa de dialogo */}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Selecione a quantidade desejada</DialogTitle>
                        <DialogContent>
                            <FormControl>
                                <Select
                                    id="demo-simple-select-autowidth"
                                    autoWidth
                                    // value={form.quantity}
                                    // onChange={}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=> onAdd(props.product)} color="primary">
                                Adicionar Ao Carrinho
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Price>
            </InfoCard>  
        </Card>
    )
}