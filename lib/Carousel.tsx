import { useScroll } from "./useScroll";
import { IconChevronLeft, IconChevronRight } from "./icons";
import "./styles/css/index.css";

/* https://stackoverflow.com/questions/53958028/how-to-use-generics-in-props-in-react-in-a-functional-component
   https://stackoverflow.com/a/62705164/11704817 */

interface Props<T> {
    list: T[],
    renderComponent: ({ item }: { item: T }) => React.JSX.Element,
}

const Carousel = (<T extends object & { id?: string, key?: string }>({ list, renderComponent }: Props<T>) => {

    const { ref, scrollLeft, scrollRight, indicatorRef } = useScroll();

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button className="carousel__button carousel__button--left"
                    onClick={scrollLeft}>
                    <IconChevronLeft size={30} stroke={3} />
                </button>

                <ul ref={ref} className="carousel__list">
                    {
                        list.map(item => {
                            return (
                                <li className="carousel__list__item" key={item.key || item.id}> {/* Item must have a property id */}
                                    {renderComponent({ item })}
                                </li>
                            );
                        })
                    }
                </ul>

                <button className="carousel__button carousel__button--right"
                    onClick={scrollRight}>
                    <IconChevronRight size={30} stroke={3} />
                </button>
            </div >

            <div className="carousel-scroll-indicator" ref={indicatorRef}></div>
        </div>
    );
});

export default Carousel;