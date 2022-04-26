import styled from 'styled-components';

export const SImageWrapper = styled.div`
    height: 300px;
    text-align: center;
`;

export const SBusinessImage = styled.img`
    height: 100%;
`;

export const SInformationWrapper = styled.div`
    display: flex;
    padding: 40px;
`;

export const SContactInformation = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1;
`;

export const SContactInner = styled.div`
    & h2 {
        margin-bottom: 30px;
    }
    & p {
        margin: 5px 0;
    }
`;

export const SNearbyPlaces = styled.div`
    flex-grow: 1;
    background-color: #fff;
    padding: 0 20px;
`;