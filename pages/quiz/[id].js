/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExternal }) {
  return (
    <ThemeProvider
      theme={dbExternal.theme}
    >
      <QuizScreen
        externalQuestions={dbExternal.questions}
        exteralBG={dbExternal.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [gitUser, projectName] = context.query.id.split('___');
  console.log('Infos do id da queryString', context.query);

  const dbExternal = await fetch(`https://${projectName}.${gitUser}.vercel.app/api/db`)
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }

      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });

  console.log('Retorno da api externa', dbExternal);

  return {
    props: {
      dbExternal,
    },
  };
}
