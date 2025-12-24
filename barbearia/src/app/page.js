/* import Image from "next/image";
import styles from "./page.module.css"; */
'use client';
import { useState } from "react";

export default function Home() {
  const [ temaEscuro, setTemaEscuro ] = useState (false);

  const alternarTema = () => {
    setTemaEscuro (!temaEscuro);
  }
  return (
    <div >

      <button onClick={alternarTema}>
        {temaEscuro ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
}
