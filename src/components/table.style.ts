import styled from 'styled-components';

type TableDataProps = {
    nearbyPlaces?: boolean;
}

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const STableRow = styled.tr<TableDataProps>`
    border-bottom: 4px solid ${props => props.nearbyPlaces ? '#fff' : '#F8F8FA' };  
    &:hover td {
        ${props => !props.nearbyPlaces && 'background-color: #F4F4F5'};
        ${props => !props.nearbyPlaces && 'cursor: pointer'};
     }
`;

export const STableHead = styled.th`
    background-color: #fff;
    padding: 20px 25px;
    text-transform: uppercase;
    text-align: left;
    color:  #B10065;
`;

export const STableData = styled.td<TableDataProps>`
    background-color: ${props => props.nearbyPlaces ? '#F8F8FA' : '#fff'};
    padding: 18px 25px;
`;