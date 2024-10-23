"use client";
import { useRouter } from "next/navigation";

type RouterProps = {
  to: string;
  children: React.ReactNode;
};

const Router = ({ to, children }: RouterProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-200"
    >
      {children}
    </button>
  );
};

export default Router;
