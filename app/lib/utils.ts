const isInput = (element: Element) => {
    return element instanceof HTMLInputElement;
};

const areInputs = (...elements: Element[]) => {
    return elements.every(isInput);
};

export { areInputs };
