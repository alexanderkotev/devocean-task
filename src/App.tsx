import React from 'react';
import styled from 'styled-components'
import Header from './components/Header';
import Businesses from './components/Businesses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleBusiness from './components/SingleBusiness';

const SAppLayout = styled.div`
  background-color: #F8F8FA;
  font-family: Georgia;
`;

const SContentWrapper = styled.div`
  padding: 50px;
`;

const App: React.FC<{}> = (): JSX.Element => {

  return (
    <BrowserRouter>
      <SAppLayout>
      <Header />
      <SContentWrapper>     
      <Routes>
        <Route path="/" element={<Businesses />} />
        <Route path="business/:id" element={<SingleBusiness />} />
        <Route
          path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
      </Routes>
      </SContentWrapper>
      </SAppLayout>
    </BrowserRouter>
  );
}

export default App;