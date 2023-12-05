import ErrorI from "./ErrorI";

export default class CustomError implements ErrorI {
  message?: string;

    constructor(message: string) {
      this.message = message;
    }
    
    getErrorMessage(): string {
      return 'Alguma coisa deu errado!: ' + this.message;
    }

  }