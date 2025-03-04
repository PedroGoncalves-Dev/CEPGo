const Sobre = () => {
  return (
    <>
      <section>
        <div className="mx-auto h-28 w-96 px-6 py-10">
          <h1 className="text-cinzaPrimary mb-4 text-center text-3xl font-bold">
            Sobre o CEPGo
          </h1>

          <div className="mx-auto h-1 w-1/2 rounded-full bg-azulPrimary"></div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          <div className="space-y-5 rounded-lg bg-white px-7 py-4 shadow-md">
            <div className="h-2 rounded-full bg-azulPrimary"></div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold">Objetivo da aplicação</h3>

              <p className="text-cinzaPrimary text-sm leading-relaxed">
                Objetico principal é cadastar endereços apenas por meio do CEP
                digitado, o usuário pode cadastar o mesmo endereço quantas vezes
                quiser, só que cada endereço tera o seu próprio ID.
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-lg bg-white px-7 py-4 shadow-md">
            <div className="h-2 rounded-full bg-azulPrimary"></div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold">Funcionalidades</h3>

              <p className="text-cinzaPrimary text-sm leading-relaxed">
                Cadastro de endereço com dupla persistência: em array na
                aplicação e no localStorage do navegador, garantindo
                armazenamento permanente. Busca flexível por CEP, logradouro,
                complemento, bairro, cidade e UF. Funcionalidades na tabela
                incluem copiar CEP, visualizar detalhes, abrir localização no
                Google Maps e excluir endereço.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6 rounded-lg bg-white px-7 py-4 text-center shadow-md">
          <div className="mx-auto h-2 w-3/5 rounded-full bg-azulPrimary md:w-1/5"></div>

          <div className="space-y-5">
            <h3 className="text-xl font-bold">
              Tecnologias e bibliotecas utilizadas
            </h3>

            <p className="text-cinzaPrimary text-sm leading-relaxed">
              A integração de{" "}
              <span className="font-semibold text-black">React</span> com{" "}
              <span className="font-semibold text-black">TypeScript</span>{" "}
              proporciona um desenvolvimento mais seguro e escalável, com
              tipagem estática e detecção precoce de erros. O{" "}
              <span className="font-semibold text-black">Tailwind CSS</span>{" "}
              acelera a estilização com suas classes utilitárias pré-definidas.{" "}
              <span className="font-semibold text-black">Axios</span> simplifica
              requisições HTTP assíncronas, enquanto{" "}
              <span className="font-semibold text-black">
                TanStack Query(react query)
              </span>{" "}
              otimiza o gerenciamento de estado e cache de dados do servidor.{" "}
              <span className="font-semibold text-black">React Router DOM</span>{" "}
              facilita a navegação entre páginas em aplicações single-page. Para
              formulários,{" "}
              <span className="font-semibold text-black">React Hook Form</span>{" "}
              oferece uma solução eficiente, complementada pelo{" "}
              <span className="font-semibold text-black">Zod</span> para
              validação robusta de schemas. A biblioteca{" "}
              <span className="font-semibold text-black">UUID</span> garante a
              geração de identificadores únicos, essencial para o cadastro de
              entidades como CEPs. A interface do usuário é aprimorada com{" "}
              <span className="font-semibold text-black">Shadcn UI</span>,
              proporcionando componentes modernos e consistentes. Esta stack
              tecnológica promove o desenvolvimento de aplicações web modernas,
              performáticas e de fácil manutenção.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
