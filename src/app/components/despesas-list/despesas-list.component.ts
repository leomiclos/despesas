import { Component } from '@angular/core';
import { DespesasService } from '../../services/despesas.service';
import { Despesa } from '../../model/despesa';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoInputComponent, PoTableAction, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DespesasFormComponent } from '../modals/despesas-form/despesas-form.component';
import { EditDespesasComponent } from '../modals/edit-despesas/edit-despesas.component';
import Swal from 'sweetalert2';
import { PoInputGeneric } from '@po-ui/ng-components/lib/components/po-field/po-input-generic/po-input-generic';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-despesas-list',
  standalone: true,
  imports: [CommonModule, PoTableModule, PoButtonModule, PoFieldModule, FormsModule],
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.css'],
  providers: [BsModalService],
})
export class DespesasListComponent {

  isLoading: boolean = false;
  despesas: Despesa[] = [];
  modalRef!: BsModalRef;
  searchTerm: string = '';

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
  isLoadingFiltering: boolean = false;

  constructor(
    private despesaService: DespesasService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getAllDespesas();
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

  editarDespesa(despesa: Despesa) {
    this.modalRef = this.modalService.show(EditDespesasComponent, {
      initialState: {
        despesaExistente: despesa
      }
    });
    this.modalRef.content.onClose.subscribe((result: string) => {
      if (result === 'success') {
        this.getAllDespesas();
      }
    });
  }

  excluirDespesa(item: Despesa) {
    const id = item.cod_desp;
    this.despesaService.deleteDespesa(id).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Despesa excluída com sucesso',
        customClass: {
          confirmButton: 'custom-swal-button'
        }
      }).then(res => {
        if (res.isConfirmed) {
          this.getAllDespesas();
        }
      });
    });
  }

  filtrarDespesas() {
    this.isLoadingFiltering = true;
    if (this.searchTerm.trim()) {
      this.despesas = this.despesas.filter(despesa =>
        despesa.desc_desp.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    } else {
      this.getAllDespesas();
    }

    setTimeout(() => {
      this.isLoadingFiltering = false;
    }, 2000);
  }
}
