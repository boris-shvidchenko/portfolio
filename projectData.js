// Array will store individual project information for the projects page 
export const projectData = [
    {
        id: 'flashcards',
        key: '1',
        title: 'Flashcard App',
        summary: 'A useful flashcard app.',
        description: 'Eventually branching out towards backend development has been a goal of mine ever since I started learning front end, both due to an interest in it and in order to become a better and more well rounded developer, and this project was a way for me to get some hands on experience with that. This application allows users to create flashcards and, by logging in with their Gmail accounts, save their collections for future reference. Editing capabilities have also been implemented, alongside the ability to delete cards, sort saved cards, and shuffle collections.',
        description2: 'This was an enjoyable build to work on which allowed me to get comfortable with using Firebase to store card data, authenticate users, and explore interesting dependencies such as React Firebase Hooks and the React Loader Spinner (for asynchronous operations). Debugging and trying to piece together an app that had quite a few moving parts, including a decent amount of state to manage, was also rewarding. Let me know your thoughts, especially if there is anything that I could improve on. The icons that I used came from Heroicons and Icons8.',
        img: 'images/project-images/flashcards.png',
        url: 'https://flashcards-bshvid.vercel.app/',
        url2: 'https://github.com/boris-shvidchenko/flashcard-app'
    },
    {
        id: 'cafe',
        key: '2',
        title: 'Coffee Shop Website',
        summary: 'A cafe website build.',
        description: "The main objective for this project was to focus on creating a clean and effective website that followed the fundamentals of web design, including: the use of white space, visual hierarchy, fonts, and color contrast. The idea was to create a fictional coffee shop/café website that was simple in design yet responsive and user friendly no matter what device the website was viewed on. This was an enjoyable build that allowed me to experiment with various looks to see what worked (and what didn't). ",
        description2: 'The majority of images that I used came from Pexels and the icons were either from Heroicons or from Icons8.    ',
        img: 'images/project-images/cafe.png',
        url: 'https://cafe-bshvid.vercel.app/',
        url2: 'https://github.com/boris-shvidchenko/cafe-website'
    },
    {
        id: 'trivia',
        key: '3',
        title: 'Trivia!',
        summary: 'A responsive trivia game.',
        description: "This was one of the first projects that I built using React with the Next.js framework, where I wasn't following tutorials or courses to complete the work. This was built entirely from scratch and was a fun and rewarding learning experience. Furthermore, this game was built using Tailwind CSS 3.0." ,
        description2: "The primary goal for this project was to gain an understanding of basic API usage and data manipulation in a more complex development environment, whilst trying to keep UI/UX design principals in mind to ensure a clean and responsive build. The data was obtained from the Open Trivia Database, which offers a free to use database with an extensive selection of questions. Although I am far from being an expert web designer I had a great time experimenting with various design principals/techniques and I hope to apply, and improve on, what I've learned from this project to my other builds. Take a look and let me know what you think!",
        img: 'images/project-images/trivia.png',
        url: 'https://trivia-bshvid.vercel.app/',
        url2: 'https://github.com/boris-shvidchenko/trivia-game'
    },
    {
        id: 'geobooks',
        key: '4',
        title: 'GeoBooks',
        summary: 'A book search app.',
        description: 'GeoBooks is an easy to use application which allows users to look for books through the Google Books API. One of my main goals for this build was to focus on a more modern design and I enjoyed exploring the different approaches of how an application/website can be set up in order to ensure a better user experience. Furthermore, I decided to go with a dark theme for this project and figuring out how to best set up the components and overall text to visually complement the theme was at times challenging but also a great learning experience.',
        description2: "I also explored a number of dependencies, some that I haven't used before, which provided useful design features and helped make the build run smoother and, in my opinion, look better. Dependencies such as the React Promise Tracker helped track asynchronous operations and render loading components, React Loader Spinner provided ready to use loading animations, and Tailwind add ons such as Line Clamp helped make text more responsive. Icons came from Heroicons and Icons8.",
        img: 'images/project-images/geobooks.png',
        url: 'https://geobooks.vercel.app/',
        url2: 'https://github.com/boris-shvidchenko/book-search-app'
    }
]
