import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { VideoPlayer } from "../components/VideoPlayer";

export function Event() {
  return (
    <div className="flex flex-col min-h-sree">
      <Header />
      <main className="flex flex-1">
        <VideoPlayer/>
        <SideBar/>
      </main>
    </div>
  );
}
