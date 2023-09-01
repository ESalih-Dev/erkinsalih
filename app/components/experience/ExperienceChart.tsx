import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts'
import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'

type Props = Pick<CompanyInfo, 'chartData'>

export const ExperienceChart = ({ chartData }: Props) => (
    <ResponsiveContainer width="100%" height={450}>
        <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 50, right: 20, bottom: 20, left: 20 }}
        >
            <CartesianGrid
                strokeDasharray="3"
                horizontal={false}
                stroke="#334155" // slate-700
            />
            <XAxis
                type="number"
                fontSize={14}
                stroke="#cbd5e1" // slate-300
                tickLine={false}
                axisLine={false}
                ticks={[2, 4, 6, 8, 10]}
                domain={[0, 10]}
            />
            <YAxis
                dataKey="name"
                interval={0}
                type="category"
                fontSize={14}
                stroke="#cbd5e1" // slate-300
                tickLine={false}
                axisLine={false}
            />
            <Bar
                dataKey="value"
                fill="#84cc16" // lime-500
                radius={8}
            />
        </BarChart>
    </ResponsiveContainer>
)
