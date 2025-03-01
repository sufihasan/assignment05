const cardButtons = document.querySelectorAll('.card-btn');
// console.log(cardButtons);
let totalTaskButton;
if (cardButtons.length < 10) {
    totalTaskButton = '0' + cardButtons.length;
}
else {
    totalTaskButton = cardButtons.length;
}


document.getElementById('task-assigned').innerText = totalTaskButton;

let compliteTask = parseInt(document.getElementById('complite-task').innerText);
console.log(compliteTask);

const activityContainer = document.getElementById('activity-container');



for (const cardButton of cardButtons) {
    cardButton.addEventListener('click', function (event) {
        event.target.setAttribute('disabled', 'true');
        totalTaskButton = totalTaskButton - 1;
        if (totalTaskButton < 10) {
            totalTaskButton = '0' + totalTaskButton
        }
        document.getElementById('task-assigned').innerText = totalTaskButton;

        compliteTask++;
        document.getElementById('complite-task').innerText = compliteTask;

        let cardTaskTitle = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
        const p = document.createElement('p');

        let times = new Date();
        let resultTime = times.toLocaleTimeString();

        p.innerText = `You have complite the task ${cardTaskTitle} ${resultTime}`;
        p.classList.add('p-3', 'bg-[#f4f7ff]', 'rounded-lg', 'mb-4');
        activityContainer.appendChild(p);

        alert('Board updated successfully');

    })
}

document.getElementById('activity-btn').addEventListener('click', function () {
    while (activityContainer.firstChild) {
        activityContainer.removeChild(activityContainer.lastChild);
    }
})


