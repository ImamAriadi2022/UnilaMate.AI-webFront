function toggleTimeline(){
    const timeline = document.getElementById('timeline-dropdown');
    if (timeline.style.display === 'none') {
        timeline.style.display = 'block';
        timelineBtn.innerHTML = 'Hide Timeline';
    } else {
        timeline.style.display = 'none';
        timelineBtn.innerHTML = 'Show Timeline';
    }
}


function setTimeline(){
    const timelineBtn = document.getElementById('timeline-btn');
    timelineBtn.addEventListener('click', toggleTimeline);
    const timeline = document.getElementById('timeline-dropdown');
    timeline.style.display = 'none';
}