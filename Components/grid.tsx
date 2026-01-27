import { gridItems } from "@/data/gridItems";
import { BentoGrid, BentoGridItem } from "./ui/bentoGrid";

export default function Grid() {
    return (
        <div>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}