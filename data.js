document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form fields
    if (validateForm()) {
        // If form is valid, process and store data
        processFormData();
    }
});

// Function to validate form fields
function validateForm() {
    // Implement client-side validation here
    return true; // For now, return true as a placeholder
}

// Function to process form data
function processFormData() {
    // Get form data
    const formData = new FormData(document.getElementById('jobApplicationForm'));

    // Log form data
    console.log('Form submitted:', formData);

    // Transform submitted data into table format
    transformDataIntoTable(formData);
}

// Function to transform submitted application data into table format
function transformDataIntoTable(formData) {
    const tableContent = document.getElementById('applicationsTableContent');

    // Clear existing table content
    tableContent.innerHTML = '';

    // Iterate over form data entries and create table rows
    for (const entry of formData.entries()) {
        const [fieldName, fieldValue] = entry;
        const row = document.createElement('tr');
        const fieldNameCell = document.createElement('td');
        const fieldValueCell = document.createElement('td');

        fieldNameCell.textContent = fieldName;
        fieldValueCell.textContent = fieldValue;

        row.appendChild(fieldNameCell);
        row.appendChild(fieldValueCell);
        tableContent.appendChild(row);
    }

    // Show the table
    document.getElementById('applicationsTable').classList.remove('hidden');
}