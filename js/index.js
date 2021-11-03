

const query = (selector) => document.querySelector(selector);

const render = (testo, checked) => {
    const formInput = checked.map( (element, index) => { 
        if (element.completed === true) {
            return `<label for="check">${index +1} - ${element.title}</label>
            <input type="checkbox" name="check" checked>`;
        }else{
            return `<label for="check">${index +1} - ${element.title}</label>
            <input type="checkbox" name="check">`;
        }        

    })

    const content = formInput.join('');

    testo.innerHTML = content;

}

document.addEventListener('DOMContentLoaded', () => {
    const form = query(".checkbox");
    const label = query("label");
    const input = query("input");
    const btn = query(".btn-form");

    render(form, data);

    btn.addEventListener( "click", () => {
        data.pop();
        render(form, data);
    })
});




