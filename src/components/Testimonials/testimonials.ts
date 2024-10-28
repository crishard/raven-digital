import img from "../../assets/testimonials.png";


type Testimonial = {
    imageSrc: string;
    name: string;
    title: string;
    content: string;
};

export const testimonials: Testimonial[] = [
    {
        imageSrc: img,
        name: 'Jane Doe',
        title: 'Company / CEO',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor . Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras.',
    },
    {
        imageSrc: img,
        name: 'John Smith',
        title: 'Product Manager',
        content:
            'Nunc aenean justo erat leo dictum, placerat molestie faucibus. Pulvinar ut pretium sagittis. Sed rhoncus ullamcorper nisi egestas gravida. Fusce curae eget, nunc vel ut aenean id laoreet. Ut nec sollicitudin ligula, fringilla. Integer ac urna magna lectus justo, urna varius bibendum.',
    },
    {
        imageSrc: img,
        name: 'Emily Watson',
        title: 'Designer',
        content:
            'Proin justo viverra eget nec nisi, condimentum gravida congue. Vehicula euismod rutrum sapien facilisis orci. Est semper fermentum arcu interdum faucibus. Etiam orci nunc, odio diam id id ac auctor. Non sit vestibulum egestas cursus arcu et risus. Pulvinar eu lacinia justo massa.',
    },
];