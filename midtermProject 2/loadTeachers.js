async function loadTeacherProfiles() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const container = document.getElementById('teacher-profiles-container');
        container.innerHTML = ''; // Clear existing profiles

        data.teachers.forEach(teacher => {
            const teacherDiv = document.createElement('div');
            teacherDiv.className = 'teacher-card';
            teacherDiv.innerHTML = `
                <img src="${teacher.photo}" alt="${teacher.name}">
                <h3>${teacher.name}</h3>
                <p>${teacher.bio}</p>
                <button data-teacher-id="${teacher.id}">View Profile</button>
            `;
            container.appendChild(teacherDiv);

            // Find the button we just added and attach a click event listener to it
            const button = teacherDiv.querySelector('button');
            button.addEventListener('click', () => {
                window.location.href = `teacherProfile.html?id=${teacher.id}`;
            });
        });
    } catch (error) {
        console.error('Could not load teacher profiles:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadTeacherProfiles);
