import BasicScreen from "../view/BasicScreen";
import CoachCtrl from '../control/CoachCtrl';
import ClientCtrl from '../control/ClientCtrl';
import TrainingCtrl from '../control/TrainingCtrl';
import ExerciseCtrl from '../control/ExerciseCtrl';

let tela = new BasicScreen(new CoachCtrl(), new ClientCtrl(), new TrainingCtrl(), new ExerciseCtrl());
tela.firstScreen();