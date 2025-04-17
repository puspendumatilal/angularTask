This is a simple task management app built using Angular 15 with standalone components. It allows you to add, edit, delete, and view tasks. The app uses localStorage to persist tasks.

Features
Add Task: Allows the user to add a task with a title and description.

Edit Task: Allows the user to edit the details of an existing task.

Delete Task: Allows the user to delete a task from the list.

View Task List: Toggle the display of the task list.

Prerequisites
Node.js (version 14.x or above)

npm (Node Package Manager)

Angular CLI (version 15.x)

Installation
Follow these steps to get the project up and running:

1. Clone the repository
bash
Copy
Edit
git clone <repository_url>
cd task-management-app
2. Install dependencies
Make sure you have Node.js and npm installed. Then, run the following command to install the dependencies:

bash
Copy
Edit
npm install
3. Serve the app
Start the development server using Angular CLI:

bash
Copy
Edit
ng serve
This will run the application locally. Open your browser and go to http://localhost:4200/ to view the app.

Usage
Add a Task:

Enter a task title and description in the input fields.

Click the Add Task button to add the task.

View Tasks:

Click on the View Tasks button to display the list of tasks added.

Edit a Task:

Click the Edit button next to a task. The task data will appear in the form, allowing you to update it.

After editing, click Update Task to save the changes.

Delete a Task:

Click the Delete button next to a task to remove it from the list.

