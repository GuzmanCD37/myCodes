function generateSubjects() {
    var courseCode = document.getElementById("courseCode").value;
    // Here, you would fetch subjects based on the course code via AJAX or other means
    // For simplicity, let's assume a static list
    var subjects = ["Subject 1", "Subject 2", "Subject 3", "Subject 4"];

    var subjectForm = document.getElementById("subjectForm");
    var subjectInfoForm = document.getElementById("subjectInfoForm");

    // Clear previous subjects if any
    subjectInfoForm.innerHTML = "";

    // Generate inputs for each subject
    subjects.forEach(function(subject) {
        var label = document.createElement("label");
        label.textContent = subject + " Grade:";
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", subject.toLowerCase().replace(/\s/g, ""));
        input.setAttribute("placeholder", "Enter grade for " + subject);
        var lineBreak = document.createElement("br");

        subjectInfoForm.appendChild(label);
        subjectInfoForm.appendChild(input);
        subjectInfoForm.appendChild(lineBreak);
    });

    // Display the subject form
    subjectForm.style.display = "block";
}
