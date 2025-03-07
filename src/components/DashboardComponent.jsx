import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      <section className="flex justify-between">
        {/* display summary on each card */}
        {dashboard.map(item => (
          <div key={item.id} className="flex gap-5">
            <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
              <div className={`p-3 rounded-xl ${item.color}`}>
                <img src={item.icon} alt="file icon" />
              </div>
              <div>
                <p className="text-xl font-semibold">{item.totalTasks}</p>
                <p className="text-gray-400">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
