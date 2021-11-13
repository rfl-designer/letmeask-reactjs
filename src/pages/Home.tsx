import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../componentes/Button'


export function Home() {
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
          <button className="mt-14 rounded-lg font-medium h-12 bg-danger-base text-white-details flex justify-center items-center cursor-pointer">
            <img className="self-center mr-2" src={googleIconImg} alt="" />
            Crie sua sala com o Google
          </button>
          <div className=" text-sm text-gray-medium my-8 flex items-center justify-center ">ou entre em uma sala</div>
          <form>
            <input className="::before ::after h-12 rounded-lg px-4 bg-white-details border border-solid border-gray-medium" type="text" placeholder="Digite o código da sala" />
          </form>

          <Button type="submit">
            Entrar na sala
          </Button>
        </div>
      </main>
    </div>
  )
}