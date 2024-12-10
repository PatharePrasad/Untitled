import Aside from "@/components/Aside";
import Form from "@/components/Form";
import Header from "@/components/Header";

function Home() {
    return (
      <div className="min-h-screen bg-zinc-50 px-4 py-3 md:px-8">
        <Header />
        <main className="grid grid-cols-8 bg-red-100">
          <div className="col-span-2 hidden bg-green-300 md:block">
        <Aside />
        </div>
        <Form />
        </main>
      </div>
    );
  }
  
  export default Home;