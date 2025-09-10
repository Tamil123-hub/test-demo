// Load saved data from localStorage
let attendance = JSON.parse(localStorage.getItem("attendance")) || {};

function markAttendance(rollNo, status) {
  attendance[rollNo] = status;

  // Save to localStorage
  localStorage.setItem("attendance", JSON.stringify(attendance));

  // Update summary
  updateSummary();
}

function updateSummary() {
  let presentCount = 0;
  let absentCount = 0;

  for (let key in attendance) {
    if (attendance[key] === "present") {
      presentCount++;
    } else if (attendance[key] === "absent") {
      absentCount++;
    }
  }

  document.getElementById("summary").innerText =
    `Present: ${presentCount} | Absent: ${absentCount}`;
}

// Initialize summary on page load
updateSummary();
