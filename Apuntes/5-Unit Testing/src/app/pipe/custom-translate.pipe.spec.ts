import { CustomTranslatePipe } from './custom-translate.pipe';

describe('CustomTranslatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it("Debes de rotornar 'Debes ingresar email'", () => {
    const pipe = new CustomTranslatePipe();
    const result = pipe.transform('STEP_1'); //Debes ingresar email
    expect(result).toEqual('Debes ingresar email');
  });

  it("Debes de rotornar 'Resolver la operación matemática'", () => {
    const pipe = new CustomTranslatePipe();
    const result = pipe.transform('STEP_2'); //Resolver la operación matemática
    expect(result).toEqual('Resolver la operación matemática');
  });

  it("Debes de retornar 'undefined'", () => {
    const pipe = new CustomTranslatePipe();
    const result = pipe.transform('STEP_0'); //undefined
    expect(result).toEqual(undefined);
  });
});
