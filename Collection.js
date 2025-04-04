// Side Navigation Bar for small Screen
var menuicon = document.getElementById("menuicon")
var sidebar = document.getElementById("sidebar")

menuicon.addEventListener("click", function () {
    sidebar.style.left = 0
})
var cancel = document.getElementById("cancel")

cancel.addEventListener("click", function () {
    sidebar.style.left = "-50%"
})


// Gender Selection


document.addEventListener("click", function () {

    var menchk = document.getElementById("menchk")
    var womenchk = document.getElementById("womenchk")
    var kidchk = document.getElementById("kidchk")

  
    var menproduct = document.querySelectorAll(".menproduct")
    var womenproduct = document.querySelectorAll(".womenproduct")
    var kidproduct = document.querySelectorAll(".kidproduct")

    // Function to filter products based on selected checkboxes
    function filterProducts() {

        // Check if no checkboxes are selected
        if (!menchk.checked && !womenchk.checked && !kidchk.checked) {

            // If no checkboxes are checked, show all products
            menproduct.forEach(item => item.style.display = "block")

            womenproduct.forEach(item => item.style.display = "block")

            kidproduct.forEach(item => item.style.display = "block")
            
            return 
        }

        // Show/Hide products based on checkbox state

        menproduct.forEach(item => item.style.display = menchk.checked ? "block" : "none")

   
        
        womenproduct.forEach(item => item.style.display = womenchk.checked ? "block" : "none")


        
        kidproduct.forEach(item => item.style.display = kidchk.checked ? "block" : "none")
    }


    
    menchk.addEventListener("change", filterProducts)
    womenchk.addEventListener("change", filterProducts)
    kidchk.addEventListener("change", filterProducts)


    
    filterProducts()
})


// Price check

document.addEventListener("click", function () {
    // Get checkbox elements for price ranges
    var price1 = document.getElementById("price1");
    var price2 = document.getElementById("price2");
    var price3 = document.getElementById("price3");

    var rate = document.querySelectorAll(".rate");

    // Function to filter products based on selected price range checkboxes
    function filterRate() {
        // Check if no price checkboxes are selected
        if (!price1.checked && !price2.checked && !price3.checked) {
            // If no price checkboxes are checked, show all products
            rate.forEach(item => item.closest('div').style.display = "block");
            return; // Exit function early
        }

        // Filter by price ranges using the text content of .rate
        rate.forEach(item => {
            var price = parseInt(item.textContent.replace('₹', '').trim()); // Extract price as integer

            // Hide products that don't fall into the selected price range
            if (price1.checked && price >= 300 && price <= 499) {
                item.closest('div').style.display = "block"; // Show product
            } else if (price2.checked && price >= 500 && price <= 699) {
                item.closest('div').style.display = "block"; // Show product
            } else if (price3.checked && price >= 700 && price <= 999) {
                item.closest('div').style.display = "block"; // Show product
            } else {
                item.closest('div').style.display = "none"; // Hide product
            }
        });
    }

    // Event listeners for checkbox changes to trigger the filter
    price1.addEventListener("change", filterRate);
    price2.addEventListener("change", filterRate);
    price3.addEventListener("change", filterRate);

    // Ensure all products are visible initially on page load
    filterRate();
});






// colour chk 

document.addEventListener("click", function () {
    // Get checkbox elements
    var greenchk = document.getElementById("greenchk")
    var greychk = document.getElementById("greychk")
    var whitechk = document.getElementById("whitechk")
    var blackchk = document.getElementById("blackchk")
    var maronchk = document.getElementById("maronchk")
    var bluechk = document.getElementById("bluechk")

    // Get all product Color divs by class
    var greenclr = document.querySelectorAll(".greenclr")
    var greyclr = document.querySelectorAll(".greyclr")
    var whiteclr = document.querySelectorAll(".whiteclr")
    var blackclr = document.querySelectorAll(".blackclr")
    var maronclr = document.querySelectorAll(".maronclr")
    var blueclr = document.querySelectorAll(".blueclr")

    // Function to filter products based on selected checkboxes
    function filterColour() {
        // Check if no checkboxes are selected
        if (!greenchk.checked && !greychk.checked && !whitechk.checked && !blackchk.checked && !maronchk.checked && !bluechk.checked) {
            // If no checkboxes are checked, show all color match product

            greenclr.forEach(item => item.style.display = "block")

            greyclr.forEach(item => item.style.display = "block")

            whiteclr.forEach(item => item.style.display = "block")

            blackclr.forEach(item => item.style.display = "block")
            
            maronclr.forEach(item => item.style.display = "block")

            blueclr.forEach(item => item.style.display = "block")
            
            return 
        }

        greenclr.forEach(item => item.style.display = greenchk.checked ? "block" : "none")

        
        greyclr.forEach(item => item.style.display = greychk.checked ? "block" : "none")

        
        whiteclr.forEach(item => item.style.display = whitechk.checked ? "block" : "none")

        blackclr.forEach(item => item.style.display = blackchk.checked ? "block" : "none")
        
        
        maronclr.forEach(item => item.style.display = maronchk.checked ? "block" : "none")

        blueclr.forEach(item => item.style.display = bluechk.checked ? "block" : "none")
    }

    
    greenchk.addEventListener("change",filterColour)
    greychk.addEventListener("change",filterColour )
    whitechk.addEventListener("change",filterColour )
    blackchk.addEventListener("change",filterColour )
    maronchk.addEventListener("change",filterColour )
    bluechk.addEventListener("change",filterColour )


    // Call function
    filterColour()
})


// search bar filter

var filter = document.getElementById("filter")
var search = document.querySelectorAll(".search") 

filter.addEventListener("keyup", function (event) {
    var keypress = event.target.value.toUpperCase()
    
    for ( i = 0; i < search.length; i++) {
        var productName = search[i].querySelector("h1").textContent.toUpperCase()
        
        if (productName.indexOf(keypress) < 0) {
            search[i].style.display = "none"
        } else {
            search[i].style.display = "block"
        }
    }
})

