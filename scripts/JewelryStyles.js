import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        // if (event.target.name === "metal") {
        //     window.alert(`User chose metal ${event.target.value}`)

        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {

    const selections = getOrderBuilder()

    document.addEventListener("stateChanged", event => {
        getOrderBuilder()})

    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    let listItems = styles.map(style => {

        if (style.id === selections.styleId) {
            return `<li>
                <input type="radio" name="style" value="${style.id}" checked /> ${style.style}
            </li>`
        } else {
            return `<li>
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
        }})
        

    html += listItems.join("")
    html += "</ul>"

    return html
}

