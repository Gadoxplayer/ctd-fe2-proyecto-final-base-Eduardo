import { useEffect, useState } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { obtenerNoticias } from "./fakeRest";
import NewsModal from "./NewsModal";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
  BotonSuscribir,
  CotenedorTexto,
} from "./styled";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  /**
   * this function receives a string to capitalize the first letter of each word
   * @author Eduardo
   * @param word a string to be capitalized from the interface iNoticias
   * @returns a capitalized joined string
   */
const changeCase = (word: string) =>{
  return word.split(" ")
  .map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  })
  .join(" ");
  }

  /**
   * this function receives a type Date data to compute the elapsed time in minutes
   * @author Eduardo
   * @param date from the interface iNoticias
   * @returns the number of elapsed minutes 
   */
const getCurrentTime = (date: { fecha: { getTime: () => number; }; }) => {
  const now = new Date();
  const elapsedMinutes = Math.floor(
    (now.getTime() - date.fecha.getTime()) / 60000
  );
  return elapsedMinutes;
}

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        const titulo = changeCase(n.titulo)

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${getCurrentTime(n)} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={n.imagen} />
            <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {n.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
            <NewsModal id={n.id} titulo={changeCase(n.titulo)} descripcion={n.descripcion} fecha={n.fecha} esPremium={n.esPremium} imagen={n.imagen} ></NewsModal>
          </TarjetaNoticia>
        ))}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
