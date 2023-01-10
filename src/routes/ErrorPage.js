import styled from 'styled-components'

const ErrorDiv = styled.div`
    margin-top: 25%;
    height: 100vh;
    text-align: center;
`

const TitleH1 = styled.h1`
    color: white;
    font-family: var(--title);
    font-size: 10rem;
    text-shadow: 5px 5px black;
    letter-spacing: 1rem;
`

export default function ErrorPage() {
    return (
        <ErrorDiv>
            <TitleH1>Page doesn't exist, sucka!</TitleH1>
        </ErrorDiv>
    )
}