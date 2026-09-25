import { getWorkouts } from '@/app/lib/api';
import React from 'react';
import Card from '../Card';

const WorkoutGrid = async () => {
    const workouts = await getWorkouts()
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
                <Card
                    key={workout.id}
                    workout={workout} />
            ))}
        </div>
    );
};

export default WorkoutGrid;