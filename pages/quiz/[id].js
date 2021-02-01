/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import React from 'react';

export default function QuizDaGaleraPage() {
  return (
    <div>
      Desafio da próxima aula junto com as animações
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('Infos do id da queryString', context.query);

  const dbExternal = await fetch('https://starwars-quiz.vercel.app')
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor;
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

    },
  };
}
