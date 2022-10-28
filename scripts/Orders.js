import { getOrders, getMetals, getStyles, getSizes, addCustomOrder } from "./database.js"
import { KneelDiamonds } from "./KneelDiamonds.js"

// const order = addCustomOrder()

export const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
        return metal.id === order.metalId
        }
    )

    const foundStyle = styles.find(
        (style) => {
        return style.id === order.styleId
        }
    )

    const foundSize = sizes.find(
        (size) => {
        return size.id === order.sizeId
        }
    )
        const totalCost = foundMetal.price + foundStyle.price + foundSize.price

            const costString = totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`

    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}

export const Orders = () => {
    const orders = getOrders()
    
    document.addEventListener("stateChanged", event => {
        getOrders()})

        let html = "<ul>"
        
        const listItems = orders.map(buildOrderListItem)
        
        html += listItems.join("")
        html += "</ul>"
        
        return html
}





