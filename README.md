# 📝 Todo App - Dark Academia Edition

A sophisticated, feature-rich todo application with a beautiful dark academia aesthetic, built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

### 🎨 **Dark Academia Design**
- Elegant dark theme with brown and gold accents
- Crimson Text serif typography for scholarly feel
- Subtle parchment textures and antique styling
- Professional dark academia color palette

### 📋 **Core Functionality**
- ✅ Add new tasks with clean input validation
- ✅ Mark tasks as complete/incomplete
- ✅ Delete individual tasks
- ✅ Clear all completed tasks at once
- ✅ Persistent storage using localStorage

### 🔍 **Advanced Filtering**
- **All**: View all tasks
- **Active**: Show only pending tasks
- **Completed**: Display finished tasks
- Smart empty state messages based on current filter

### ⌨️ **Keyboard Shortcuts**
- **Enter**: Add new task (when input is focused)
- **Delete**: Remove focused task
- **Tab**: Navigate between tasks for accessibility

### 🌙 **Theme System**
- Toggle between dark academia and light modern themes
- Persistent theme preference
- Smooth transitions between themes

### 📱 **Responsive Design**
- Mobile-first approach
- Touch-friendly interface
- Optimized layouts for all screen sizes
- Adaptive typography and spacing

## 🚀 Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid/Flexbox, animations, and responsive design
- **Vanilla JavaScript**: ES6+ features, DOM manipulation, localStorage API
- **Google Fonts**: Crimson Text for typography

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or serve locally with any HTTP server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (if available)
     npx serve .
     ```

3. **Start using the app!**
   - The app works entirely in the browser
   - No build process or server required

## 🎯 Usage

### Basic Operations
1. **Add a task**: Type in the input field and press Enter or click "Add"
2. **Complete a task**: Click the checkbox or task text
3. **Delete a task**: Click the "Delete" button or press Delete when focused
4. **Clear completed**: Use the "Clear Completed" button to remove all finished tasks

### Filtering Tasks
- Click **"All"** to see all tasks
- Click **"Active"** to see only pending tasks
- Click **"Completed"** to see only finished tasks

### Theme Switching
- Click the moon/sun icon (🌙/☀️) to toggle between dark and light themes
- Your preference is automatically saved

### Keyboard Navigation
- Use **Tab** to navigate between tasks
- **Enter** to add tasks
- **Delete** to remove focused tasks

## 🎨 Design Philosophy

This todo app embraces the **dark academia** aesthetic, inspired by:
- Classic literature and scholarly environments
- Antique books and parchment textures
- Warm browns and deep blacks
- Elegant serif typography
- Subtle gold accents for luxury

The design balances functionality with aesthetic pleasure, creating an app that's both productive and visually engaging.

## 📱 Responsive Features

### Desktop (>768px)
- Full horizontal layout
- Side-by-side filter buttons
- Optimized for mouse and keyboard interaction

### Tablet (768px - 480px)
- Adapted spacing and button sizes
- Touch-friendly interface
- Maintained readability

### Mobile (<480px)
- Stacked vertical layouts
- Full-width buttons for easy tapping
- Larger touch targets
- Optimized typography scaling

## 🔧 Development

### Project Structure
```
todo-app/
├── index.html          # Main HTML structure
├── script.js           # Application logic and functionality
├── style..css          # Styling and responsive design
└── README.md           # This file
```

### Key Components

#### State Management
```javascript
let todos = [];           // Task array
let currentFilter = 'all'; // Current filter state
let isDarkMode = true;    // Theme state
```

#### Core Functions
- `loadTodos()`: Load from localStorage
- `saveTodos()`: Save to localStorage
- `renderTodos()`: Display filtered tasks
- `addTodo(text)`: Create new task
- `toggleTodo(id)`: Toggle completion
- `deleteTodo(id)`: Remove task
- `setFilter(filter)`: Change filter view

### Styling Architecture
- **CSS Variables**: For consistent theming
- **BEM Methodology**: Organized class naming
- **Mobile-First**: Responsive design approach
- **CSS Grid/Flexbox**: Modern layout techniques

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly** across different browsers and devices
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and naming conventions
- Add comments for complex logic
- Test responsive design on multiple devices
- Ensure accessibility compliance
- Update README for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Fonts** for the beautiful Crimson Text typography
- **Dark Academia** aesthetic inspiration from literature and academia
- **Open source community** for best practices and inspiration

---

**Made with ❤️ and a love for dark academia aesthetics**

*“Study is the bane of childhood, the oil of youth, the indulgence of adulthood, and a restorative in old age.” - Walter Savage Landor*</content>
