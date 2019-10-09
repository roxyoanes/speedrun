import React from "react";

import pic from "../images/section-image1.png";
import Accordion from "../Components-page6/Components-first/Accordion";

const About = () => (
  <div className="about" id="about">
    <h3 className="about__title">
    About
      <span className="about__title-color"> StartUp</span>
    </h3>
    <p className="about__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. laudantium culpa tenetur.</p>
    <div className="about__part1">
      <img src={pic} className="about__pic-stats" alt="statistics" />
      <div className="about__text-column">
        <p className="about__p">Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, laudantium culpa tenetur at id, beatae pet.</p>
        <p className="about__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium,m deserunt.</p>
        <ul className="about__list">
          <li className="about__list-item">
            <i className="fas fa-arrow-circle-right arrow" />
            Lorem ipsum enimdolor sit amet
          </li>
          <li className="about__list-item">
            <i className="fas fa-arrow-circle-right arrow" />
            Explicabo deleniti neque aliquid
          </li>
          <li className="about__list-item">
            <i className="fas fa-arrow-circle-right arrow" />
            Consectetur adipisicing elit
          </li>
          <li className="about__list-item">
            <i className="fas fa-arrow-circle-right arrow" />
            Lorem ipsum dolor sit amet
          </li>
          <li className="about__list-item">
            <i className="fas fa-arrow-circle-right arrow" />
            Quo issimos molest quibusdam temporibus
          </li>
        </ul>
      </div>
    </div>
    <div className="about__part2">
      <div className="about__big">
        <div className="about__part2-wrapper">
          <h2 className="about__title2">Amazing free bootstrap template</h2>
          <p className="about__p">Lorem ipsum dolor sit amet, adipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde error commodi architecto, laudantium culpa optio corporis quod earumdignissimos eius mollitia et quas officia doloremque.</p>
          <ul className="about__list">
            <li className="about__list-item">
              <i className="fas fa-arrow-circle-right arrow" />
            Lorem ipsum enimdolor sit amet
            </li>
            <li className="about__list-item">
              <i className="fas fa-arrow-circle-right arrow" />
            Explicabo deleniti neque aliquid
            </li>
            <li className="about__list-item">
              <i className="fas fa-arrow-circle-right arrow" />
            Consectetur adipisicing elit
            </li>
            <li className="about__list-item">
              <i className="fas fa-arrow-circle-right arrow" />
            Lorem ipsum dolor sit amet
            </li>
            <li className="about__list-item">
              <i className="fas fa-arrow-circle-right arrow" />
            Quo issimos molest quibusdam temporibus
            </li>
          </ul>
          <p className="about__p">Dolores quam magnam aadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde molestias velit eveniet, facere autem saepe autrunt.</p>
        </div>
        <div className="about__acc">
          <Accordion
            text="Consectetur adipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earumdignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt."
            btnText="Group Item #1"
          />
          <Accordion
            text="Consectetur adipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earumdignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt."
            btnText="Group Item #2"
          />
          <Accordion
            text="Consectetur adipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earumdignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt."
            btnText="Group Item #3"
          />
        </div>
      </div>
    </div>
    <div className="about__part3">
      <h1 className="about__part3-title">Amazing Free Bootstrap Template.</h1>
    </div>
  </div>
);

export default About;
