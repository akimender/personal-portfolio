import '../styles/Dashboard.css';

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Dashboard = () => (
    <header className="dashboard-container">
        <nav className="dashboard-nav">
            <ul>
                {NAV_ITEMS.map(({ id, label }) => (
                    <li key={id}>
                        <a href={`#${id}`}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Dashboard;
