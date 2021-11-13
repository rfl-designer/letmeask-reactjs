import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../componentes/Button'

export function NewRoom() {
  return (
    <div className="flex h-screen items-stretch">
    <aside className="flex flex-1 text-white-details flex-col py-32 px-20 bg bg-purple-base justify-center">
      <img className="w-80" src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong className="font-poppins font-bold text-4xl text-white-details  leading-10 mt-4">Crie salas de Q&amp;A</strong>
      <p className="text-2xl mt-4 text-white-background leading-8">Tire dúvidas da sua audiência em tempo real</p>
    </aside>
    <main className=" flex flex-col flex-1 px-8 items-center justify-center">
      <div className="container flex flex-col w-full max-w-xs items-stretch text-center">
        <img src={logoImg} alt="Letmeask" />
       <h2 className="text-2xl text-gray-shadow font-poppins font-bold mb-6 mt-14">Criar uma nova sala</h2>
        <form>
          <input className="::before ::after h-12 rounded-lg px-4 bg-white-details border border-solid border-gray-medium" type="text" placeholder="Nome da sala" />
        </form>

        <Button type="submit">
          Criar sala
        </Button>
        <p className="mt-4 text-sm text-gray-dark">Quer entrar em uma sala existente? <a className=" text-pink-dark" href="#">Clique Aqui</a></p>
      </div>
    </main>
  </div>
  )
}