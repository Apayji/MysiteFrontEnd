export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            EcoKaz - это первое сообщество, где люди могут поделиться
            экопроблемами своих городов и районов.
          </h1>
          <button className="hero-btn">
            <a href="#">Get Started</a>
          </button>
        </div>
        <div className="hero-img">
          <div className="map-container">
            <span className="circle circle1">
              <div className="tooltip invisible">
                Аральское море погибло, как экосистема и продолжает уменьшаться
                в размерах. В дельтах Амударьи и Сырдарьи население испытывает
                недостаток в количестве и качестве воды, как для орошения, так и
                для питья. Усилилась миграция из этих зон в более благополучные
                районы, и даже другие страны.
              </div>
            </span>
            <span className="circle circle2">
              <div className="tooltip invisible">
                Влияние нефтегазодобычи, пыльные бури, поднимающие с бывшего
                морского дна массы соли, насыщенная различными химикатами вода,
                мертвый солончак и малоплодородная глинистая почва - вот
                реальная картина экологической ситуации в Атырау. Тревожит
                динамика выброса в воздух вредных остатков.
              </div>
            </span>
            <span className="circle circle3">
              <div className="tooltip invisible">
                В 2019 году Алматы вошел в число 100 самых опасных для экологии
                городов мира, заняв 95 место. По данным РГП «Казгидромет»,
                атмосферный воздух в Алматы в целом характеризуется высоким
                уровнем загрязнения. Индекс загрязнения атмосферы составляет 7
                (высокий уровень). Стандартный индекс равен 9 (высокий).
              </div>
            </span>
            <span className="circle circle4">
              <div className="tooltip invisible tooltip-below">
                Наибольшие опасения экологов Семейского региона
                вызывает состояние очистных сооружений и канализационного дюкера
                в районе протоки Тихомировская. Постоянно возрастающие нагрузки
                на стоки и очистные сооружения из-за интенсивного строительства
                жилья и объектов соцкультбыта, грозят близкой экологической
                катастрофой
              </div>
            </span>
            <span className="circle circle5">
              <div className="tooltip invisible tooltip-below">
                Одни из них это - увеличение выбросов загрязняющих веществ в
                атмосферный воздух от автомобильного транспорта; загрязнение
                атмосферного воздуха в зимнее время от источников
                теплоэнергетики и автономного теплоснабжения; благоустройство и
                очистка реки Есиль и ее притоков Акбулак и Сарыбулак; отсутствие
                альтернативных
              </div>
            </span>
            <img src="map-kazakhstan.svg" alt="map" />
          </div>
        </div>
      </div>
      <div className="services">
        <h1>See what the hype is about</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>Experience Bliss</h2>
            <p>AI Powered technology</p>
            <button>Get Started</button>
          </div>
          <div className="services__card">
            <h2>Are you Ready?</h2>
            <p>Take the leap</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
