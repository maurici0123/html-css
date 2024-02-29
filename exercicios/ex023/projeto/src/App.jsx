import { IoIosSearch } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6"
import { BiLogoInstagramAlt } from "react-icons/bi";

function App() {
  return (
    <main className="bg-gray-50">

      {/* header */}
      <header className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="text-3xl tracking-wider text-cyan-800">LOGO</div>

        <ul className="flex max-sm:grid text-sm max-sm:grid-rows-2 max-sm:grid-cols-2 gap-3 gap-x-8">

          <li className="text-gray-700 hover:text-gray-900 hover:underline">
            <a href="#">Como reservar</a>
          </li>
          <li className="text-gray-700 hover:text-gray-900 hover:underline inline-block">
            <a href="#">Sobre nós</a>
          </li>
          <li className="text-gray-700 hover:text-gray-900 hover:underline">
            <a href="#">Informações</a>
          </li>
          <li className="text-gray-700 hover:text-gray-900 hover:underline text-left">
            <a href="#">Contato</a>
          </li>
        </ul>
      </header>
      {/* header */}

      {/* banner */}
      <div id="banner" className=" h-[450px] bg-cover mb-16">
        <div className="container h-full mx-auto px-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h1 className="text-3xl text-gray-100 mb-3">Onde você quer ir?</h1>
            <p className="text-green-100 mb-7">Escolha o estado e cidade para achar os melhores resorts.</p>
          </div>

          <div className="font-semibold text-gray-950 flex max-sm:flex-col max-sm:justify-center sm:space-x-4 max-sm:space-y-4">
            <select className="p-3 max-sm:p-1 pr-8  rounded border border-gray-600 outline-gray-600">
              <option value="">Escolha estado</option>
            </select>

            <select className="p-3 max-sm:p-1 pr-8 rounded border border-gray-600 outline-gray-600">
              <option value="">Escolha cidade</option>
            </select>

            <button className="bg-orange-500 p-3 max-sm:p-1 rounded"><IoIosSearch className="inline-block mx-1 text-xl" /> Pesquisar resorts</button>
          </div>

        </div>
      </div>
      {/* banner */}

      {/* featured resort */}
      <div className="container mx-auto px-6 flex items-center max-md:flex-col">
        <div className="w-1/2 space-y-5 text-gray-600 font-medium tracking-tight max-md:w-4/5">
          <p>RESORT EM DESTAQUE</p>

          <h2 className="text-4xl font-semibold">Ecoresort Praia do Forte Bahia</h2>
          
          <p className="text-gray-500">Hotel qualidade 5 estrelas</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia rerum animi ullam eum sequi, perferendis vel cum nobis officiis delectus at incidunt nostrum earum pariatur dolore odio libero reprehenderit sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum eos, nulla nesciunt maiores assumenda architecto distinctio ex temporibus doloremque eveniet!</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore necessitatibus perferendis laboriosam delectus magnam quisquam, ipsam sunt minus nobis excepturi quam et velit, expedita labore iusto.</p>

          <button className="bg-orange-500 py-1 px-5 rounded text-gray-800">Solicitar reserva <IoArrowForward className="inline-block ml-2"/></button>
        </div>

        <div className="bg-slate-300 w-2/5 h-72 mx-auto bg-cover bg-bottom rounded max-md:mt-14 max-md:w-full" id="featured">
        </div>
      </div>
      {/* featured resort */}

      {/* resorts grid */}
      <div className="container mx-auto px-6 my-20 "> 
        <h2 className="text-center text-2xl text-gray-600 font-semibold mb-12">Conheça mais resorts</h2>

        <div className="grid grid-cols-4 max-md:grid-cols-2 grid-rows-2 max-md:grid-rows-6 w-10/12 h-96 gap-6 mx-auto">
          <div className="col-span-2 row-span-2 bg-cover bg-center rounded text-white font-semibold relative shadow-teal-900 shadow-[inset_0_-5px_30px]" id="grid-1">
            <p className="absolute bottom-0 m-1">Beach Park Resort</p>
          </div>
          <div className="col-span-2 max-md:row-span-2 bg-cover bg-center rounded text-white font-semibold relative shadow-teal-900 shadow-[inset_0_-5px_30px]" id="grid-2">
            <p className="absolute bottom-0 m-1">Resort palladium</p>
          </div>
          <div className="bg-cover max-md:row-span-2 bg-center rounded text-white font-semibold relative shadow-teal-900 shadow-[inset_0_-5px_30px]" id="grid-3">
            <p className="absolute bottom-0 m-1">Resort magic</p>
          </div>
          <div className="bg-cover max-md:row-span-2 bg-center rounded text-white font-semibold relative shadow-teal-900 shadow-[inset_0_-5px_30px]" id="grid-4">
            <p className="absolute bottom-0 m-1">Resort La torre</p>
          </div>
        </div>
      </div>
      {/* resorts grid */}

      {/* form search */}
      <div className="container flex justify-center mx-auto px-6 font-semibold text-gray-900 mb-20 max-sm:flex-col sm:space-x-4 max-sm:space-y-4">
        <select className="p-3 pr-8 rounded border border-gray-600 outline-gray-600">
          <option value="">Escolha estado</option>
        </select>

        <select className="p-3 pr-8 rounded border border-gray-600 outline-gray-600">
          <option value="">Escolha cidade</option>
        </select>

        <button className="bg-orange-500 p-3 rounded"><IoIosSearch className="inline-block mx-1 text-xl" /> Pesquisar resorts</button>
      </div>
      {/* form search */}

      {/* footer */}
      <hr className=" border-t-2 border-gray-300"/>
      
      <footer className="container px-6 mx-auto flex justify-between mb-20 pt-8">
        <div className="text-3xl tracking-wider text-cyan-800">LOGO</div>

        <div className="flex items-center space-x-4 text-xl">
        <FaFacebookF className="cursor-pointer hover:fill-cyan-800"/>

        <BiLogoInstagramAlt className="text-2xl cursor-pointer hover:fill-cyan-800" />
        </div>

      </footer>
      {/* footer */}

    </main>
  )
}

export default App