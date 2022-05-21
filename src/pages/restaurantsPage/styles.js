import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 
export const Container = styled.div`
    margin-top:10vh;
    width: 92%;
    display: flex;
    flex-direction: column;

    .greenTitle {
        color: rgba(92, 182, 70, 70%);
        font-size: 22px;
    }


    h3 {
        margin-top: 2vh;
        border-bottom: 1px solid black;
    }
`
export const RestaurantInfo = styled.div`
    
    color: rgba(0, 0, 0, 25%);
    
    img {
        width: 100%;
        height: 20vh;
        border-radius: 10px 10px 0 0;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        
        .space{
            margin-left: 15px;
        }
    }

    p {
        margin-top: 10px;
    }
`
export const Card = styled.div`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 25%);
    border-radius: 8px;
    margin-top: 1vh;
    height: 20vh;
    width: 100%;
    margin-bottom: 1vh;

    img {
        height: 100%;
        width: 100%;
        border-radius: 9px 0px 0px 10px;
    }
`
export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 14px;
    width: 70%;
    border-radius: 20px;
    height: 100% ;
    justify-content: space-between;

    p {
        margin-top: 5px;
        font-size: 12px;

    }

    h2 {
        font-size: 14.5px;
    }
`
export const Price = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    align-self: flex-end;

    button {
            border: 1px solid green;
            color: green;
            height: 30px;
            width: 90px;
            background-color: rgba(255, 255, 255, 0%);
            border-radius: 10px 0 7px 0;
            align-self: flex-end;
            margin-left: 100px;
    }


`
export const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2 {
        margin-top:15px;
        font-size: 18px;
        color: rgba(92, 182, 70, 70%);

    }

    button {
            border: 1px solid green;
            color: green;
            height: 30px;
            width: 31px;
            background-color: rgba(255, 255, 255, 0%);
            border-radius: 0px 7px 0px 10px;
            align-self: flex-start;
            margin-left: 85px;
    }
`

export const ImageContainer = styled.div`
    width: 30%;
`
