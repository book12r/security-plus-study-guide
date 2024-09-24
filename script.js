// Quiz for Day 1
function checkQuiz1() {
    let answer = document.querySelector('input[name="q1"]:checked').value;
    let result1 = document.getElementById("result1");
    
    if (answer === "correct") {
        result1.innerHTML = "Correct! Virus is a type of malware.";
        result1.style.color = "green";
    } else {
        result1.innerHTML = "Incorrect. A firewall is not malware.";
        result1.style.color = "red";
    }
}

// Quiz for Day 2
function checkQuiz2() {
    let answer = document.querySelector('input[name="q2"]:checked').value;
    let result2 = document.getElementById("result2");
    
    if (answer === "correct") {
        result2.innerHTML = "Correct! A firewall blocks unauthorized traffic.";
        result2.style.color = "green";
    } else {
        result2.innerHTML = "Incorrect. Firewalls block unauthorized traffic.";
        result2.style.color = "red";
    }
}
