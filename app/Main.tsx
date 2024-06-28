'use client'

import { usePrivy } from "@privy-io/react-auth";
import { Auth } from "./Auth";
import { Component } from "./Component";

export function Main() {
  let { ready, authenticated } = usePrivy();
  if (!ready || !authenticated) {
    return <Auth />;
  } else {
    return <Component />;
  }
}
