import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import {
  authControllerGetSessionInfo,
  authControllerSignin,
} from "@/shared/api/generated";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  useEffect(() => {
    authControllerSignin({
      email: "alvaro_capibara@example.com",
      password: "qwerty12345",
    });
  });

  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
    </main>
  );
}
