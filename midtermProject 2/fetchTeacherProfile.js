async function fetchTeacherProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const teacherId = urlParams.get('id'); // Retrieve the ID from the URL

    try {
        const response = await fetch('data.json');
        const { teachers } = await response.json();
        const teacher = teachers.find(t => t.id.toString() === teacherId);

        if (teacher) {
            document.getElementById('teacherPhoto').src = teacher.photo;
            document.getElementById('teacherName').textContent = teacher.name;
            document.getElementById('teacherBio').textContent = teacher.bio;

            // Populate the accordion content
            document.getElementById('qualifications-content').innerHTML = 
                `<ul>${teacher.qualifications.map(q => `<li>${q}</li>`).join('')}</ul>`;
            document.getElementById('subjects-content').innerHTML = 
                `<ul>${teacher.subjects.map(subject => `<li>${subject}</li>`).join('')}</ul>`;
            document.getElementById('style-content').textContent = teacher.style;
            document.getElementById('experience-content').textContent = teacher.experience;
            document.getElementById('contact').textContent = teacher.contact;
            
            document.getElementById('booking-details').innerHTML = teacher.booking.map(slot => {
                return `<p>${slot}</p>`; // Convert each time slot into a paragraph
            }).join('');
            initializeAccordions();


        } else {
            console.error('Teacher not found');
        }
    } catch (error) {
        console.error('Error fetching teacher profile:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchTeacherProfile);

// Toggle accordion content
function toggleAccordionContent(event) {
    const accordionButton = event.target;
    const accordionContent = accordionButton.nextElementSibling;

    // Toggle active class on button
    accordionButton.classList.toggle('active');

    // Toggle display of accordion content
    if (accordionButton.classList.contains('active')) {
        accordionContent.style.display = 'block';
    } else {
        accordionContent.style.display = 'none';
    }
}

// Attach event listeners to accordion buttons
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', toggleAccordionContent);
});
