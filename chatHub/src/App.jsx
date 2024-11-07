  import List from "./components/List/List"
  import Detail from "./components/Detail/Detail"
  import Chat from "./components/Chat/Chat"

  function App() {

    return (
      <>
        <div className="container">
          <List/>
          <Chat/>
          <Detail/>
        </div>
      </>
    )
  }

  export default App
