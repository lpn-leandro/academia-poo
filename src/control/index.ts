import BasicScreen from "../view/BasicScreen";
import promptSync from 'prompt-sync';
import CustomError from '../model/CustomError';

import CoachCtrl from '../control/CoachCtrl';
import ClientCtrl from '../control/ClientCtrl';
import TrainingCtrl from '../control/TrainingCtrl';
import ExerciseCtrl from '../control/ExerciseCtrl';

import Coach from '../model/Coach';
import Client from '../model/Client';
import Training from "../model/Training";
import Exercise from "../model/Exercise";

//let tela = new BasicScreen(new CoachCtrl(), new ClientCtrl());
//tela.firstScreen();

let coachCtrl: CoachCtrl = new CoachCtrl();
let clientCtrl: ClientCtrl = new ClientCtrl();
let trainingCtrl: TrainingCtrl = new TrainingCtrl();
let exerciseCtrl: ExerciseCtrl = new ExerciseCtrl();

//let training: Training;

let newCoach: Coach = coachCtrl.getNewCoach('Leandro Coach', 'leandro@leandro.leandro', 42988133758);
coachCtrl.saveCoach(newCoach);

let newClient: Client = clientCtrl.getNewClient('Leandro Client', 'leandro@leandro.leandro', 42988133758, 1);
clientCtrl.saveClient(newClient);

let newExercise: Exercise = exerciseCtrl.getNewExercise('Leg Press', 97, 15);
exerciseCtrl.saveExercise(newExercise);

let newTraining: Training = trainingCtrl.getNewTraining('Terça', 'Treino de perna');
trainingCtrl.saveTraining(newTraining);
//training.addExercises(0);

let listOfClients: string = clientCtrl.listAllClients();
console.log("a" + listOfClients);

let listOfCoachs: string = coachCtrl.listAllCoachs();
console.log("b" + listOfCoachs);

let listOfExercises: string = exerciseCtrl.listAllExercises();
console.log("c" + listOfExercises)

let listOfTrainings: string = trainingCtrl.listAllTrainings();
console.log("d" + listOfTrainings)