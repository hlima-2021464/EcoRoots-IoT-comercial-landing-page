/// <reference types="vite/client" />

declare module "*.jsx" {
  import type { ComponentType, PropsWithChildren } from "react";
  const Component: ComponentType<PropsWithChildren<Record<string, unknown>>>;
  export default Component;
}
