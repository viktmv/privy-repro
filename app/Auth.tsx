'use client' 

import { useLogin } from "@privy-io/react-auth";

export function Auth() {
  const { login } = useLogin({
    onError(error) {
      console.log("🔑 🚨 Login error", { error });
    },
  });

  return (
    <button
      type="button"
      onClick={login}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Login
    </button>
  );
}
