import "./Gallery.css"
import Card from "../card/Card"
import datas from '../../data/data'





export default function Gallery() {

    return (
        <div className="gallery">
            {datas.map(data => {
                return (
                    <Card className="carte"
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
