let attendanceRecords = [];

function addAttendance() {

    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const status = document.getElementById("status").value;

    if (studentId === "" || studentName === "" || status === "") {
        document.getElementById("message").textContent =
            "Please fill all fields.";

        return;
    }

    attendanceRecords.push({
        id: studentId,
        name: studentName,
        status: status
    });

    displayAttendance();

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("status").value = "";

    document.getElementById("message").textContent =
        "Attendance added successfully.";
}

function displayAttendance() {

    const table = document.getElementById("attendanceTable");

    table.innerHTML = "";

    let present = 0;
    let absent = 0;

    attendanceRecords.forEach(function(record) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.status}</td>
        `;

        table.appendChild(row);

        if (record.status === "Present") {
            present++;
        } else {
            absent++;
        }
    });

    document.getElementById("presentCount").textContent = present;
    document.getElementById("absentCount").textContent = absent;

    const total = present + absent;

    if (total > 0) {
        const percentage = (present / total) * 100;

        document.getElementById("percentage").textContent =
            percentage.toFixed(2) + "%";
    }
}