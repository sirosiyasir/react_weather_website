/* BU PROJENİN ÇALIŞMASI İÇİN node_modules'leri indirmelisiniz ve ardından src klasöründe ApiKey.jsx dosyası oluşturup kendi openweather apinizi , ApiKey() function'ı
içerisinde oluşturmalısınız. Daha sonra export etmeniz yeterlidir(Dosya ismi doğru olmalı ve function şeklinde olmalı. Api.jsx ve DefaultCitys klasöründeki dosyalarda
api key kullandım. İsterseniz dosyaların içerisinde oluşturduğum importları ve apikey constlarını silebilir ve yalnızca url içerisine apinizi ekleyebilirsiniz )*/
import Api from "./components/Api"
import Istanbul from "./components/DefaultCitys/Istanbul"
import Ankara from "./components/DefaultCitys/Ankara"
import Izmır from "./components/DefaultCitys/Izmır"
import Header from "./components/Header"

function App(props) {
  return (
    <div>
      <Header />
      <Api />
      <div className="default">
        {/* <Istanbul />
        <Ankara />
        <Izmır /> */}
      </div>
    </div>
  )
}

export default App
