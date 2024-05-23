import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoButtonModule, PoCheckboxModule, PoDialogService, PoNotificationService, PoTableAction, 
         PoModalAction, PoTableColumn, PoModalComponent, PoModalModule, PoTextareaComponent } from '@po-ui/ng-components';
import { Despesa } from '../../../model/despesa';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DespesasService } from '../../../services/despesas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-despesas-form',
  standalone: true,
  imports: [CommonModule, PoModalModule, PoCheckboxModule, PoButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './despesas-form.component.html',
  styleUrl: './despesas-form.component.css'
})
export class DespesasFormComponent {
  @Output() onClose: EventEmitter<string> = new EventEmitter();

  novaDespesa: Despesa[] = []
  form!: FormGroup;
  Unidade: any;
  despesaExistente: any;

  constructor(
    public bsModalRef: BsModalRef,
    private despesaService: DespesasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Unidade: new FormControl(null, Validators.required),
      desc_desp: new FormControl(null, Validators.required),
      tp_desp: new FormControl(null, Validators.required),
      valor_unit: new FormControl(null, Validators.required),

    })
  }

  adicionar() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.despesaService.createDespesa(this.form.value).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Despesa inserida com sucesso',
          confirmButtonColor: 'rgb(119, 191, 12) '

        }).then(res => {
          if (res.isConfirmed) {
            window.location.reload()
          }
        })
      });
    } else {
      const invalidFields = [];

      if (this.form.controls['Unidade'].invalid) {
        invalidFields.push('Unidade');
      }
      if (this.form.controls['desc_desp'].invalid) {
        invalidFields.push('Descrição');
      }
      if (this.form.controls['tp_desp'].invalid) {
        invalidFields.push('Tipo');
      }
      if (this.form.controls['valor_unit'].invalid) {
        invalidFields.push('Valor Unitário');
      }

      const message = invalidFields.join(', ');
      Swal.fire({
        icon: 'error',
        title: 'Erro de Validação',
        text: `Os seguintes campos são inválidos: ${message}`,
        confirmButtonColor: 'rgb(119, 191, 12)'
      })
    }
  }


  cancelar() {
    this.onClose.emit('cancel');
    this.bsModalRef.hide();
  }

}
