/* BU PROJENİN ÇALIŞMASI İÇİN node_modules'leri indirmelisiniz ve ardından (BİRİNCİ YOL) src klasöründe ApiKey.jsx dosyası oluşturup kendi openweather apinizi , ApiKey() function'ı
içerisinde oluşturmalısınız. Daha sonra export etmeniz yeterlidir(Dosya ismi doğru olmalı ve function şeklinde olmalı. Api.jsx ve DefaultCitys klasöründeki dosyalarda
api keyi bu yöntemle kullandım.(İKİNCİ  YOL) İsterseniz dosyaların içerisinde oluşturduğum Apikey importlarını ve apikey constlarını silebilir ve yalnızca url içerisine apinizi ekleyebilirsiniz )*/
import Api from "./components/Api"
import Header from "./components/shared/Header.jsx"
import Footer from "./components/shared/Footer.jsx"
import DefaultCity from "./components/DefaultCitys/defaultCity"
import createCard from "./components/CreateCard"

function App() {
  return (
    <div>
      <Header />
      <Api />
      <div className="default">
        {/* .map yöntemiyle api'den gelen bilgileri createCard'a aktarıyoruz */}
        {DefaultCity().map(createCard)}
      </div>
      <Footer />
    </div>
  )
}

export default App
