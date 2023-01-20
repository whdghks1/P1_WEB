import React from 'react';

const StyledHeader = styled.header`
  margin-top : 0px;
  background-color: white;
`;

export default function Main() {
    return (
        <>
            <StyledHeader>
                <p>Brand Story</p>
                <p>Syulist/Styling</p>
                <p>Shop</p>
                <p>My Page</p>
            </StyledHeader>
            <bottom></bottom>
        </>
    );
}
