import { getAllPosts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Testimonials from "@/components/Testimonials";
import BuildLog from "@/components/BuildLog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Testimonials />
        <BuildLog posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
