import React from 'react';

const StyledHeader = styled.header`
  margin-top : 0px;
  background: white;
`;

const Body = styled.body`
    background: white;
`;

export default function Main() {
    return (
        <>
            <StyledHeader>
                <image href='./src/image/logo'></image>
                <p>Brand Story</p>
                <p>Syulist/Styling</p>
                <p>Shop</p>
                <p>My Page</p>
            </StyledHeader>
            <section>
                <banner></banner>
                <banner></banner>
                <banner></banner>
                <banner></banner>
            </section>
            <section>
                <p></p>
                <p>학교 가네3</p>
            </section>
            <bottom>instargram</bottom>
        </>
    );
}
