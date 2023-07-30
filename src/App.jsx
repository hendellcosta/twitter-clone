import Feed from "./components/Feed"
import SideColumn from "./components/SideColumn"
import SideMenu from "./components/SideMenu"

function App() {

  return (
    <>
    <main className="hidden desktop:flex flex-row justify-between px-[5.625rem] bg-[#17202A] text-white py-[1.25rem]">
      
      <SideMenu />
      <Feed />
      <SideColumn />
    </main>
    <main className="flex items-center justify-center text-center desktop:hidden bg-[#17202A] text-white w-full h-[100vh]">
      <h1 className="text-6xl font-bold px-4">Not Available Yet</h1>
      </main>
    </>
  )
}

export default App
