import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {

    const usuario: Usuario = {
      nombre: 'test',
      clave: '1234'
    };

    expect(usuario).toBeTruthy();
  });
});