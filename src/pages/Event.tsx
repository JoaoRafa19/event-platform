import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { SideBar } from "../components/Sidebar";
import { VideoPlayer } from "../components/VideoPlayer";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-sree">
      <Header />
      <main className="flex flex-1">
        {slug ? <VideoPlayer lessonSlug={slug}/> : <div className="flex-1" />}
        <SideBar />
      </main>
    </div>
  );
}
