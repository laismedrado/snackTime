import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 80vh;

    button {
        width: 90vw;
        height: 3rem;
        border: none;
        border-radius: 5px;
        background-color: #5CB646;
        font-weight: bold;
    };
`;
export const ContainerSubtitle = styled.div`
    margin: 0 0 8px 0;
`;
export const ContainerBtn = styled.div`
    margin: 8px 0 0 0;
`;
export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 20vh;    

    img{
        width: 50%;
        height: 70%;
    };
`;
export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0 0 0;
`;
