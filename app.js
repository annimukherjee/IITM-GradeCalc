document.getElementById('calculate').addEventListener('click', function() {
    const GAA = parseInt(document.getElementById('GAA').value);
    const Q1 = parseInt(document.getElementById('Quiz1').value);
    const Q2 = parseInt(document.getElementById('Quiz2').value);
    const F = parseInt(document.getElementById('Final').value);
    const Bonus = parseInt(document.getElementById('Bonus').value);

    const T = 0.1 * GAA + Math.max(
        0.6 * F + 0.2 * Math.max(Q1, Q2),
        0.4 * F + 0.2 * Q1 + 0.3 * Q2
    );

    let total = T;
    let grade = "";
    let message = "FAIL";
    if (T >= 40) {
        total += Bonus;
    }

    if (total < 40) {
        grade = "U";
    } else if (total < 50) {
        grade = "E";
    } else if (total < 60) {
        grade = "D";
    } else if (total < 70) {
        grade = "C";
    } else if (total < 80) {
        grade = "B";
    } else if (total < 90) {
        grade = "A";
    } else {
        grade = "S";
        message = "PASS, Badhai ho 60 LPA lagega tumhara";
    }

    document.getElementById('result').innerHTML = `
    <div class="text-center p-4">
        <h3 class="mb-2">Results</h3>
        <p class="lead">
            Total Mark: <span class="font-weight-bold">${total}</span>
        </p>
        <p class="text-${total >= 40 ? 'success' : 'danger'}">
            ${message}
        </p>
        <p>
            Grade: <span class="badge badge-${gradeColor(grade)}">${grade}</span>
        </p>
    </div>
`;

function gradeColor(grade) {
    switch(grade) {
        case 'S': return 'success';
        case 'A': return 'primary';
        case 'B': return 'info';
        case 'C': return 'warning';
        case 'D': return 'secondary';
        case 'E': return 'light';
        case 'U': return 'dark';
        default: return 'light';
    }
}

});
