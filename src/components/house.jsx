import styles from "./GameOfThrones.module.css";

function House ({ maison, onClick }) {
    return (
        <div 
            className={styles.houseItem}
            onClick={onClick}
        >
            {maison.name}
        </div>
    );
}

export default House;