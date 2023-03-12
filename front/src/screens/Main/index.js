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
                <div>
                    <div>
                        <p>이용안내</p>
                        <p>고객센터</p>
                        <p>로그인</p>
                        <p>회원가입</p>
                    </div>
                    <div>
                        <image href='./src/image/logo'></image>
                        <p>Brand Story</p>
                        <p>Syulist/Styling</p>
                        <p>Shop</p>
                        <p>My Page</p>
                    </div>
                </div>
            </StyledHeader>
            <section>
                <banner></banner>
                <banner></banner>
                <banner></banner>
                <banner></banner>
            </section>
            <section>
                <p>야근하고 등교는 힘들구만</p>
                <p></p>
            </section>
            <bottom>instargram</bottom>
        </>
    );
}
