import { Card } from "./components/card";

export function App() {
  return (
    <>
      <h1 className="tracking-widest text-7xl text-center mt-11 text-slate-950 sm:text-slate-50">
        Hello world!
      </h1>

      <div className=" flex gap-8 flex-wrap m-auto mt-20 w-[90%]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <button className="bg-green-300 text-green-950 py-4 px-5 rounded-lg m-auto my-10 block hover:ring-4 hover:ring-green-200 text-lg">
        ENVIAR
      </button>

      <div className="text-white bg-blue-600 p-10 bg-opacity-20 bg-gradient-to-tr from-emerald-400 via-10% via-emerald-500 to-emerald-900">
        Lorem ipsum dolor sit amet consapplies the same CSS properties as 'fec'from-90%' applies the same CSS properties as 'from-30%'.(cssConflict)
        tetur adipisicing elit. Quaerat architecto exercitationem ducimus minus repellendus est! Sed consectetur rerum at totam quas libero vero distinctio autem fugit fugiat, laboriosam corporis tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id omnis! Alias ratione, neque sunt voluptas suscipit assumenda praesentium, nisi repellendus delectus vero eius quos dicta nostrum molestiae fugit odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia atque eos sequi accusantium recusandae, odit, expedita reprehenderit dolorum aperiam aut suscipit dolorem. Repellendus doloremque magni maxime dolorum amet! Nobis.
      </div>

      <div className="group bg-teal-950 hover:bg-teal-800 w-9/12 h-52 grid grid-cols-8 m-auto mt-20 gap-2 text-center text-white text-xl">
        <div className=" bg-teal-600 box-border border-white border-2 col-span-2">1</div>
        <div className=" bg-teal-600 box-border border-white border-2">2</div>
        <div className=" bg-teal-600 box-border border-white border-2 row-span-2">3</div>
        <div className=" bg-teal-600 box-border border-white border-2">4</div>
        <div className=" bg-teal-600 box-border border-white border-2">5</div>
        <div className=" bg-teal-600 box-border border-white border-2">6</div>
        <div className=" bg-teal-600 box-border border-white border-2 row-span-2">7</div>
        <div className=" bg-teal-600 box-border border-white border-2">8</div>
        <div className=" bg-teal-600 box-border border-white border-2 group-hover:bg-gray-700">9</div>
        <div className=" bg-teal-600 box-border border-white border-2">10</div>
        <div className=" bg-teal-600 box-border border-white border-2">11</div>
        <div className=" bg-teal-600 box-border border-white border-2">12</div>
        <div className=" bg-teal-600 box-border border-white border-2 col-span-2">13</div>
        <div className=" bg-teal-600 box-border border-white border-2 col-start-5 row-span-2">14</div>
        <div className=" bg-teal-600 box-border border-white border-2">15</div>
      </div>

      <div className="group bg-indigo-400 p-5 m-auto w-28 text-center mt-10 rounded-md shadow-lg shadow-indigo-600">
        <h1 className="group-hover:font-bold group-hover:text-xl">HOVER</h1>
      </div>

      <input type="text" placeholder="NOME" className="block mx-auto my-16 p-2 bg-gray-300 rounded-md focus:outline-none border-2 border-gray-600 focus:shadow-[0_0_60px] focus:shadow-white"/>

      <div className="mx-auto bg-slate-300 px-14 rounded-md w-1/3 min-w-72">
        <h1 className="text-center text-3xl my-6 text-teal-600 font-semibold">LOGIN</h1>

        <div>
          <label htmlFor="email" className="text-lg text-teal-600 font-semibold">email</label> <br />
          <input type="email" id="email" className="bg-slate-300 boreder border-b-2 border-slate-500 w-full outline-none mb-5"/>
        </div>

        <div>
          <label htmlFor="password" className="text-lg text-teal-600 font-semibold">senha</label> <br />
          <input type="password" id="password" className="bg-slate-300 boreder border-b-2 border-slate-500 w-full outline-none mb-5"/>
        </div>

        <a href="#" className="text-sm text-gray-800">Esqueci minha senha</a>

        <div className="text-center">
        <button type="submit" className="bg-teal-600 mt-6 w-full py-3 text-lg tracking-wider text-white mb-8 rounded-sm hover:scale-105 shadow-lg hover:shadow-teal-300">Submit</button>
        </div>
      </div>
    </>
  )
}