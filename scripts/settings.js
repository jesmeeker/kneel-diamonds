import { getSettings, setSetting, getOrderBuilder } from "./dataAccess.js"

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

    const selections = getOrderBuilder()

    document.addEventListener("stateChanged", event => {
        getOrderBuilder()})
    
            
    let html = "<ul>"
            
    let listItems = settings.map(setting => {

        if (setting.id === selections.settingId) {
            return `<li class="setting">
                <input type="radio" name="setting" value="${setting.id}" checked /> ${setting.name}
            </li>`
        } else {
            return `<li class="setting">
                <input type="radio" name="setting" value="${setting.id}" /> ${setting.name}
        </li>`
        }})

    html += listItems.join("")
    html += "</ul>"
    
    return html
}

