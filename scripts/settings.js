import { getSettings, setSetting } from "./database.js"

const settings = getSettings()

document.addEventListener(
    "change",
    (event) => {
        
        if (event.target.name === "setting") {
            setSetting(parseInt(event.target.value))
        }
    }
)

export const Settings = () => {
    let html = `<ul>`

    // This is how you have been converting objects to <li> elements
    const settingItems = settings.map(settings => {
        return `<li class="setting">
            <input type="radio" name="setting" value="${settings.id}"/> ${settings.name}
        </li>`
    })

    html += settingItems.join("")
    html += "</ul>"
    return html
}
