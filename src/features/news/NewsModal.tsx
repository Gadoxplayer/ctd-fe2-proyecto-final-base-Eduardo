import { useState } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  BotonLectura,
  BotonSuscribir,
  CotenedorTexto,
} from "./styled";
import {INoticiasNormalizadas} from './Noticias';

/**
 * This component replaces the 'modal' logic which originally was located at the Noticias.tsx component
 * @author Eduardo
 * @param props of type INoticiasNormalizadas
 * @returns JSX element
 */

const NewsModal = (props: INoticiasNormalizadas) => {
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

return (
    <>
    <BotonLectura onClick={() => setModal(props)}>Ver más</BotonLectura> 
    {modal ? (
          modal.esPremium ? (
            <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                <CotenedorTexto>
                  <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                  <DescripcionModal>
                    Suscríbete a nuestro newsletter y recibe noticias de
                    nuestros personajes favoritos.
                  </DescripcionModal>
                  <BotonSuscribir
                    onClick={() =>
                      setTimeout(() => {
                        alert("Suscrito!");
                        setModal(null);
                      }, 1000)
                    }
                  >
                    Suscríbete
                  </BotonSuscribir>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
          ) : (
            <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={modal.imagen} alt="news-image" />
                <CotenedorTexto>
                  <TituloModal>{modal.titulo}</TituloModal>
                  <DescripcionModal>{modal.descripcion}</DescripcionModal>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
          )
        ) : null}
    </>
)

}

export default NewsModal;