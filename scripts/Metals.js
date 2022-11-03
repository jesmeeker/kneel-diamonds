import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
 )

// document.addEventListener("change", (event) => {
//         if (event.target.name === "metal") {
//             setMetal(parseInt(event.target.value))
            
    
//     }
// })

// document.addEventListener("metalChanged", (event) => {
//     if (event.target.name === "metal") {
//         console.log("State of metal has changed. Regenerating HTML...")
//         setMetal(parseInt(event.target.value))
//         Metals()
// }})
    
    // document.addEventListener("stateChanged", event => {
        //         console.log("State of metal has changed. Regenerating HTML...")
        //         ()
        //     })
        
export const Metals = () => {

    const metals = getMetals()
    const selections = getOrderBuilder()

    document.addEventListener("stateChanged", event => {
        getOrderBuilder()})
    
    // document.addEventListener("metalChanged", (event) => {
    //     getOrderBuilder()})
            
    let html = "<ul>"
            
    for (const metal of metals) {
            
        

            if (metal.id === selections.metalId) {

                html += `<li><input type="radio" name="metal" value="${metal.id}" checked />${metal.metal}</li>`

            } else {

                html += `<li><input type="radio" name="metal" value="${metal.id}"/>${metal.metal}</li>`
            }
        }
    
    // html =+ currentSelection.join("")
    // html += metalItems.join("")
    html += "</ul>"
    
    return html
}

