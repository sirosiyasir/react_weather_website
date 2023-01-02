/* BU PROJENİN ÇALIŞMASI İÇİN node_modules'leri indirmelisiniz ve ardından (BİRİNCİ YOL) src klasöründe ApiKey.jsx dosyası oluşturup kendi openweather apinizi , ApiKey() function'ı
içerisinde oluşturmalısınız. Daha sonra export etmeniz yeterlidir(Dosya ismi doğru olmalı ve function şeklinde olmalı. Api.jsx ve DefaultCitys klasöründeki dosyalarda
api keyi bu yöntemle kullandım.(İKİNCİ  YOL) İsterseniz dosyaların içerisinde oluşturduğum Apikey importlarını ve apikey constlarını silebilir ve yalnızca url içerisine apinizi ekleyebilirsiniz )*/
import Api from "./components/Api"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Ankara from "./components/DefaultCitys/Ankara"
import İzmir from "./components/DefaultCitys/İzmir"
import İstanbul from "./components/DefaultCitys/İstanbul"

function App(props) {
  return (
    <div>
      <Header />
      <Api />
      <div className="default">
        <İstanbul />
        <Ankara />
        <İzmir />
      </div>
      <Footer />
    </div>
  )
}

export default App
