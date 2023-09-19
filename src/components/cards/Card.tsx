import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren<{}>) {
  return (
    <div
      id="recipe-card"
      className="p-6 border border-gray-900 rounded-lg shadow transition-shadow hover:shadow-zinc-600 bg-zinc-900 h-3/5 min-w-max w-1/4"
    >
      {children}
    </div>
  );
}
