import { useState, useEffect } from "react";
import styles from "./GameOfThrones.module.css";
import House from "./house.jsx";
import Personnage from "./Personnage.jsx";
import Popup from "./Popup.jsx";

function GameOfThrones() {
    // Variable pour stocker les maisons
    const [maisons, setMaisons] = useState([]);
    
    // Variable pour la maison cliquée
    const [maisonSelectionnee, setMaisonSelectionnee] = useState(null);
    
    // Variable pour les membres de la maison
    const [membres, setMembres] = useState([]);
    
    // Variable pour le personnage sélectionné (pour les détails)
    const [personnageSelectionne, setPersonnageSelectionne] = useState(null);

    // ÉTAPE 1: Récupérer les maisons au chargement
    useEffect(() => {
        fetch('https://www.anapioficeandfire.com/api/houses')
            .then(reponse => reponse.json())
            .then(donnees => {
                setMaisons(donnees);
            });
    }, []);

    // ÉTAPE 2: Quand on clique sur une maison
    function clicMaison(maison) {
        setMaisonSelectionnee(maison);
        setPersonnageSelectionne(null); // Fermer les détails
        
        // Récupérer les membres
        const urls = maison.swornMembers;
        
        if (urls.length > 0) {
            // Récupérer chaque membre
            Promise.all(
                urls.map(url => fetch(url).then(r => r.json()))
            )
            .then(data => {
                setMembres(data);
            });
        } else {
            setMembres([]);
        }
    }

    // ÉTAPE 3: Quand on clique sur le bouton "Détails"
    function afficherDetails(personnage) {
        setPersonnageSelectionne(personnage);
    }

    // Fonction pour fermer les détails
    function fermerDetails() {
        setPersonnageSelectionne(null);
    }

    return (
        <div className={styles.layout}>
            {/* ÉTAPE 1: Sidebar avec les maisons (BONUS: composant House) */}
            <div className={styles.sidebar}>
                <h2>Maisons</h2>
                
                {maisons.map((maison) => (
                    <House 
                        key={maison.url} 
                        maison={maison}
                        onClick={() => clicMaison(maison)}
                    />
                ))}
            </div>

            {/* ÉTAPE 2: Contenu avec les membres */}
            <div className={styles.content}>
                <h2>Contenu</h2>
                
                {!maisonSelectionnee ? (
                    <p>Clique sur une maison</p>
                ) : (
                    <div>
                        <h3>{maisonSelectionnee.name}</h3>
                        <p>Membres: {membres.length}</p>
                        
                        {membres.length === 0 ? (
                            <p>Aucun membre</p>
                        ) : (
                            // BONUS ÉTAPE 2: Composant Personnage pour chaque membre
                            membres.map((membre) => (
                                <Personnage
                                    key={membre.url}
                                    membre={membre}
                                    onClickDetails={() => afficherDetails(membre)}
                                />
                            ))
                        )}
                    </div>
                )}
            </div>
            
            {/* ÉTAPE 3: Popup avec détails (composant Popup) */}
            {personnageSelectionne && (
                <Popup 
                    personnage={personnageSelectionne}
                    onClose={fermerDetails}
                />
            )}
        </div>
    );
}

export default GameOfThrones;