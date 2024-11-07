import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="flex flex-col h-full max-w-[500px] p-8 mx-auto">
        <Image
          src="/public/logo.png"
          alt="Finance AI"
          width={173}
          height={39}
        />
        <h1 className="text-4xl font-bold">Bem-vindo</h1>
        <p>
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.
        </p>
      </div>

      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/public/login.png"
          alt="Faça login"
          fill
          className="object-cover" />
      </div>
    </div>
  );
}

export default LoginPage;