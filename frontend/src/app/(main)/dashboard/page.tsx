import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/StatCard'
import { Clock, DollarSign, Plus, ShoppingBag, Users } from 'lucide-react'

const Dashboard = () => {
  return (
    <section className="min-h-screen w-full bg-accent/60 flex justify-center items-start pt-10 md:pt-20 px-4">
      <div className="max-w-7xl w-full flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Overview</h2>
          <Button variant="outline" size="lg" className="flex items-center bg-white text-black gap-2 cursor-pointer rounded-xl hover:bg-primary/20 text-sm font-medium">
            <Plus className="h-4 w-4" /> Add Note
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Users"
            value="1,250"
            description="+12% from last month"
            Icon={Users}
            colorScheme="blue"
          />

          <StatCard
            title="Total Orders"
            value="845"
            description="+8% from last month"
            Icon={ShoppingBag}
            colorScheme="purple"
          />

          <StatCard
            title="Revenue"
            value="$12,450"
            description="+15% from last month"
            Icon={DollarSign}
            colorScheme="emerald"
          />

          <StatCard
            title="Pending Orders"
            value="24"
            description="Needs attention"
            Icon={Clock}
            colorScheme="amber"
          />
        </div>
      </div>
    </section>
  )
}

export default Dashboard