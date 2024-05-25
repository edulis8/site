import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { cn } from "@/lib/utils";

const  useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  // use tailwind typography
  // https://github.com/tailwindlabs/tailwindcss-typography
  // can do this... it would replace the default h1 component in /[...slug]/page.tsx
  // h1: (props) => <h1 {...props} className={cn("text-9xl font-black")} />,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
