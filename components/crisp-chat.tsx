"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e2563cfd-f7ce-4378-a4b6-e2aaa3f72b8a");
  }, []);

  return null;
};
