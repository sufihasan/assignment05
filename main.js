const cardButtons = document.querySelectorAll('.card-btn');

let totalTaskButton;
if (cardButtons.length < 10) {
    totalTaskButton = '0' + cardButtons.length;
}
else {
    totalTaskButton = cardButtons.length;
}


document.getElementById('task-assigned').innerText = totalTaskButton;

let compliteTask = parseInt(document.getElementById('complite-task').innerText);


const activityContainer = document.getElementById('activity-container');


document.getElementById('discover-new').addEventListener('click', function () {
    window.location.href = 'blog.html';
})



for (const cardButton of cardButtons) {
    cardButton.addEventListener('click', function (event) {
        event.target.setAttribute('disabled', 'true');

        let numberTotalTaskButton = parseInt(totalTaskButton);
        numberTotalTaskButton = numberTotalTaskButton - 1;

        if (numberTotalTaskButton < 10) {
            totalTaskButton = '0' + numberTotalTaskButton;
            document.getElementById('task-assigned').innerText = totalTaskButton;
        }
        else {
            document.getElementById('task-assigned').innerText = numberTotalTaskButton;
        }



        compliteTask++;
        document.getElementById('complite-task').innerText = compliteTask;

        let cardTaskTitle = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
        const p = document.createElement('p');

        let times = new Date();
        let resultTime = times.toLocaleTimeString();

        p.innerText = `You have complite the task ${cardTaskTitle} at ${resultTime}`;
        p.classList.add('p-3', 'bg-[#f4f7ff]', 'rounded-lg', 'mb-4');
        activityContainer.appendChild(p);


        alert('Board updated successfully');
        if (numberTotalTaskButton === 0) {
            alert('Congrats!!! You have complited all the current task');
        }

    })
}

document.getElementById('activity-btn').addEventListener('click', function () {
    while (activityContainer.firstChild) {
        activityContainer.removeChild(activityContainer.lastChild);
    }
})


