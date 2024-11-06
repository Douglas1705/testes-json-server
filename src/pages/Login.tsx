import { SignIn } from '@clerk/clerk-react';

function LoginPage() {
  return (
    <div className="container mx-auto my-8 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl="/kanban"
        appearance={{
          elements: {
            card: "shadow-lg p-8",
            header: "text-2xl font-bold mb-4",
            button: "w-full p-2 mt-4 bg-blue-500 text-white rounded",
          },
        }}
      />
    </div>
  );
}

export default LoginPage;
