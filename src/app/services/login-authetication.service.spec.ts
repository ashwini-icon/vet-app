import { TestBed } from '@angular/core/testing';

import { LoginAutheticationService } from './login-authetication.service';

describe('LoginAutheticationService', () => {
  let service: LoginAutheticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAutheticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
