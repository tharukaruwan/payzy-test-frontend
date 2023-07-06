import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
export default function Home() {
  return (
    <div className="bg-hero w-screen h-screen bg-cover bg-fixed flex justify-center items-center">
      <NavBar />
      <Profile/>
    </div>
  );
}
