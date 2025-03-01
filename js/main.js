const cardButtons = document.querySelectorAll('.card-btn');
// console.log(cardButtons);

let totalTaskButton = cardButtons.length;
// let totalTaskButton = 6;
document.getElementById('task-assigned').innerText = totalTaskButton;

let compliteTask = parseInt(document.getElementById('complite-task').innerText);
console.log(compliteTask);

const activityContainer = document.getElementById('activity-container');


for (const cardButton of cardButtons) {
    cardButton.addEventListener('click', function (event) {
        event.target.setAttribute('disabled', 'true');
        totalTaskButton = totalTaskButton - 1;
        document.getElementById('task-assigned').innerText = totalTaskButton;

        compliteTask++;
        document.getElementById('complite-task').innerText = compliteTask;

        let cardTaskTitle = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
        const p = document.createElement('p');
        p.innerText = `You have complite the task ${cardTaskTitle} 12:48:15 PM`;
        p.classList.add('p-3', 'bg-[#f4f7ff]', 'rounded-lg', 'mb-4')
        activityContainer.appendChild(p);

    })
}

document.getElementById('activity-btn').addEventListener('click', function () {
    while (activityContainer.firstChild) {
        activityContainer.removeChild(activityContainer.lastChild);
    }
})
