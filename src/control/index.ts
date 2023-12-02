import BasicScreen from "../view/BasicScreen";
import ClientCtrl from "./ClientCtrl";
import CoachCtrl from "./CoachCtrl";

let tela = new BasicScreen(new CoachCtrl(), new ClientCtrl());
tela.firstScreen();