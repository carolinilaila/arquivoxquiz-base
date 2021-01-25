import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import Link from 'next/link'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const StyleLink = {
    textDecoration: 'none',
    color: 'gray',
};

export default function Quiz() {
    return (

        <QuizBackground backgroundImage={db.bg}>
        <Head>
            <title>Quiz Arquivo X</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="Quiz Arquivo X" key="title" />
        </Head>
        <QuizContainer>
            <QuizLogo />
            <Widget>
            <Widget.Content>
                <h1>Quizes da Galera</h1>

                <p>Aguarde...</p>
                <Link href="/">
                    <a style={StyleLink}>Voltar para a Home</a>
                </Link>              
            </Widget.Content>
            </Widget>
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/carolinilaila" />
        </QuizBackground>
    );
}
  
