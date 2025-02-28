import Link from "next/link";
import "./About.css"; 

const AboutSection = () => {
  return (
    <div className="About-section">
      <div className="About-box">
        <div className="Left-side-About">
          {/* Верхний блок с заголовком и колонной */}
          <div className="side-top-About">
            <h2 className="about-title">Про нас</h2>
            <div className="column_about"></div>
          </div>

          {/* Нижний блок с текстом */}
          <div className="side-bot-About">
            <p className="about-text">
              Ми - Марина Пальченко та Ксенія Самойлич, засновниці “Швейної роти”, яка пошила 100 000+ одиниць адаптивного одягу для поранених захисників у 90+ госпіталів України та об’єднала навколо себе 700+ волонтерів в усіх частинах світу.
              <br /><br />
              28-го лютого 2022 року принесли в звичайний офіс дніпровської ІТ-компанії власні швейні машинки і оверлоки та запустили <span className="highlight">“Швейну роту”</span>, аби робити балаклави та термобілизну, яку безкоштовно роздавали Захисникам. Рекорд - 498 балаклав за день!
              <br /><br />
              А у травні прийшов запит із госпіталю на <span className="highlight">“кіберодяг”</span> - це спеціальний адаптивний одяг на липучках/кнопках, який швидко одягається, не травмує і не вимагає піднімати руки/ноги пораненому воїнові.
              <br /><br />
              Так, з часом навколо “Швейної роти” зібралась крута команда дуже активних і талановитих майстринь і майстрів зі всієї України.
              <br /><br />
              Майстрині ініціативи знімають детальні покрокові відео майстер-класи з пошиття всіх виробів та оцифровані лекала, аби навіть новачки могли долучатись до ініціативи з будь-якого міста. Саме вони опубліковані в <Link className="about-link" style={{ color: "#4682B4"}} href={"/guides"}>“Навчальний центр”</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
