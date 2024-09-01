import { NextJSSlug } from "@/types/nextjs";
import Image from "next/image";

const DealSlugPage = ({params}:NextJSSlug) => {
  return (
    <>
      <main className="flex flex-col min-h-screen  items-center p-24">
        <p>SLUG</p>
        <p>{params.slug}</p>
      </main>
    </>
  );
}

export default DealSlugPage;