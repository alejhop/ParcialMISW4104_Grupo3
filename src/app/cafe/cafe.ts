export class Cafe {
  constructor(
    public id: number,
    public nombre: string,
    public tipo: string,
    public region: string,
    public altura?: string | number,
    public notas?: string,
    public imagen?: string,
  ) {}
}
