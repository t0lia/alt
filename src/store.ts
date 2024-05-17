import create from 'zustand';
import exercisesData from './exercises.json';

interface Exercise {
  sentence: string;
  options: string[];
  correctAnswer: string;
}

interface AppState {
  exercises: Exercise[];
  currentExercise: number;
  score: number;
  showResult: boolean;
  showInitialPage: boolean;
  incrementScore: () => void;
  nextExercise: () => void;
  reset: () => void;
  startExercise: () => void;
  exitToMain: () => void;
}


const getRandomExercises = (num: number, data: Exercise[]): Exercise[] => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const useStore = create<AppState>((set) => ({
  exercises: getRandomExercises(10, exercisesData.exercises),
  currentExercise: 0,
  score: 0,
  showResult: false,
  showInitialPage: true,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  nextExercise: () =>
    set((state) => {
      const next = state.currentExercise + 1;
      if (next < state.exercises.length) {
        return { currentExercise: next };
      } else {
        return { showResult: true };
      }
    }),
  reset: () => set({ currentExercise: 0, score: 0, showResult: false, showInitialPage: true }),
  startExercise: () =>
    set(() => ({
      showInitialPage: false,
      exercises: getRandomExercises(10, exercisesData.exercises),
      currentExercise: 0,
      score: 0,
      showResult: false,
    })),
  exitToMain: () => set({ showInitialPage: true, showResult: false, currentExercise: 0, score: 0 }),
}));

export default useStore;
