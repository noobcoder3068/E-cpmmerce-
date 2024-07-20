// import { Heading } from "lucide-react";
import Heading from "@/components/backend/Heading";
import LargeCards from "@/components/backend/LargeCards";
import SmallCards from "@/components/backend/SmallCards";

export default function Home() {
    return (
      <div className="">
         <Heading title="Dashboard Overview"/>
         <LargeCards />
         <SmallCards />
      </div>
    );
  }