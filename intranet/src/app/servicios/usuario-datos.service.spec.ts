import { TestBed } from '@angular/core/testing';

import { UsuarioDatosService } from './usuario-datos.service';

describe('UsuarioDatosService', () => {
  let service: UsuarioDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioDatosService);
  });
/*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
