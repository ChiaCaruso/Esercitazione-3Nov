

const query = (selector) => document.querySelector(selector);

const render = (testo, checked) => {
    const labelTesti = checked.map( (element, index) => {        
        return `<label for="check">${element.title}</label>
        <input type="checkbox" name="check" checked>`;
    })

    const content = labelTesti.join('');

    testo.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = query("form");
    const label = query("label");
    const input = query("input");

    render(form, data);
});




