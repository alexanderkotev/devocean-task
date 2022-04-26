import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusinesses } from '../hooks/useBusinesses';
import { SBusinessImage, SContactInformation, SContactInner, SImageWrapper, SInformationWrapper, SNearbyPlaces } from './single-business.style';
import { STable, STableRow, STableData } from './table.style';

const SingleBusiness: React.FC<{}> = (): JSX.Element => {
    const params = useParams();
    const { status, data: businesesData, error, isFetching } = useBusinesses();
    const business = businesesData?.find(el => el.id === params.id);
    const nearbyPlaces = [
        {
            id: 1,
            name: 'Place 1',
            address: 'Nearby place address'
        },
        {
            id: 2,
            name: 'Place 2',
            address: 'Nearby place address'
        },
        {
            id: 3,
            name: 'Place 3',
            address: 'Nearby place address'
        },
        {
            id: 4,
            name: 'Place 4',
            address: 'Nearby place address'
        }
    ];
       
    return (
        <>
         {error && <p>An error occured, please try again later.</p>}
        {isFetching && <p>Fetching...</p>}   
            <SImageWrapper>
                <SBusinessImage src={business?.image}></SBusinessImage>
            </SImageWrapper>
           <SInformationWrapper>
                <SContactInformation>
                    <SContactInner>
                        <h2>Address</h2>
                        <p>{`${business?.address.number} ${business?.address.street}`}</p>
                        <p>{`${business?.address.country} ${business?.address.zip}`}</p>
                    </SContactInner>
                    <SContactInner>
                        <h2>Contact</h2>
                        <p>{business?.phone}</p>
                        <p>{business?.email}</p>
                    </SContactInner>
                </SContactInformation>
                <SNearbyPlaces>
                    <h2>Nearby Places</h2>
                        <STable>
                        <tbody>
                            {nearbyPlaces?.map(b => (
                            <STableRow nearbyPlaces key={b.id}>
                                <STableData nearbyPlaces>{b.name}</STableData>
                                <STableData nearbyPlaces>{b.address}</STableData>
                            </STableRow>
                            ))}
                        </tbody>
                        </STable>
                </SNearbyPlaces>
           </SInformationWrapper>
        </>
    );
}

export default SingleBusiness;