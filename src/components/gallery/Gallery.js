import Card from "../card/Card"
import datas from '../../data/data'
import styles from "./Gallery.module.css"


export default function Gallery() {

    return (
        <div className={styles.gallery}>
            {datas.map(data => {
                return (
                    <Card className={styles.carte}
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </div>
    )
}
