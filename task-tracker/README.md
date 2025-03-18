# Task Tracker

This is a simple task tracker application built with Vite and Vue.

## Project Structure

- `src/App.vue`: The main application component that serves as the entry point of the application.
- `src/components/TaskList.vue`: A reusable component that displays a list of tasks.
- `src/components/TaskItem.vue`: A reusable component that represents an individual task item.

## Getting Started

1. Clone the repository.
2. Install the dependencies: `npm install`.
3. Start the development server: `npm run dev`.
4. Open the application in your browser: `http://localhost:3000`.

## Usage

- Add tasks by entering a task name and pressing the "Add Task" button.
- Mark tasks as completed by clicking the checkbox next to the task.
- Delete tasks by clicking the "Delete" button next to the task.

## Features

With these changes, your project will have:

- Basic routes (Home, About, Task Tracker).
- Dynamic routes (TaskDetail).
- Nested routes (UserProfile, UserPosts).
- Passing data through routes using props.
- You can navigate to `/task/1` to see the task detail and to `/user/1/profile` or `/user/1/posts` to see the nested routes for the user.
- Your project will have CRUD operations implemented using Vuex and API requests. You can add, update, and delete tasks, and the changes will be reflected in the state managed by Vuex.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
