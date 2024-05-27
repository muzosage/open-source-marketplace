document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Example Project 1',
            description: 'This is an example project.',
            link: '#',
            donation: 'https://example.com/donate1'
        },
        {
            name: 'Example Project 2',
            description: 'This is another example project.',
            link: '#',
            donation: 'https://example.com/donate2'
        }
    ];

    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
            <a href="${project.donation}">Donate</a>
        `;
        projectSection.appendChild(projectDiv);
    });
});
