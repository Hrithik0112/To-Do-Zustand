function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg">
          <h1 className="font-bold text-3xl">To-Do's</h1>
          <p className="text-xl">Add Your Tasks</p>
          <form>
            <div className=" mt-5">
              <input
                type="text"
                placeholder="Enter Your Tasks"
                className="w-full h-10 p-3 outline-black border border-gray-500 rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
