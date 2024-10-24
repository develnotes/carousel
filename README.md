# A React Carousel Component

## Install

Install the module

    npm install @develnotes/carousel


## Usage

We can create a slide-show carousel using as items any React component with appropriate `props`. Below we give as example a React component named `Card` that receives as props an `id`, a `title` and an `image`. We create then a `list` with the props of each item (or card) to be shown in the carousel. Also, we need to provide a render function `renderItem`, as below.

    import Carousel from "@develnotes/carousel";

    type Item = {
        id: number,
        title: string,
        image: "string,
    }

    type List = Item[]

    const list: List = [
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

    const renderCard = (item: Item) => <Card props={item} />;

    <Carousel list={list} renderComponent={renderCard} />


## Props

### list

A list of objects representing the component props.

#### Ex.

    const list: List = [
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

Note the `id` prop. The list is expected to contain either a `key`, or an `id` prop, for internal use of the React list rendering.


### renderComponent

A function used to render the prop, that receives the item as a prop, and returns a JSX Element, in the form

    const renderProps = (item) => <Component props={item} />



## Demo app and examples

[Demo](https://carousel-demo-app.vercel.app/)