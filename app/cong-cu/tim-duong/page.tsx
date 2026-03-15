import MapboxDirections from "../_components/MapboxDirections";

export default function ToolPage() {
    return (
        <div>
            <div className="w-screen overflow-x-hidden">
                <MapboxDirections />
            </div>
        </div>
    )
}