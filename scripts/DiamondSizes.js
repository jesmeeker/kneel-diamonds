import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        // if (event.target.name === "metal") {
        //     window.alert(`User chose metal ${event.target.value}`)

        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))

        }
    }
)

export const DiamondSizes = () => {
    const selections = getOrderBuilder()

    document.addEventListener("stateChanged", event => {
        getOrderBuilder()})

    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    for (const size of sizes) {
        if (size.id === selections.sizeId) {
        html += `<li>
            <input type="radio" name="size" value="${size.id}" checked /> ${size.carets}
        </li>`
            } else {
        html += `<li>
        <input type="radio" name="size" value="${size.id}"/> ${size.carets}
    </li>`
    }}

    // html += listItems.join("")
    html += "</ul>"

    return html
}

