import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./mentionsLegales.css";

const MentionsLegales = () => {
  return (
    <>
      <Header />
      <div className="mentions-page">
        <div className="mentions-legales-text">
          <h1>Mentions légales</h1>
          <h3>En vigueur au 07/01/2023</h3>
          <p>
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., il est porté à la connaissance des
            utilisateurs et visiteurs, ci-après l""Utilisateur", du site
            https://charles-cantin-netlify.netlify.app , ci-après le "Site", les
            présentes mentions légales.
          </p>
          <p>
            La connexion et la navigation sur le Site par l’Utilisateur implique
            acceptation intégrale et sans réserve des présentes mentions
            légales.
          </p>
          <p>
            Ces dernières sont accessibles sur le Site à la rubrique « Mentions
            légales ».
          </p>
          <h2>ARTICLE 1 - L'EDITEUR</h2>
          <p>
            L’édition et la direction de la publication du Site est assurée par
            Charles Cantin, domiciliée 45 rue de la Rue Paris, dont le numéro de
            téléphone est 0789123456, et l'adresse e-mail charles@example.com.
          </p>
          <p>ci-après l'"Editeur".</p>

          <h2>ARTICLE 2 - L'HEBERGEUR</h2>
          <p>
            L'hébergeur du Site est la société Netlify, dont le siège social est
            situé au 610 rue Du Pont Paris , avec le numéro de téléphone :
            0712345678 + adresse mail de contact
          </p>

          <h2>ARTICLE 3 - ACCES AU SITE</h2>
          <p>
            Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programmée ou non et pouvant découlant
            d’une nécessité de maintenance.
          </p>
          <p>
            En cas de modification, interruption ou suspension du Site,
            l'Editeur ne saurait être tenu responsable
          </p>

          <h2>ARTICLE 4 - COLLECTE DES DONNEES</h2>
          <p>
            Le Site assure à l'Utilisateur une collecte et un traitement
            d'informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés.
          </p>
          <p>
            En vertu de la loi Informatique et Libertés, en date du 6 janvier
            1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de
            suppression et d'opposition de ses données personnelles.
            L'Utilisateur exerce ce droit : · via un formulaire de contact ;
          </p>
          <p>
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du Site, sans autorisation de
            l’Editeur est prohibée et pourra entraînée des actions et poursuites
            judiciaires telles que notamment prévues par le Code de la propriété
            intellectuelle et le Code civil.
          </p>
        </div>
        <Footer className="mentions-footer" />
      </div>
    </>
  );
};

export default MentionsLegales;
