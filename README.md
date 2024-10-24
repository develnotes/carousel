# A React Carousel Component

Install

    npm install @develnotes/carousel


Usage

    import Carousel from "@develnotes/carousel";

    type Item = {
        id: number,
        title: string,
        image: "string,
    }

    type List = Item[]

    const myList: List = [
        {
            id: 1,
            title: "First",
            image: "my-first-image-url"
        },
        {
            id: 2,
            title: "Second",
            image: "my-second-image-url"
        },
        {
            id: 3,
            title: "Third",
            image: "my-third-image-url"
        },
    ];

    const renderList = ({ item }: { item: Item }) => {
        return (
            <div>
                <h2>{ item.title }</h2>
                <div>
                    <img src={item.image} />
                </div>
            </div>
        );
    };

    <Carousel list={myList} renderComponent={renderList} />