import React from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { RiFacebookCircleFill } from 'react-icons/ri'; 
import { FcGoogle } from 'react-icons/fc';

type OAuthStrategy = 'oauth_google' | 'oauth_facebook';

const CustomSignInButton = ({ provider, icon }: { provider: OAuthStrategy, icon: React.ReactNode }) => {
  const { signIn } = useSignIn();

  const handleSignIn = async () => {
    try {
      if (signIn) {
        await signIn.authenticateWithRedirect({
          strategy: provider,
          redirectUrl: window.location.origin,
          redirectUrlComplete: `${window.location.origin}/complete`, // Ajuste conforme necessário
        });
      } else {
        console.error('signIn não está definido.');
      }
    } catch (error) {
      console.error(`Erro ao autenticar com ${provider}:`, error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-white text-white rounded-full flex justify-center items-center w-auto h-16"
    >
      <div className="text-3xl text-blue-500 border-2 border-black px-8 py-3 rounded-full">
        {icon}
      </div>
    </button>
  );
};

function LoginPage() {
  return (
    <div className="container mx-auto my-8 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="flex flex-row items-center space-x-4">        
        <CustomSignInButton provider="oauth_facebook" icon={<RiFacebookCircleFill />} />
        <CustomSignInButton provider="oauth_google" icon={<FcGoogle />} />
      </div>
    </div>
  );
}

export default LoginPage;
