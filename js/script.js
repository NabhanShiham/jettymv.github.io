// script.js

$(document).ready(function () {
    // Fetch JSON data
    $.getJSON('data/ferry_data.json', function (data) {
        // Store original ferry service data
        var originalData = data.ferry_services;

        // Function to display ferry services based on search query
        function displayFerryServices(query) {
            // Clear previous results
            $('#ferryServices').empty();

            // Filter ferry services based on search query
            var filteredServices = originalData.filter(function (service) {
                return service.destination.toLowerCase().includes(query.toLowerCase());
            });

            // Iterate through filtered services and display them
            $.each(filteredServices, function (index, service) {
                var serviceHTML = `
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title">${service.destination}</h5>
                            <p class="card-text">Courier: ${service.courier}</p>
                            <p class="card-text">Contact Phone: ${service.contact_phone}</p>
                            <p class="card-text">Ticket Cost: ${service.ticket_cost}</p>
                            <p class="card-text">Travel Time: ${service.travel_time}</p>
                        </div>
                    </div>
                `;
                $('#ferryServices').append(serviceHTML);
            });
        }

        // Display all ferry services initially
        displayFerryServices('');

        // Listen for input changes in the search bar
        $('#searchInput').on('input', function () {
            var query = $(this).val();
            displayFerryServices(query);
        });
    });
});
