import Sidebar from "../components/Sidebar";
import AppRoutes from "./Routes";

export default function App() {
    return (
        <div className="container">
            <Sidebar/>        
            <AppRoutes/>
        </div>
    )
}