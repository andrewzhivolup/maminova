import { useEffect, useRef, useState } from "react";
import {
  catalog_1,
  catalog_2,
  catalog_3,
  catalog_4,
  catalog_5,
  catalog_6,
  catalog_7,
  catalog_8,
  catalog_9,
} from "./assets/1_catalog";
import {
  dev_1,
  dev_2,
  dev_3,
  dev_4,
  dev_5,
  dev_6,
  dev_7,
  dev_8,
  dev_9,
} from "./assets/dev";
import { _Image, ImageGroup } from "./Image";
import SliderSlick from "./SliderSlick";

import "./App.scss";

function Header({ refs }) {
  const titles = {
    0: <span>Дизайнер книг</span>,
    1: (
      <span>
        Групповой автопортрет неизвестного <br /> с хвостом и на шпильках
      </span>
    ),
    2: <span>Долгий ясный день</span>,
    3: (
      <span>
        Палеонтологический сборник статей: <br /> про динозавров и не только
      </span>
    ),
    4: (
      <span>
        Анализ типографики археологических <br /> изданий: канон и его
        интерпретации
      </span>
    ),
    5: (
      <span>
        Пьеса <br /> «Дети проходных дворов»
      </span>
    ),
    6: (
      <span>
        192 часа <br /> на западном побережье
      </span>
    ),
    7: (
      <span>
        Книга художника <br /> «НОКАУТ»
      </span>
    ),
    8: <span>PERFORMANCE</span>,
    9: (
      <span>
        Книга художника <br /> «Песни еретиков»
      </span>
    ),
  };

  const [y, setY] = useState(window.scrollY);
  const [title, setTitle] = useState(titles["0"]);

  useEffect(() => {}, [y]);

  return (
    <header>
      <div className="logo ibm-plex-sans-regular">
        <a
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Маминова Анна
        </a>
      </div>
      <h1 className="content-title ibm-plex-sans-bold">{title}</h1>
      <nav>
        <ul>
          <li>
            <a
              className="ibm-plex-sans-regular"
              onClick={() => {
                refs["education"].current.scrollIntoView();
              }}
            >
              Образование
            </a>
          </li>
          <li>
            <a
              className="ibm-plex-sans-regular"
              onClick={() => {
                refs["contacts"].current.scrollIntoView();
              }}
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Card({ src, text, orientation, onClick }) {
  return (
    <>
      <div className="card-wrapper" onClick={onClick}>
        <img className={`card-image ${orientation}`} src={src} />
        <div className="white-card-wrapper">
          <div className="card-text ibm-plex-sans-bold">{text}</div>
        </div>
      </div>
    </>
  );
}

const cards = [
  {
    name: "catalog",
    src: dev_1,
    text: (
      <span>
        Каталог выставки <br /> Петра Швецова
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "hermitage",
    src: dev_2,
    text: (
      <span>
        Документальная книга
        <br />
        про экспедицию
        <br />
        Государственного Эрмитажа
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "dinosaurs",
    src: dev_3,
    text: (
      <span>
        Палеонтологический
        <br />
        сборник статей:
        <br />
        про динозавров и не только
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "study",
    src: dev_4,
    text: (
      <span>
        Исследуя
        <br />
        типографику
      </span>
    ),
    orientation: "vertical",
  },
  {
    name: "play",
    src: dev_5,
    text: (
      <span>
        Пьеса
        <br />
        «Дети проходных дворов»
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "guide",
    src: dev_6,
    text: (
      <span>
        Путеводитель
        <br />
        по трём штатам
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "knockout",
    src: dev_7,
    text: (
      <span>
        Книга художника
        <br />
        «НОКАУТ»
      </span>
    ),
    orientation: "horizontal",
  },
  {
    name: "performance",
    src: dev_8,
    text: (
      <span>
        Календарь
        <br />
        перформансов
      </span>
    ),
    orientation: "vertical",
  },
  {
    name: "heretics",
    src: dev_9,
    text: (
      <span>
        Книга художника
        <br />
        «Песни еретиков»
      </span>
    ),
    orientation: "horizontal",
  },
];

function Cards({ refs }) {
  return (
    <div className="cards main-container">
      {cards.map(({ src, text, orientation, link, name }, i) => {
        const ref = refs[name];
        const onClick = () => {
          ref.current.scrollIntoView();
        };

        return (
          <Card
            key={i}
            src={src}
            text={text}
            link={link}
            orientation={orientation}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

function Body({ children }) {
  return <div className="body-wrapper adaptive">{children}</div>;
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="ibm-plex-sans-regular">{currentYear}, Маминова Анна ©</p>
    </footer>
  );
}

const catalogImages = [catalog_1, catalog_2, catalog_3];

function Catalog({ refs }) {
  return (
    <div className="catalog">
      <div ref={refs} className="anchor"></div>
      <ImageGroup>
        <SliderSlick images={catalogImages} centerPadding={425} />
        <div className="main-container">
          <div className="main-container-text">
            <div className="main-container-info ibm-plex-sans-regular">
              <p>
                Каталог посвящен выставке Петра Швецова «Групповой автопортрет
                неизвестного с хвостом и на шпильках».
                <br />
                Выставка проходила в 2022 году в галерее современного искусства
                Марины Гисич в Санкт-Петербурге.
                <br />
                <br />
                Отличительной чертой каталога является калька, на которой
                располагаются названия работ.
                <br />
                Зритель сначала видит имя героини и, перевернув страницу, узнает
                как она выглядит на картине.
              </p>
            </div>

            <div className="main-container-setting">
              <p>
                Формат: 180 × 210 мм
                <br />
                Бумага: мел. глянц. 130 г/м², калька Spectral 80 г/м²
                <br />
                178 страниц
                <br />
                Фотограф: Маминова Диана
              </p>
            </div>
          </div>

          <_Image className="hidden" hidden src={catalog_1} />
          <_Image className="hidden" hidden src={catalog_2} />
          <_Image className="hidden" hidden src={catalog_3} />
          <_Image className="image_4" src={catalog_4} />
          <_Image className="image_5" src={catalog_5} />
          <_Image className="image_6" src={catalog_6} />
          <_Image className="image_7" src={catalog_7} />
          <_Image className="image_8" src={catalog_8} />
          <_Image className="image_9" src={catalog_9} />
        </div>
      </ImageGroup>
    </div>
  );
}

const hermitageImages = [dev_2, dev_2, dev_2];

function Hermitage({ refs }) {
  return (
    <div className="hermitage">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={hermitageImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Книга посвящена Северо-Западной Экспедиции
              <br />
              Государственного Эрмитажа. Раскопки ведутся
              <br />
              уже более 60 лет, за это время накопилось множество
              <br />
              документальных фотографий и находок.
              <br />
              <br /> Книга олицетворяет собой раскоп, а её страницы —
              <br />
              слои земли, именно поэтому в работе использовалась
              <br />
              тонированная бумага.
            </p>
          </div>

          <div className="main-container-setting">
            <p>
              Формат: 170 × 240 мм
              <br />
              Бумага: Colorlab 110 г/м² (G03, I03, G02)
              <br />
              372 страницы
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
        </div>

        <div className="gap-container-column">
          <div className="gap-container">
            <img className="image_4_5_12_13-hermetage" src={dev_2} />
            <img className="image_4_5_12_13-hermetage" src={dev_2} />
          </div>
          <div className="gap-container">
            <img className="image_6_7_8_9-hermetage" src={dev_2} />
            <img className="image_6_7_8_9-hermetage" src={dev_2} />
            <img className="image_6_7_8_9-hermetage" src={dev_2} />
            <img className="image_6_7_8_9-hermetage" src={dev_2} />{" "}
          </div>
        </div>
        <img className="image_10_16-hermetage" src={dev_2} />
        <img className="image_11_15-hermetage" src={dev_2} />
        <img className="image_4_5_12_13-hermetage" src={dev_2} />
        <img className="image_4_5_12_13-hermetage" src={dev_2} />
        <img className="image_14-hermetage" src={dev_2} />
        <img className="image_11_15-hermetage" src={dev_2} />
        <img className="image_10_16-hermetage" src={dev_2} />
      </div>
    </div>
  );
}

const dinosaursImages = [dev_3, dev_3, dev_3];

function Dinosaurs({ refs }) {
  return (
    <div className="dinosaurs">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={dinosaursImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text ">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Современная интерпретация научно-популярной книги
              <br />
              про палеонтологию и динозавров. Адаптированные схемы,
              <br />
              таблицы и иллюстрации — все это поможет даже
              <br />
              не подготовленному читателю погрузиться в науку.
            </p>
          </div>

          <div className="main-container-setting dino-setings">
            <p>
              Формат: 210 × 297 мм
              <br />
              Бумага: мел. матовая 130 г/м²
              <br />
              146 страниц
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
          <img className="image_6-dino" src={dev_3} />
        </div>

        <div className="container-45_7_dino">
          <div className="container-4_5_dino">
            <img className="image_4_5_8_9-dino" src={dev_3} />
            <img className="image_4_5_8_9-dino" src={dev_3} />
          </div>
          <img className="image_7-dino" src={dev_3} />
        </div>
        <img className="image_4_5_8_9-dino" src={dev_3} />
        <img className="image_4_5_8_9-dino" src={dev_3} />
        <img className="image_10-dino" src={dev_3} />
        <img className="image_11_13-dino" src={dev_3} />
        <img className="image_12-dino" src={dev_3} />
        <img className="image_11_13-dino" src={dev_3} />
      </div>
    </div>
  );
}

const studyImages = [dev_4, dev_4, dev_4];

function Study({ refs }) {
  return (
    <div className="study black">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={studyImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Книга посвящена Северо-Западной Экспедиции
              <br />
              Государственного Эрмитажа. Раскопки ведутся
              <br />
              уже более 60 лет, за это время накопилось множество
              <br />
              документальных фотографий и находок.
              <br />
              <br /> Книга олицетворяет собой раскоп, а её страницы —
              <br />
              слои земли, именно поэтому в работе использовалась
              <br />
              тонированная бумага.
            </p>
          </div>

          <div className="main-container-setting p15">
            <p>
              Формат: 170 × 240 мм
              <br />
              Бумага: Colorlab 110 г/м² (G03, I03, G02)
              <br />
              372 страницы
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
          <img className="image_6-study" src={dev_4} />
        </div>
        <div className="gap-container-column">
          <div className="gap-container">
            <img className="image_4_5_8_9_10-study" src={dev_4} />
            <img className="image_4_5_8_9_10-study" src={dev_4} />
          </div>
          <img className="image_7-study" src={dev_4} />
        </div>
        <img className="image_4_5_8_9_10-study" src={dev_4} />
        <img className="image_4_5_8_9_10-study" src={dev_4} />
        <img className="image_4_5_8_9_10-study" src={dev_4} />
        <div className="gap-container-column">
          <img className="image_11_12-study" src={dev_4} />
          <img className="image_11_12-study" src={dev_4} />
        </div>
        <img className="image_13-study" src={dev_4} />
      </div>
    </div>
  );
}

const playImages = [dev_5, dev_5, dev_5];

function Play({ refs }) {
  return (
    <div className="play black">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={playImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Книга переносит на страницы спектакль «Дети проходных
              <br />
              дворов vol. 2.0», который был поставлен на сцене Лендока
              <br />
              в Санкт-Петербурге. Постановка посвящена творчеству
              <br />
              группы «КИНО» и его влиянию на молодое поколение.
              <br />
              <br />
              Специально для книги был разработан акцидентный
              <br />
              шрифт по мотивам группы «КИНО», а колонэлементы
              <br />
              и плакатные развороты были вдохновлены образом
              <br />
              музыкальной кассеты.
            </p>
          </div>

          <div className="main-container-setting">
            <p>
              Формат: 144 × 210 мм
              <br />
              Бумага: офсетная 80 г/м²
              <br />
              72 страницы
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
        </div>
        <img className="image_4_6-play" src={dev_5} />
        <img className="image_5-play" src={dev_5} />
        <img className="image_4_6-play" src={dev_5} />
        <img className="image_7-play" src={dev_5} />
        <img className="image_8-play" src={dev_5} />
        <img className="image_9-play" src={dev_5} />
      </div>
    </div>
  );
}

const guideImages = [dev_6, dev_6, dev_6];

function Guide({ refs }) {
  return (
    <div className="guide">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={guideImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Путеводитель по западному побережью США, который
              <br />
              рассказывает про один из маршрутов путешествия по трем
              <br />
              штатам: Калифорния, Аризона и Невада.
              <br />
              <br />
              Главной особенностью книги является то, что большая
              <br />
              часть фотографий, а также путевые заметки были
              <br />
              предоставлены семьей путешественников.
              <br />
              Такой опыт помог превратить обычный путеводитель
              <br />в документальный фильм на страницах.
            </p>
          </div>
          <div className="main-container-setting guide-setings">
            <p>
              Формат: 170 × 250 мм
              <br />
              Бумага: мел. глянц. 130 г/м²
              <br />
              158 страниц
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
          <div className="second-container-guide">
            <img className="image_5-guide" src={dev_6} />
            <div className="small-container-guide">
              <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
              <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
              <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
            </div>
            <img className="image_14-guide" src={dev_6} />
          </div>
        </div>
        <div className="first-container-guide">
          <img className="image_4-guide" src={dev_6} />
          <div className="small-container-guide">
            <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
            <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
            <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
            <img className="image_6_7_8_9_10_11_12-guide" src={dev_6} />
          </div>
          <img className="image_13-guide" src={dev_6} />
        </div>
      </div>
    </div>
  );
}

const knockoutImages = [dev_7, dev_7, dev_7];

function Knockout({ refs }) {
  return (
    <div className="knockout">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={knockoutImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              «НОКАУТ» — книга художника, которая раскрывает тему
              <br />
              юмора и его психологии. На перчатках написаны шутки
              <br />
              и анекдоты, что является метафорой использования юмора
              <br />
              в повседневной жизни: для защиты, для нападения,
              <br />
              для уклонения.
            </p>
          </div>
          <div className="main-container-setting">
            <p>Фотограф: Маминова Диана</p>
          </div>
        </div>
        <img className="image_4-knockout" src={dev_7} />
        <img className="image_5_7-knockout" src={dev_7} />
        <img className="image_6-knockout" src={dev_7} />
        <img className="image_5_7-knockout" src={dev_7} />
        <img className="image_8-knockout" src={dev_7} />
      </div>
    </div>
  );
}

const performanceImages = [dev_8, dev_8, dev_8];

function Performance({ refs }) {
  return (
    <div className="performance black">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={performanceImages} centerPadding={425} />
      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Календарь посвящен искусству перформанса
              <br />
              и его авторам. Каждый месяц рассказывает про новый
              <br />
              перформанс через типографические приемы.
            </p>
          </div>
        </div>
        <div className="container-4_5_performance">
          <img className="image_4_5-performance" src={dev_8} />
          <img className="image_4_5-performance" src={dev_8} />
        </div>
        <div className="container-small_performance">
          <img className="image_4_6_8_10_11_12_13-performance" src={dev_8} />
          <img className="image_4_6_8_10_11_12_13-performance" src={dev_8} />
        </div>
        <img className="image_7_9-performance" src={dev_8} />
        <div className="container-small_performance">
          <img className="image_4_6_8_10_11_12_13-performance" src={dev_8} />
          <img className="image_4_6_8_10_11_12_13-performance" src={dev_8} />
        </div>
        <img className="image_7_9-performance" src={dev_8} />
        <div className="container-small_performance">
          <img className="image_4_6_8_10_11_12_13-performance" src={dev_8} />
          <img className="image_4_6_8_10_11_12_13-performance" src={dev_8} />
        </div>
      </div>
    </div>
  );
}

const hereticsImages = [dev_9, dev_9, dev_9];

function Heretics({ refs }) {
  return (
    <div className="heretics black">
      <div ref={refs} className="anchor"></div>
      <SliderSlick images={hereticsImages} centerPadding={425} />

      <div className="main-container">
        <div className="main-container-text">
          <div className="main-container-info ibm-plex-sans-regular">
            <p>
              Сборник стихотворений «Песни еретиков»посвящен отношениям человека
              и природы, в текстах описываются чувства людей, которые не могут
              найти покоя.
              <br />
              <br />
              Для создания иллюстраций был использован наждак, который помимо
              тактильных ощущений передает звуки стихотворений.
            </p>
          </div>

          <div className="main-container-setting ibm-plex-sans-regular">
            <p>
              Формат: 297 × 420 мм
              <br />
              Бумага: акварельная тонированная, наждачная
              <br />
              9 страниц
              <br />
              Фотограф: Маминова Диана
            </p>
          </div>
        </div>

        <img className="image_4-heretics" src={dev_9} />
        <img className="image_5-heretics" src={dev_9} />
        <div className="container-6-789">
          <img className="image_6-heretics" src={dev_9} />
          <div className="container-789">
            <img className="image_7_8_9_11_12-heretics" src={dev_9} />
            <img className="image_7_8_9_11_12-heretics" src={dev_9} />
            <img className="image_7_8_9_11_12-heretics" src={dev_9} />
          </div>
        </div>
        <img className="image_10_13-heretics" src={dev_9} />
        <div className="container-11-12">
          <img className="image_7_8_9_11_12-heretics" src={dev_9} />
          <img className="image_7_8_9_11_12-heretics" src={dev_9} />
        </div>
        <img className="image_10_13-heretics" src={dev_9} />
      </div>
    </div>
  );
}

function Education({ refs }) {
  return (
    <div className="education flex-column-container">
      <div ref={refs} className="anchor"></div>
      <div className="line_1" />

      <p className="education-text education-text_18 ibm-plex-sans-regular ">
        <a href="https://design.hse.ru" target="_blank">
          <b className="education-text_30 ibm-plex-sans-semibold ">
            Школа дизайна НИУ ВШЭ
          </b>
          <br />
          Национальный исследовательский университет «Высшая школа экономики»
          <br />
        </a>
        <br />
        <b className="education-text education-text_30 ibm-plex-sans-semibold">
          Коммуникационный дизайн
        </b>
        <br />
        2020-2024
      </p>

      <div className="line_2" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        Практика & Стажировка в брендинговом агентстве
        <br />
        <a href="https://www.terminaldesign.ru" target="_blank">
          <b className="ibm-plex-sans-semibold">«Терминал дизайн»</b>
        </a>
      </p>

      <div className="line_3" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        Английский язык — <b className="ibm-plex-sans-semibold">С1</b>
        <br />
        Немекий язык — <b className="ibm-plex-sans-semibold">B1</b>
      </p>

      <div className="line_4" />

      <p className="education-text education-text_18 ibm-plex-sans-regular">
        <b className="ibm-plex-sans-semibold education-text_30">
          Художественная школа «Александрино»
        </b>
        <br />
        2009-2018
      </p>

      <div className="line_5" />
    </div>
  );
}

function Contacts({ refs }) {
  return (
    <div className="contacts flex-column-container">
      <div ref={refs} className="anchor"></div>
      <div className="contacts-text">
        <p className="ibm-plex-sans-regular">
          {"Почта: "}
          <a href="mailto:annatypography@mail.ru&subject=Сотрудничество">
            <b className="ibm-plex-sans-semibold">annatypography@mail.ru</b>
          </a>
          <br />
          {"ВКонтакте: "}
          <a href="https://vk.com/anna_typography" target="_blank">
            <b className="ibm-plex-sans-semibold">@anna_typography</b>
          </a>
          <br />
          {"Телеграм: "}
          <a href="https://t.me/annatypography" target="_blank">
            <b className="ibm-plex-sans-semibold">@annatypography</b>
          </a>
        </p>
      </div>
      <div className="line_6" />
      <div className="contacts-text ibm-plex-sans-semibold">
        <p>
          <a href="tel:+79062706203">
            <b>+7 906-270-62-03</b>
          </a>
        </p>
      </div>
      <div className="line_7" />
      <div className="contacts-text ibm-plex-sans-semibold">
        <p>
          <b>Санкт-Петербург</b>
        </p>
      </div>
      <div className="line_8" />
    </div>
  );
}

function App() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const catalogRef = useRef(null);
  const hermitageRef = useRef(null);
  const dinosaursRef = useRef(null);
  const studyRef = useRef(null);
  const playgRef = useRef(null);
  const guideRef = useRef(null);
  const knockoutRef = useRef(null);
  const performanceRef = useRef(null);
  const hereticsRef = useRef(null);
  const educationRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <>
      <Header
        refs={{
          education: educationRef,
          contacts: contactsRef,
        }}
      />
      <Body>
        <Cards
          refs={{
            catalog: catalogRef,
            hermitage: hermitageRef,
            dinosaurs: dinosaursRef,
            study: studyRef,
            play: playgRef,
            guide: guideRef,
            knockout: knockoutRef,
            performance: performanceRef,
            heretics: hereticsRef,
          }}
        />
        <Catalog refs={catalogRef} />
        <Hermitage refs={hermitageRef} />
        <Dinosaurs refs={dinosaursRef} />
        <Study refs={studyRef} />
        <Play refs={playgRef} />
        <Guide refs={guideRef} />
        <Knockout refs={knockoutRef} />
        <Performance refs={performanceRef} />
        <Heretics refs={hereticsRef} />
        <Education refs={educationRef} />
        <Contacts refs={contactsRef} />
      </Body>
      <Footer />
    </>
  );
}

export default App;
