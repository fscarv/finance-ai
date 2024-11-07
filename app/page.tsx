import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/Login");
  }

  return (
    <div className="h-full flex w-screen items-center justify-center">
      <UserButton 
      showName 
      appearance={{
        baseTheme: dark,
      }}/>
    </div>
  );
};

export default Home;
