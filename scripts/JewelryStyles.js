import { getStyles, setStyle } from "./database.js"

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
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

