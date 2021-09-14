import React from "react";

import "./options.css";

const Options = (props) => {
  const options = [
    {
      text: "Enviar um email de contato", id: 1,
    },
    { text: "Telefone para contato", handler: () => {}, id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;