import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project Classifieds" },
    { name: "description", content: "Welcome to Project Classifieds!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
