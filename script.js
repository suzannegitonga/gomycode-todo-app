// State management
let todos = [];
let currentFilter = 'all';
let isDarkMode = true;

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const filterButtons = {
  all: document.getElementById('filter-all'),
  active: document.getElementById('filter-active'),
  completed: document.getElementById('filter-completed')
};

// Load from localStorage
function loadTodos() {
  const stored = localStorage.getItem('todos');
  if (stored) {
    todos = JSON.parse(stored);
  }

  // Load dark mode preference
  const storedDarkMode = localStorage.getItem('darkMode');
  if (storedDarkMode !== null) {
    isDarkMode = JSON.parse(storedDarkMode);
  }

  // Load current filter
  const storedFilter = localStorage.getItem('currentFilter');
  if (storedFilter) {
    currentFilter = storedFilter;
  }

  applyTheme();
  updateFilterButtons();
  renderTodos();
}

// Save to localStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Save preferences
function savePreferences() {
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  localStorage.setItem('currentFilter', currentFilter);
}

// Render UI
function renderTodos() {
  todoList.innerHTML = '';

  // Filter todos based on current filter
  let filteredTodos = todos;
  if (currentFilter === 'active') {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (currentFilter === 'completed') {
    filteredTodos = todos.filter(todo => todo.completed);
  }

  if (filteredTodos.length === 0) {
    emptyState.style.display = 'block';
    // Update empty state message based on filter
    if (currentFilter === 'active') {
      emptyState.textContent = 'No active tasks. Great job!';
    } else if (currentFilter === 'completed') {
      emptyState.textContent = 'No completed tasks yet.';
    } else {
      emptyState.textContent = 'No tasks yet. Add one above!';
    }
    return;
  } else {
    emptyState.style.display = 'none';
  }

  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.tabIndex = 0; // Make focusable for keyboard navigation

    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
      <span class="task-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
      <button class="delete-btn">Delete</button>
    `;

    todoList.appendChild(li);
  });
}

// Add new todo
function addTodo(text) {
  const newTodo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
}

// Toggle completion status
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

// Delete a todo item
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
}

// Clear all completed todos
function clearCompleted() {
  todos = todos.filter(t => !t.completed);
  saveTodos();
  renderTodos();
}

// Set current filter
function setFilter(filter) {
  currentFilter = filter;
  updateFilterButtons();
  savePreferences();
  renderTodos();
}

// Update filter button active states
function updateFilterButtons() {
  Object.keys(filterButtons).forEach(filter => {
    if (filter === currentFilter) {
      filterButtons[filter].classList.add('active');
    } else {
      filterButtons[filter].classList.remove('active');
    }
  });
}

// Toggle dark mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  applyTheme();
  savePreferences();
}

// Apply theme based on dark mode state
function applyTheme() {
  document.body.classList.toggle('light-mode', !isDarkMode);
  darkModeToggle.textContent = isDarkMode ? '🌙' : '☀️';
}

// Event: Form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
    todoInput.focus();
  }
});

// Event Delegation: Click on list items
todoList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.classList.contains('delete-btn')) {
    deleteTodo(id);
  } else if (e.target.classList.contains('todo-checkbox') || e.target.classList.contains('task-text')) {
    toggleTodo(id);
  }
});

// Event: Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Enter key to add todo (when input is focused)
  if (e.key === 'Enter' && document.activeElement === todoInput) {
    const text = todoInput.value.trim();
    if (text) {
      addTodo(text);
      todoInput.value = '';
    }
  }

  // Delete key to remove focused todo item
  if (e.key === 'Delete') {
    const focusedLi = document.querySelector('li:focus');
    if (focusedLi) {
      const id = focusedLi.dataset.id;
      deleteTodo(id);
    }
  }
});

// Event: Filter buttons
Object.keys(filterButtons).forEach(filter => {
  filterButtons[filter].addEventListener('click', () => setFilter(filter));
});

// Event: Clear completed tasks
clearCompletedBtn.addEventListener('click', clearCompleted);

// Event: Dark mode toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// Initialize app
loadTodos();