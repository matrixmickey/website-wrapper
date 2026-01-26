import Authorization from "@/components/Authorization";
import Wrapper from "@/components/Wrapper";

export default async function Home() {

  return (
    <div className="page">
      <Wrapper authorization={<Authorization />} />
    </div>
  );
}