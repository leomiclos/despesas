import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Despesa } from '../../../model/despesa';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DespesasService } from '../../../services/despesas.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-despesas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-despesas.component.html',
  styleUrls: ['./edit-despesas.component.css']
})
export class EditDespesasComponent {
  @Input() despesaExistente!: Despesa;
  @Output() onClose: EventEmitter<string> = new EventEmitter();

  form!: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private despesaService: DespesasService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Unidade: new FormControl(this.despesaExistente?.Unidade, Validators.required),
      desc_desp: new FormControl(this.despesaExistente?.desc_desp, Validators.required),
      tp_desp: new FormControl(this.despesaExistente?.tp_desp, Validators.required),
      valor_unit: new FormControl(this.despesaExistente?.valor_unit, Validators.required),
    });
  }

  editar() {
    const form = this.form.value;
    form.cod_desp = this.despesaExistente.cod_desp;
    this.despesaService.updateDespesa(form).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Despesa atualizada com sucesso',
          confirmButtonColor: 'rgb(119, 191, 12)'
        }).then(() => {
          this.onClose.emit('success');
          this.bsModalRef.hide();
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao atualizar despesa',
          text: 'Ocorreu um erro ao tentar atualizar a despesa. Por favor, tente novamente mais tarde.',
          confirmButtonColor: 'rgb(119, 191, 12)'
        });
      }
    );
  }

  cancelar() {
    this.onClose.emit('cancel');
    this.bsModalRef.hide();
  }
}
