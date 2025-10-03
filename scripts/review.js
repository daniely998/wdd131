const counterDiplay = document.querySelector(".counter");

let reviewCompleted = Number(window.localStorage.getItem("reviewCompleted")) || 0;

if (reviewCompleted !== 0) {
    counterDiplay.textContent = reviewCompleted;
} else {
    counterDiplay.textContent = "There is no completed review.";
}

reviewCompleted++;

localStorage.setItem("reviewCompleted", reviewCompleted);