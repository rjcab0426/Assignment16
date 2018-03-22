import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormService } from './form.service';
import { HttpClientModule } from '@angular/common/http';


describe('FormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService, HttpClientModule, HttpClientTestingModule, HttpTestingController ] // fixed unit testing Error: StaticInjectorError(DynamicTestModule)[FormService -> HttpClient]:    StaticInjectorError(Platform: core)[FormService -> HttpClient]:      NullInjectorError: No provider for HttpClient!
    });
  });

  it('should be created', async(inject([HttpTestingController, FormService], (httpClient: HttpTestingController, service: FormService) => {
    expect(service).toBeTruthy();
  })));
});
