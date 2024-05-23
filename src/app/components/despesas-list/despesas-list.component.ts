import { Component } from '@angular/core';
import { DespesasService } from '../../services/despesas.service';
import { Despesa } from '../../model/despesa';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoTableAction, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DespesasFormComponent } from '../modals/despesas-form/despesas-form.component';
import { EditDespesasComponent } from '../modals/edit-despesas/edit-despesas.component';

@Component({
  selector: 'app-despesas-list',
  standalone: true,
  imports: [CommonModule, PoTableModule, PoButtonModule],
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.css'],
  providers: [BsModalService],
})
export class DespesasListComponent {

isLoading: boolean = false;

actions: PoTableAction[] = [
  {
    action: this.editarDespesa.bind(this),
    icon: 'po-icon-edit',
    label: 'Editar'
  },
  {
    action: this.excluirDespesa.bind(this),
    icon: 'po-icon-delete',
    label: 'Excluir'
  }
];



  columns: PoTableColumn[] = [
    { property: 'cod_desp', label: 'Código', type: 'number' },
    { property: 'Unidade', label: 'Unidade', type: 'string' },
    { property: 'desc_desp', label: 'Descrição', type: 'string' },
    { property: 'tp_desp', label: 'Tipo', type: 'number' },
    { property: 'valor_unit', label: 'Valor Unitário', type: 'currency', format: 'BRL' }
  ];

  despesas: Despesa[] = []
  modalRef!: BsModalRef;

  constructor(
    private despesaService: DespesasService,
    private modalService: BsModalService,
  ){}

  ngOnInit() {
    this.getAllDespesas()
  }

  getAllDespesas() {
    this.despesaService.getDespesas().subscribe((response: any) => {
      const items = response.items; 
      this.despesas = items;      
    });
  }

  adicionarDespesa() {    
    this.modalRef = this.modalService.show(DespesasFormComponent); 
  }

  editarDespesa() {
    this.modalRef = this.modalService.show(EditDespesasComponent); 
  }
  
  excluirDespesa(item: Despesa) {
    const id = item.id; 
    this.despesaService.deleteDespesa(id);
  }
  
}
