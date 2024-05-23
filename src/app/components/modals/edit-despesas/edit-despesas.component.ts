import { Component, EventEmitter, Output } from '@angular/core';
import { Despesa } from '../../../model/despesa';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PoButtonModule, PoCheckboxModule, PoDialogService, PoNotificationService, PoTableAction, 
  PoModalAction, PoTableColumn, PoModalComponent, PoModalModule, PoTextareaComponent } from '@po-ui/ng-components';import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DespesasService } from '../../../services/despesas.service';

@Component({
  selector: 'app-edit-despesas',
  standalone: true,
  imports: [CommonModule, PoModalModule, PoCheckboxModule, PoButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-despesas.component.html',
  styleUrl: './edit-despesas.component.css'
})
export class EditDespesasComponent {

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


  editar() {
    const form = this.form.value
    this.despesaService.updateDespesa(form);
  }
  cancelar() {
    this.onClose.emit('cancel');
    this.bsModalRef.hide();
  }
}
