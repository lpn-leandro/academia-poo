import promptSync from 'prompt-sync';
import CustomError from '../model/CustomError';

import ClientCtrl from '../control/ClientCtrl';
import CoachCtrl from '../control/CoachCtrl';
import TrainingCtrl from '../control/TrainingCtrl';
import ExerciseCtrl from '../control/ExerciseCtrl';

import Client from '../model/Client';
import Coach from '../model/Coach';
import Training from '../model/Training';
import Exercise from '../model/Exercise';

export default class BasicScreen {
  private prompt = promptSync();
  private clientCtrl!: ClientCtrl;
  private coachCtrl!: CoachCtrl;
  private customError!: CustomError;
  private trainingCtrl!: TrainingCtrl;
  private exerciseCtrl!: ExerciseCtrl;

  constructor(
    coachCtrl: CoachCtrl,
    clientCtrl: ClientCtrl,
    trainingCtrl: TrainingCtrl,
    exerciseCtrl: ExerciseCtrl
  ) {
    this.coachCtrl = coachCtrl;
    this.clientCtrl = clientCtrl;
    this.trainingCtrl = trainingCtrl;
    this.exerciseCtrl = exerciseCtrl;
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
        'Cliente ...\nSelecione uma das opções abaixo:\n1 - Visualizar Treinos\n2 - Ajustar Exercicio\n3 - Sair\n'
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
          this.editExercise();
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
        `Treinador
Selecione uma das opções abaixo:
1 - Verificar Treinos
2 - Verificar Exercicios
3 - Adicionar Treinos
4 - Adicionar Exercicios
5 - Adicionar Exercicio a Treino
6 - Procurar um Exercicio
7 - Voltar\n`
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
          this.listAllExercises();
          break;
        case 3:
          showScreen = true;
          this.registerNewTraining();
          break;
        case 4:
          showScreen = true;
          this.registerNewExercise();
          break;
        case 5:
          showScreen = true;
          this.addNewExerciseToTraining();
          break;
        case 6:
          showScreen = true;
          this.findExercise();
          break;
        case 7:
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

  //Nessa tela, é onde é realizado o cadastro de clientes e treinadores para a aplicação, e a listagem de ambos
  public screenAdmin() {
    let showScreen: boolean = false;
    while (!showScreen) {
      // Get user input
      //console.clear();
      let choice = this.prompt(
        `Selecione uma das opções abaixo:
1 - Cadastrar Cliente
2 - Cadastrar Treinador
3 - Listar Clientes
4 - Listar Treinadores
5 - Voltar\n`
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

  public registerNewExercise() {
    try {
      console.clear();
      const name: string = this.prompt('Insira o nome do Exercicio: ');
      const weight: number = parseInt(
        this.prompt('Insira o peso do Exercicio: ')
      );
      if (isNaN(weight)) {
        throw new CustomError(
          'Entrada inválida. Por favor, forneça um peso válido.'
        );
      }
      const sequence: number = parseInt(
        this.prompt('Insira as repetiçoes do Exercicio: ')
      );
      if (isNaN(sequence)) {
        throw new CustomError(
          'Entrada inválida. Por favor, forneça um número de repetiçoes válido.'
        );
      }
      const series: number = parseInt(
        this.prompt('Insira as Séries do Exercicio: ')
      );
      if (isNaN(series)) {
        throw new CustomError(
          'Entrada inválida. Por favor, forneça um número de séries válido.'
        );
      }
      let newExercise: Exercise = this.exerciseCtrl.getNewExercise(
        name,
        weight,
        sequence,
        series
      );
      this.exerciseCtrl.saveExercise(newExercise);
    } catch (e: any) {
      throw new CustomError('Erro -> ' + e.getErrorMessage());
    }
  }

  public registerNewTraining() {
    console.clear();
    const name: string = this.prompt('Insira o nome do Treino: ');
    const description: string = this.prompt('Insira a descrição do Treino: ');
    let newTraining: Training = this.trainingCtrl.getNewTraining(
      name,
      description
    );
    this.trainingCtrl.saveTraining(newTraining);
  }

  public addNewExerciseToTraining() {
    try {
      console.clear();
      this.listAllTrainings();

      const trainingId: number = parseInt(
        this.prompt('Digite o ID do treino: ')
      );
      const training = this.trainingCtrl.findTrainingById(trainingId);

      if (!training) {
        throw new CustomError('Treino não encontrado com o ID fornecido.');
      }

      console.log('Exercícios disponíveis para adicionar:');
      this.listAllExercises();

      const exerciseId: number = parseInt(
        this.prompt('Digite o ID do exercício: ')
      );
      const exercise = this.exerciseCtrl.findExerciseById(exerciseId);

      if (!exercise) {
        throw new CustomError('Exercício não encontrado com o ID fornecido.');
      }

      training.addExercises(exercise);
      console.log('Exercício adicionado ao treino com sucesso.');
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

  //busca especializada
  public findExercise() {
    console.clear();
    const name: string = this.prompt(
      'Insira o nome do Exercicio que deseja encontrar: '
    );
    let exercise = this.exerciseCtrl.findExerciseByName(name);
    if (exercise) {
      console.log(`Exercício encontrado: ${exercise.getName()}\n`);
      // Faça o que precisar com o exercício encontrado
    } else {
      console.log(`Nenhum exercício encontrado com o nome ${name}\n`);
    }
  }

  public editExercise() {
    try {
      console.clear();
      this.listAllTrainings();
  
      const trainingId: number = parseInt(this.prompt('Digite o ID do treino: '));
      const training = this.trainingCtrl.findTrainingById(trainingId);
  
      if (!training) {
        throw new CustomError('Treino não encontrado com o ID fornecido.');
      }
  
      console.log('Exercícios no treino:');
      console.log(training.getExercisesName());
  
      const exerciseId: number = parseInt(this.prompt('Digite o ID do exercício para editar o peso: '));
      const exercise = this.exerciseCtrl.findExerciseById(exerciseId);
  
      if (!exercise) {
        throw new CustomError('Exercício não encontrado com o ID fornecido.');
      }
  
      const newWeight: number = parseInt(this.prompt('Digite o novo peso para o exercício: '));
  
      if (isNaN(newWeight)) {
        throw new CustomError('Entrada inválida. Por favor, forneça um peso válido.');
      }
  
      exercise.setWeight(newWeight);
      console.log('Peso do exercício editado com sucesso.');
    } catch (e: any) {
      throw new CustomError('Erro -> ' + e.getErrorMessage());
    }
  }

}
