import React, { useState } from "react";
import "./Form.css";
import "./FormQuery.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t, i18n } = useTranslation();

  const sendMessage = (e) => {
    e.preventDefault();
    const token = "7063831803:AAGAqPJbEaRXAniIZIvPxwHOtfAXdZNjLNM";
    const chatID = 1642515685;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const fullName = document.getElementById("fullName").value;
    const number = document.getElementById("number").value;
    const guests = document.getElementById("guests").value;
    const chekIn = document.getElementById("chekIn").value;
    const destination = document.getElementById("destination").value;
    const visa = document.getElementById("visa").value;
    const messageContent = `Ismi: ${fullName}  \n Raqami: ${number} \n Mexmonlar soni : ${guests} \n Sanasi:${chekIn} \n Davlati: ${destination} \n Visasi: ${visa}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatID,
        text: messageContent,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("success");
        document.getElementById("form__control-wrapper").reset();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
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
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form__control">
          <h2 className="form__control-heading">
            {t("form_title1")} <span>{t("form_title2")}</span> {t("form_title3")} <span>{t("form_title4")}</span>
          </h2>
          <div className="form__control-wrapper" id="form__control-wrapper">
            <div className="form__wrapper-1">
              <input type="text" id="fullName"   placeholder={t("form.number")} />
              <input
                type="number"
                placeholder={t("form.name")}
                id="number"
              />
              <fieldset className="selector">
                <label for="chooseGuests" class="form-label">
                {t("form.guest")}
                </label>
                <select
                  name="guests"
                  class="form-select"
                  aria-label="Default select example"
                  id="guests"
                  onChange="this.form.click()"
                >
                  <option selected="">1 </option>
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
                {t("form.date")}
                </label>
                <input
                  type="date"
                  id="chekIn"
                  name="date"
                  class="date"
                  required=""
                />
              </fieldset>
            </div>
            <div className="form__wrapper-2">
              <fieldset className="selector">
                <label for="chooseDestination" class="form-label">
                {t("form.destination")}
                </label>
                <select
                  name="Destination"
                  class="form-select"
                  aria-label="Default select example"
                  id="destination"
                  onChange="this.form.click()"
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
                {t("form.visa")}
                </label>
                <select
                  name="Destination"
                  class="form-select"
                  aria-label="Default select example"
                  id="visa"
                  onChange="this.form.click()"
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
            <button className="form__button btn" onClick={sendMessage}>
            {t("form.submit")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
