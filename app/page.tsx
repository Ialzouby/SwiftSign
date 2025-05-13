import QuickStartCard from "@/components/quick-start-card"
import RecentActivityCard from "@/components/recent-activity-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <QuickStartCard />
        <RecentActivityCard />
      </div>
    </div>
  )
}
