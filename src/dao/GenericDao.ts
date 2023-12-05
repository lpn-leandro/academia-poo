export default class GenericDao<T> {
  private items: T[] = [];

  public add(item: T) {
    this.items.push(item);
  }

  public listAll(): string {
    let result: string = '';

    for (const item of this.items) {
      result += `#${this.getItemDetails(item)}\n`;
    }

    return result;
  }

  // Método abstrato para obter os detalhes específicos do item
  protected getItemDetails(item: T): string {
    throw new Error('Método getItemDetails deve ser implementado nas classes filhas.');
  }
}
