import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConsultaCepService } from './../services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  user: any = {
    name: null,
    email: null,
  };

  constructor(
    private http: HttpClient,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    // console.log(form);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe((d: any) => console.log(d));
  }

  verifyValidTouched(field: any) {
    return !field.valid && field.touched;
  }

  applyErrorCss(field: any, form: any) {
    return {
      'has-error': this.verifyValidTouched(field),
      'has-feedback': this.verifyValidTouched(field),
    };
  }

  cleanFields(form: any) {
    form.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  populateFields(dados: any, form: any) {
    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
    /*
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: form.value.endereco.cep,
        numero: dados.numero || form.value.endereco.numero,
        complemento: dados.complemento || form.value.endereco.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
    */
  }

  checkCEP({ value }: any, form: any): void {
    value = value.replace(/\D/g, '');

    if (value !== '') {
      this.consultaCepService.consultaCEP(value).subscribe((dados: any) => {
        this.populateFields(dados, form);
      });
    }
  }
}
