import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBusinesses } from '../hooks/useBusinesses';
import { STable, STableRow, STableHead, STableData } from './table.style';

const Businesses: React.FC<{}> = (): JSX.Element => {
    const navigate = useNavigate();
    const { status, data: businesesData, error, isFetching } = useBusinesses();

    console.log(businesesData);

    return (
        <>
        {error && <p>An error occured, please try again later.</p>}
        {isFetching && <p>Fetching...</p>}    
            <STable>
                <thead>
                    <STableRow>
                        <STableHead>Name</STableHead>
                        <STableHead>Description</STableHead>
                    </STableRow>
                </thead>
                <tbody>
                    {businesesData?.map(b => (
                        <STableRow key={b.id} onClick={() => navigate(`/business/${b.id}`)}>
                            <STableData>{b.name}</STableData>
                            <STableData>{b.description}</STableData>
                        </STableRow>
                    ))}
                </tbody>
            </STable>
        </>
    );
}

export default Businesses;