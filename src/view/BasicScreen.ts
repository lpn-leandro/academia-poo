import promptSync from 'prompt-sync';
import ClientCtrl from '../control/ClientCtrl';
import Client from '../model/Client';
import CoachCtrl from '../control/CoachCtrl';
import TrainingCtrl from '../control/TrainingCtrl';
import ExerciseCtrl from '../control/ExerciseCtrl';
import Coach from '../model/Coach';
import CustomError from '../model/CustomError';

export default class BasicScreen {
  private prompt = promptSync();
  private clientCtrl!: ClientCtrl;
  private coachCtrl!: CoachCtrl;
  private customError!: CustomError;
  private trainingCtrl!: TrainingCtrl;
  private exerciseCtrl!: ExerciseCtrl;

  constructor(coachCtrl: CoachCtrl, clientCtrl: ClientCtrl) {
    this.coachCtrl = coachCtrl;
    this.clientCtrl = clientCtrl;
  }

  public firstScreen() {
    let showScreen: boolean = false;

    while (!showScreen) {
      // Get user input
      //console.clear();
      let choice = this.prompt(
        'Bem vindo ao Academia POO\nSelecione uma das opções abaixo:\n1 - Entrar como Cliente\n2 - Entrar como treinador\n3 - Entrar como Admin\n4 - Sair'
      );
      // Convert the string input to a number
      let nr = Number(choice);
      switch (nr) {
        case 1:
          console.clear();
          this.screenClient();
          break;
        case 2:
          console.clear();
          this.screenCoach();
          break;
        case 3:
          console.clear();
          this.screenAdmin();
          break;
        case 4:
          showScreen = true;
          break;
        default:
          console.clear();
          console.log('Opção não existente!');
      }
    }
  }

  //Nessa tela o cliente consegue Visualizar os seus treinos, e os ajustar o peso dos exercicios
  public screenClient() {
    let showScreen: boolean = false;
    while (!showScreen) {
      // Get user input
      //console.clear();
      let choice = this.prompt(
        'Cliente ...\nSelecione uma das opções abaixo:\n1 - Visualizar Treinos\n2 - AJustar Treinos\n3 - Sair\n'
      );
      // Convert the string input to a number
      let nr = Number(choice);
      switch (nr) {
        case 1:
          console.clear();
          this.listAllTrainings();
          break;
        case 2:
          console.clear();
          this.listAllClients();
          break;
        case 3:
          console.clear();
          showScreen = true;
          this.firstScreen();
          break;
        default:
          console.clear();
          console.log('Opção não existente!');
      }
    }
  }

  //Nessa tela o treinador
  public screenCoach() {
    let showScreen: boolean = false;
    while (!showScreen) {
      // Get user input
      //console.clear();
      let choice = this.prompt(
        'Treinador ...\nSelecione uma das opções abaixo:\n1 - Verificar Treinos\n2 - Ajustar Treinos\n3 - Voltar\n'
      );
      // Convert the string input to a number
      let nr = Number(choice);

      switch (nr) {
        case 1:
          console.clear();
          this.listAllTrainings();
          break;
        case 2:
          console.clear();
          this.listAllClients();
          break;
        case 3:
          showScreen = true;
          this.firstScreen();
          break;
        default:
          console.clear();
          console.log('Opção não existente!');
      }
    }
  }

  //Nessa tela, é onde é realizado o cadastro de clientes e treinadores para a aplicação, e a listagem de ambos
  public screenAdmin() {
    let showScreen: boolean = false;
    while (!showScreen) {
      // Get user input
      //console.clear();
      let choice = this.prompt(
        '\nSelecione uma das opções abaixo:\n1 - Cadastrar Cliente\n2 - Cadastrar Treinador\n3 - Listar Clientes\n4 - Listar Treinadores\n5 - Voltar\n'
      );
      // Convert the string input to a number
      let nr = Number(choice);

      switch (nr) {
        case 1:
          console.clear();
          this.registerNewClient();
          break;
        case 2:
          console.clear();
          this.registerNewCoach();
          break;
        case 3:
          console.clear();
          this.listAllClients();
          break;
        case 4:
          console.clear();
          this.listAllCoachs();
          break;
        case 5:
          console.clear();
          showScreen = true;
          this.firstScreen();
          break;
        default:
          console.clear();
          console.log('Opção não existente!');
      }
    }
  }

  public registerNewCoach() {
    try {
      console.clear();
      let name: string = this.prompt('Digite o nome do Treinador: ');
      let email: string = this.prompt('Digite o email do Treinador: ');
      let cellphone: number = parseInt(
        this.prompt('Digite o telefone do Treinador: ')
      );
      if (isNaN(cellphone)) {
        throw new CustomError(
          'Entrada inválida. Por favor, forneça um número válido.'
        );
      }

      let newCoach: Coach = this.coachCtrl.getNewCoach(name, email, cellphone);
      this.coachCtrl.saveCoach(newCoach);
    } catch (e: any) {
      throw new CustomError('Erro -> ' + e.getErrorMessage());
    }
  }

  public registerNewClient() {
    try {
      console.clear();

      const name: string = this.prompt('Digite o nome do Cliente: ');
      const email: string = this.prompt('Digite o email do Cliente: ');

      const cellphone: number = parseInt(
        this.prompt('Digite o telefone do Cliente: ')
      );
      if (isNaN(cellphone)) {
        throw new CustomError(
          'Entrada inválida. Por favor, forneça um número válido.'
        );
      }
      const enrollment: number = parseInt(
        this.prompt('Digite a matricula do Cliente: ')
      );
      if (isNaN(enrollment)) {
        throw new CustomError(
          'Entrada inválida. Por favor, forneça um número válido.'
        );
      }

      let newClient: Client = this.clientCtrl.getNewClient(
        name,
        email,
        cellphone,
        enrollment
      );
      this.clientCtrl.saveClient(newClient);
    } catch (e: any) {
      throw new CustomError('Erro -> ' + e.getErrorMessage());
    }
  }

  public listAllClients() {
    let listOfClients: string = this.clientCtrl.listAllClients();
    console.clear();
    console.log(listOfClients);
  }

  public listAllCoachs() {
    let listOfCoachs: string = this.coachCtrl.listAllCoachs();
    console.clear();
    console.log(listOfCoachs);
  }

  public listAllTrainings() {
    let listOfTrainings: string = this.trainingCtrl.listAllTrainings();
    console.clear();
    console.log(listOfTrainings);
  }

  public listAllExercises() {
    let listOfExercises: string = this.exerciseCtrl.listAllExercises();
    console.clear();
    console.log(listOfExercises);
  }

}
