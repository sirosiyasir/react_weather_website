// oluşturduğum .jsx'leri import ediyorum
import Api from "./components/Api"
import Istanbul from "./components/DefaultCitys/Istanbul"
import Ankara from "./components/DefaultCitys/Ankara"
import Izmır from "./components/DefaultCitys/Izmır"

function App(props) {
  return (
    <div>
      <Api />
      <div className="default">
        <Istanbul />
        <Ankara />
        <Izmır />
      </div>
    </div>
  )
}

export default App
