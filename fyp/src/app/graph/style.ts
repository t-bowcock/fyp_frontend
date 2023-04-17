const style = [
    {
        selector: 'edge',
        style: {
            'curve-style': 'haystack',
            'haystack-radius': 0,
            'opacity': 0.333,
            'width': 2,
            'z-index': 0,
            'overlay-opacity': 0
        }
    },
    {
        selector: 'node',
        style: {
            'width': 40,
            'height': 40,
            'font-size': 9,
            'min-zoomed-font-size': 4,
            'label': 'data(name)',
            'color': '#000',
            'text-outline-width': 1,
            'text-outline-color': '#fff',
            'text-outline-opacity': 1,
            'overlay-color': '#fff'
        }
    }
];

export default style