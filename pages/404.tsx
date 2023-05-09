import Button from '@/components/button/Button'
import MeteorText from '@/components/text/MeteorText'
import React from 'react'

type Props = {}

function FourOhFour({}: Props) {
  return (
    <main className="wfull h-screen bg-slate-900 text-white flex flex-col gap-10 items-center justify-center ">
    <div className=" text-9xl flex flex-col items-center">
      <h2 className="text-xl">Erreur:</h2>
      <MeteorText content="404" delay={0} />
    </div>
    <div className="text-xl">
      <p>Il n&apos;y à rien ici, pour le moment ...</p>
    </div>
    <div className="capitalize text-xl">
      <Button content="Retourner à l'accueil" href='/'/>
    </div>
  </main>
  )
}

export default FourOhFour