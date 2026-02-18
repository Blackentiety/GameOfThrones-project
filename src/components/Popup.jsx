import styles from "./GameOfThrones.module.css";

function Popup({ personnage, onClose }) {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <h2>Détails du personnage</h2>
                <p><strong>Nom:</strong> {personnage.name || 'Inconnu'}</p>
                <p><strong>Genre:</strong> {personnage.gender || 'Inconnu'}</p>
                <p><strong>Culture:</strong> {personnage.culture || 'Inconnu'}</p>
                <p><strong>Né en:</strong> {personnage.born || 'Inconnu'}</p>
                <p><strong>Titres:</strong> {personnage.titles?.join(', ') || 'Aucun'}</p>
                
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    Fermer
                </button>
            </div>
        </div>
    );
}

export default Popup;
