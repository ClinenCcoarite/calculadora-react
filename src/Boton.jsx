import React from 'react';

export function Boton(props, manejarClick) {
  function concocer(valor) {
    return isNaN(valor) && valor != '.' && valor != '=';
  }

  const click = () => props.manejarClick(props.children);

  return (
    <button
      className={`item ${concocer(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={click}
    >
      {props.children}
    </button>
  );
}
