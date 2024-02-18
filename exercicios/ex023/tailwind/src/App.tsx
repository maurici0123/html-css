import { Card } from "./components/card";

export function App() {
  return (
    <>
      <h1 className="tracking-widest text-7xl text-center mt-11 text-slate-50">
        Hello world!
      </h1>

      <div className=" flex justify-start flex-wrap m-auto mt-20 w-[90%]">
        <Card />
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

      <div className="bg-teal-950 max-w-2xl min-w-40 h-52 grid grid-cols-8 m-auto mt-20 gap-2 text-center text-white text-xl">
        <div className=" bg-teal-600 box-border border-white border-2 col-span-2">1</div>
        <div className=" bg-teal-600 box-border border-white border-2">2</div>
        <div className=" bg-teal-600 box-border border-white border-2 row-span-2">3</div>
        <div className=" bg-teal-600 box-border border-white border-2">4</div>
        <div className=" bg-teal-600 box-border border-white border-2">5</div>
        <div className=" bg-teal-600 box-border border-white border-2">6</div>
        <div className=" bg-teal-600 box-border border-white border-2 row-span-2">7</div>
        <div className=" bg-teal-600 box-border border-white border-2">8</div>
        <div className=" bg-teal-600 box-border border-white border-2">9</div>
        <div className=" bg-teal-600 box-border border-white border-2">10</div>
        <div className=" bg-teal-600 box-border border-white border-2">11</div>
        <div className=" bg-teal-600 box-border border-white border-2">12</div>
        <div className=" bg-teal-600 box-border border-white border-2 col-span-2">13</div>
        <div className=" bg-teal-600 box-border border-white border-2 col-start-5 row-span-2">14</div>
        <div className=" bg-teal-600 box-border border-white border-2">15</div>
      </div>
    </>
  )
}