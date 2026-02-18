import styles from "./GameOfThrones.module.css";

function Personnage({ membre, onClickDetails }) {
    return (
        <div className={styles.memberCard}>
            <p><strong>{membre.name || 'Inconnu'}</strong></p>
            <button 
                className={styles.detailsButton}
                onClick={onClickDetails}
            >
                Détails
            </button>
        </div>
    );
}

export default Personnage;
