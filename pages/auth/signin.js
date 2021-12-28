import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header/Header";

//browser render
function Login({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen">
        <img className="w-80" src="https://i.imgur.com/17H9vIi.png " />
        <p className="italic text-xs">
          This is not a REAL app, it is built for educational purposes only
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white "
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//server side render
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default Login;
