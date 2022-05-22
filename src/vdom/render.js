
const renderElem = (vNode) => {
    const $el = document.createElement(vNode.tagName);
    // set the attrs
    for (const [k, v] of Object.entries(vNode.attrs)) {
        $el.setAttribute(k, v);
    }

    // set the children
    for (const child of vNode.children) {
        const $child = render(child);
        $el.appendChild($child);
    }

    return $el;
};

const render = (vNode) => {
    if (typeof vNode === "string") {
        return document.createTextNode(vNode);
    }
    return renderElem(vNode);
};


export default render;