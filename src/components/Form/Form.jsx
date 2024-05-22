import React from "react";
import "./Form.css";
import "./FormQuery.css";
const Form = () => {
  return (
    <section className="form" id="contacts">
      <div className="container">
        <div className="form__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9262716535986!2d69.18900237557287!3d41.2887090521109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8957dd2535d3%3A0x8577fd0ddd581152!2sChilonzor!5e0!3m2!1sru!2s!4v1716372373121!5m2!1sru!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            style={{ borderRadius: "30px" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form__control">
          <h2 className="form__control-heading">
            Make Your <span>Reservation</span> Through This <span>Form</span>
          </h2>
          <div className="form__control-wrapper">
            <div className="form__wrapper-1">
              <input type="text" placeholder="Your Name" />
              <input type="number" placeholder="Your Phone Number" />
              <fieldset className="selector">
                <label for="chooseGuests" class="form-label">
                  Number Of Guests
                </label>
                <select
                  name="guests"
                  class="form-select"
                  aria-label="Default select example"
                  id="chooseGuests"
                  onchange="this.form.click()"
                >
                  <option selected=""> ex. 3 or 4 or 5</option>
                  <option type="checkbox" name="option1" value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </fieldset>
              <fieldset className="selector">
                <label for="Number" class="form-label">
                  Check In Date
                </label>
                <input
                  type="date"
                  id="nameData"
                  name="date"
                  class="date"
                  required=""
                />
              </fieldset>
            </div>
            <div className="form__wrapper-2">
              <fieldset className="selector">
                <label for="chooseDestination" class="form-label">
                  Choose Your Destination
                </label>
                <select
                  name="Destination"
                  class="form-select"
                  aria-label="Default select example"
                  id="chooseCategory"
                  onchange="this.form.click()"
                >
                  <option selected="">Antalya</option>
                  <option value="Istanbul">Istanbul</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Kanada">Canada</option>
                  <option value="England">England</option>
                </select>
              </fieldset>
              <fieldset className="selector">
                <label for="chooseDestination" class="form-label">
                  Choose Your Visa Support
                </label>
                <select
                  name="Destination"
                  class="form-select"
                  aria-label="Default select example"
                  id="chooseCategory"
                  onchange="this.form.click()"
                >
                  <option selected="">Country</option>
                  <option value="Istanbul">USA</option>
                  <option value="Dubai">ENGLAND</option>
                  <option value="Sharm El-Sheikh">EUROPE</option>
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Kanada">Canada</option>
                  <option value="England">England</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className="form__button btn">Make A Reservation</div>
        </div>
      </div>
    </section>
  );
};

export default Form;
