📝 To-Do List App

A Simple and lightweight To-Do List Web App built using HTML, CSS, and JavaScript.
This appp allows users to add tasks, mark them as completed, delete tasks, and save them using localStorage so they remain even after refreshing the page.

🚀 Features

➕ Add new tasks

✔️ Mark tasks as completed (toggle on click)

🗑️ Delete tasks

💾 Persistent storage using localStorage

⚡ Fast and simple UI

📱 Responsive and beginner-friendly code

📂 Project Structure
/project-folder
  ├── index.html
  ├── style.css
  └── script.js

🧠 How It Works
LocalStorage

All tasks are stored inside the browser using localStorage:

localStorage.setItem("tasks", JSON.stringify(tasks));


On page load, the app retrieves and displays saved tasks:

JSON.parse(localStorage.getItem("tasks")) || [];

Task Rendering

Each task is displayed as an <li> containing:

Task text

Delete button

🧩 JavaScript Overview

Key functions used:

✔ renderTask(task)

Creates and displays a task in the list.

✔ saveTasks()

Stores tasks in localStorage.

✔ Event Listeners

Add new task

Click to toggle task completion

Delete a task

📸 Screenshot (Optional)

Add a screenshot of your UI here if you want.

🏃‍♂️ How to Use

Clone or download the project

Open index.html in your browser

Start adding tasks!

✨ Future Improvements (Optional)

Edit task feature

Categories / priority levels

Dark mode

Drag-and-drop sorting

🤝 Contributing

Feel free to fork this repo, open issues, or submit pull requests.

📜 License

This project is free to use and modify.

Enjoy coding! 😊
