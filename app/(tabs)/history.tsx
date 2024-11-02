import { getDailyIntake } from '@/utils/storage';
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function History() {
    const [history, setHistory] = useState<{ date: string; amount: number }[]>([]);
    const [currentStreak, setCurrentStreak] = useState(0);
    const DAILY_GOAL = 2000; // ml

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        // Get last 7 days
        const days = Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return d.toISOString().split('T')[0];
        });

        const intakeHistory = await Promise.all(
            days.map(async (date) => ({
                date,
                amount: await getDailyIntake(date) || 0,
            }))
        );

        setHistory(intakeHistory);
        calculateStreak(intakeHistory);
    };

    const calculateStreak = (data: typeof history) => {
        let streak = 0;
        for (const day of data) {
            if (day.amount >= DAILY_GOAL) {
                streak++;
            } else break;
        }
        setCurrentStreak(streak);
    };

    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.7,
    };

    const getChartData = () => {
        const reversedHistory = [...history].reverse();
        return {
            labels: reversedHistory.map(day =>
                new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })
            ),
            datasets: [{
                data: reversedHistory.map(day => day.amount)
            }]
        };
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.chartContainer}>
                <BarChart
                    data={getChartData()}
                    width={Dimensions.get('window').width - 32}
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix="ml"
                    chartConfig={chartConfig}
                    style={styles.chart}
                    showValuesOnTopOfBars
                    fromZero
                />
            </View>

            {currentStreak > 2 && (
                <View style={styles.achievementCard}>
                    <Text style={styles.achievementText}>
                        🎉 {currentStreak} Day Streak! Keep it up!
                    </Text>
                </View>
            )}

            {history.map((day) => (
                <View key={day.date} style={styles.dayCard}>
                    <Text style={styles.date}>{new Date(day.date).toLocaleDateString()}</Text>
                    <Text style={styles.amount}>{day.amount}ml</Text>
                    {day.amount >= DAILY_GOAL && <Text style={styles.goalMet}>✅ Goal Met!</Text>}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    chartContainer: {
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    chart: {
        borderRadius: 8,
    },
    dayCard: {
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    date: {
        fontSize: 16,
        fontWeight: '600',
    },
    amount: {
        fontSize: 20,
        color: '#2196F3',
        marginVertical: 4,
    },
    goalMet: {
        color: '#4CAF50',
    },
    achievementCard: {
        backgroundColor: '#FFF9C4',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    achievementText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#F57C00',
    },
});
