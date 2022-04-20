export default class Functions {
    eventFilterImput = e => {
        let obj = e.target;
        let filterBOX = obj.parentNode;

        if (obj.tagName == "INPUT") {
            filterBOX.children[1].classList.remove("close");
            filterBOX.children[1].classList.add("show");
        } else if (obj.tagName != "INPUT") {
            filterBOX.children[1].classList.remove("show");
            filterBOX.children[1].classList.add("close");
        }
    }

    eventFilterOptions = e => {
        let obj = e.target;
        let ul = obj.parentNode;
        let filterBOX = ul.parentNode;

        if (obj.tagName == "LI") {
            filterBOX.children[0].value = obj.textContent;
            ul.classList.remove("show");
            ul.classList.add("close");
        }
    }
}