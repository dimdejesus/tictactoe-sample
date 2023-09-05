console.log('Hello')
function toggleBulb() {
    let imgBulb = document.getElementById('bulb')

    if(imgBulb.src.includes('OFF'))
        imgBulb.src = 'https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg'
    else
        imgBulb.src = 'https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg'
}