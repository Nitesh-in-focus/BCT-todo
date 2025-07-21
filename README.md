```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BCT Todo App - An Interactive Infographic</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f0f4f8;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
            }
        }
        .flow-step {
            position: relative;
            padding-left: 2.5rem;
            padding-bottom: 2rem;
            border-left: 4px solid #F2A341;
        }
        .flow-step:last-child {
            border-left: none;
            padding-left: calc(2.5rem - 4px);
        }
        .flow-dot {
            position: absolute;
            left: -0.875rem; /* (28px dot width / 2) - (4px border width / 2) = 14px - 2px = 12px -> 0.75rem */
            top: 0;
            height: 1.75rem;
            width: 1.75rem;
            background-color: #F2762E;
            border: 4px solid #f0f4f8;
            border-radius: 50%;
        }
        .kpi-card h3 {
            line-height: 1.2;
        }
    </style>
</head>
<body class="text-gray-800">

    <header class="bg-[#00A6A6] text-white text-center p-12 shadow-lg">
        <h1 class="text-5xl font-bold mb-4">BCT Todo App</h1>
        <p class="text-xl max-w-3xl mx-auto">
            A simple yet powerful Todo application built with the MEAN stack. This infographic breaks down its features, technology, and setup process.
        </p>
    </header>

    <main class="container mx-auto p-4 md:p-8">
        
        <section id="features" class="my-12">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold text-[#D92B2B]">Core Features</h2>
                <p class="text-lg text-gray-600 mt-2">Discover what makes this application efficient and developer-friendly.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
                    <div class="text-6xl text-[#F2762E] mb-4">🔄</div>
                    <h3 class="text-2xl font-bold mb-2">Full CRUD Functionality</h3>
                    <p class="text-gray-600">Create, Read, Update, and Delete your todos with ease through an intuitive interface.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
                    <div class="text-6xl text-[#F2762E] mb-4">📡</div>
                    <h3 class="text-2xl font-bold mb-2">RESTful API</h3>
                    <p class="text-gray-600">A robust backend handles all the logic seamlessly, providing a clean and predictable API.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
                    <div class="text-6xl text-[#F2762E] mb-4">🎨</div>
                    <h3 class="text-2xl font-bold mb-2">User-Friendly UI</h3>
                    <p class="text-gray-600">Built with Angular for a responsive, fast, and engaging user experience across all devices.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
                    <div class="text-6xl text-[#F2762E] mb-4">⚙️</div>
                    <h3 class="text-2xl font-bold mb-2">Easy Setup</h3>
                    <p class="text-gray-600">Get the application up and running on your local machine in just a few simple steps.</p>
                </div>
            </div>
        </section>

        <section id="tech-stack" class="my-12 bg-white rounded-lg shadow-md p-8">
             <div class="text-center mb-10">
                <h2 class="text-4xl font-bold text-[#D92B2B]">The Technology Stack</h2>
                <p class="text-lg text-gray-600 mt-2">The application is built on the powerful MEAN stack, a full-stack JavaScript framework.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="chart-container">
                    <canvas id="techStackChart"></canvas>
                </div>
                <div>
                    <p class="text-lg mb-4">The MEAN stack is an acronym for MongoDB, Express.js, Angular, and Node.js. Each of these components plays a crucial role:</p>
                    <ul class="list-none space-y-3">
                        <li class="flex items-start"><span class="font-bold text-lg text-[#00A6A6] mr-2">M</span><div><strong class="text-gray-900">MongoDB:</strong> A NoSQL database for storing application data in flexible JSON-like documents.</div></li>
                        <li class="flex items-start"><span class="font-bold text-lg text-[#F2A341] mr-2">E</span><div><strong class="text-gray-900">Express.js:</strong> A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</div></li>
                        <li class="flex items-start"><span class="font-bold text-lg text-[#D92B2B] mr-2">A</span><div><strong class="text-gray-900">Angular:</strong> A platform and framework for building single-page client applications using HTML and TypeScript.</div></li>
                        <li class="flex items-start"><span class="font-bold text-lg text-[#4CAF50] mr-2">N</span><div><strong class="text-gray-900">Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine, used to build fast and scalable network applications.</div></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="setup-process" class="my-12">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold text-[#D92B2B]">Getting Started: A 4-Step Guide</h2>
                <p class="text-lg text-gray-600 mt-2">Follow this simple process flow to set up and run the BCT Todo App locally.</p>
            </div>
            <div class="max-w-3xl mx-auto">
                <div class="flow-step">
                    <div class="flow-dot"></div>
                    <h3 class="text-2xl font-bold mb-2 text-[#F24B2E]">Step 1: Clone the Repository</h3>
                    <p class="text-gray-700">Get the source code from GitHub onto your local machine. This is the starting point for any project.</p>
                    <code class="block bg-gray-200 text-gray-800 p-3 rounded-md mt-2 text-sm">git clone https://github.com/your-username/bct-todo.git</code>
                </div>
                <div class="flow-step">
                     <div class="flow-dot"></div>
                    <h3 class="text-2xl font-bold mb-2 text-[#F24B2E]">Step 2: Install Dependencies</h3>
                    <p class="text-gray-700">Install all the required packages for both the frontend (Angular) and backend (Node.js) using npm.</p>
                     <code class="block bg-gray-200 text-gray-800 p-3 rounded-md mt-2 text-sm">npm install</code>
                </div>
                <div class="flow-step">
                    <div class="flow-dot"></div>
                    <h3 class="text-2xl font-bold mb-2 text-[#F24B2E]">Step 3: Configure Environment</h3>
                    <p class="text-gray-700">Create a <code class="text-sm bg-gray-200 p-1 rounded">.env</code> file in the backend directory and add your MongoDB connection string. This tells your app how to connect to the database.</p>
                </div>
                 <div class="flow-step">
                    <div class="flow-dot"></div>
                    <h3 class="text-2xl font-bold mb-2 text-[#F24B2E]">Step 4: Run the Application</h3>
                    <p class="text-gray-700">Start the backend and frontend servers separately. Once running, you can access the app in your browser.</p>
                     <code class="block bg-gray-200 text-gray-800 p-3 rounded-md mt-2 text-sm">npm start (for backend) & ng serve (for frontend)</code>
                </div>
            </div>
        </section>

        <section id="api-endpoints" class="my-12 bg-white rounded-lg shadow-md p-8">
             <div class="text-center mb-10">
                <h2 class="text-4xl font-bold text-[#D92B2B]">Understanding the API Endpoints</h2>
                <p class="text-lg text-gray-600 mt-2">The backend exposes a RESTful API for managing todos. Here's a breakdown of the available methods.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 <div>
                    <p class="text-lg mb-4">The API is built around standard HTTP methods. Each method corresponds to a specific CRUD operation, making the API predictable and easy to consume. The bar chart visualizes the distribution of endpoints across these methods.</p>
                     <ul class="list-none space-y-2 mt-4 text-gray-700">
                        <li><strong>GET /api/todos:</strong> Fetches all todos.</li>
                        <li><strong>POST /api/todos:</strong> Creates a new todo.</li>
                        <li><strong>PUT /api/todos/:id:</strong> Updates a specific todo.</li>
                        <li><strong>DELETE /api/todos/:id:</strong> Removes a specific todo.</li>
                    </ul>
                </div>
                <div class="chart-container">
                    <canvas id="apiChart"></canvas>
                </div>
            </div>
        </section>

    </main>
    
    <footer class="bg-[#00A6A6] text-white text-center p-8 mt-12">
        <h2 class="text-3xl font-bold mb-4">Dive Deeper</h2>
        <p class="mb-6">Explore the source code, contribute to the project, or get in touch.</p>
        <a href="https://github.com/your-username/bct-todo" target="_blank" class="bg-[#F2A341] hover:bg-[#F2762E] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            View Project on GitHub
        </a>
    </footer>

    <script>
        const wrapLabel = (label, maxLength = 16) => {
            if (label.length <= maxLength) {
                return label;
            }
            const words = label.split(' ');
            const lines = [];
            let currentLine = '';
            for (const word of words) {
                if ((currentLine + word).length > maxLength) {
                    lines.push(currentLine.trim());
                    currentLine = '';
                }
                currentLine += word + ' ';
            }
            lines.push(currentLine.trim());
            return lines;
        };
        
        const tooltipTitleCallback = (tooltipItems) => {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            } else {
              return label;
            }
        };

        const commonChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                     labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        title: tooltipTitleCallback
                    }
                }
            }
        };

        const techStackCtx = document.getElementById('techStackChart').getContext('2d');
        new Chart(techStackCtx, {
            type: 'doughnut',
            data: {
                labels: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
                datasets: [{
                    label: 'Tech Stack',
                    data: [25, 25, 25, 25],
                    backgroundColor: [
                        '#00A6A6',
                        '#F2A341',
                        '#D92B2B',
                        '#4CAF50' 
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                ...commonChartOptions,
                 cutout: '70%',
            }
        });

        const apiCtx = document.getElementById('apiChart').getContext('2d');
        new Chart(apiCtx, {
            type: 'bar',
            data: {
                labels: ['GET (Read)', 'POST (Create)', 'PUT (Update)', 'DELETE (Remove)'],
                datasets: [{
                    label: '# of Endpoints',
                    data: [1, 1, 1, 1],
                    backgroundColor: [
                        '#00A6A6',
                        '#F2A341',
                        '#F24B2E',
                        '#D92B2B'
                    ],
                    borderColor: [
                         '#008787',
                         '#D98B2D',
                         '#D96426',
                         '#B82424'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                ...commonChartOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: '#333'
                        },
                        grid: {
                            color: '#e0e0e0'
                        }
                    },
                    x: {
                         ticks: {
                            color: '#333'
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                     ...commonChartOptions.plugins,
                    legend: {
                        display: false
                    }
                }
            }
        });
    </script>
</body>
</html>
```
