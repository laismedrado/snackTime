import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 7vh;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 25%);
    width: 100%;
    p {
        margin-right: 140px;
        font-weight: bold; 
    }

    figure {
        margin-right: 120px;
    }
`
export const LogoHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 20vh; 

    img{
        width: 100%;
    };
`;